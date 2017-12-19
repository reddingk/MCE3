var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const low = require('lowdb');
const lowR = require('lowdb-recursive');

const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);
const dbR = lowR('db.json');

db._.mixin({
  dateCmp: function(collection, obj, key) {
    key = key || 'date';
    var newCol = [];
    var d1 = Date.parse(obj[key]);

    for(var i =0; i < collection.length; i++){
      var el = collection[i];
      var d2 = Date.parse(el[key]);

      if(d1 < d2){
        newCol.push(el);
      }
    }
    return newCol;
  }
})

function getArtist(aname, res){
  var ret = {"error":null, "response":{"artist":null}};
  console.log("Looking For %s", aname);
  
  if(aname == null) {
    ret.error = "No Artist Name";
  }
  else {
    var artist = db.get('artists').find({ name: aname}).value();

    if(artist != null){
      ret.response.artist = artist;
    }
    else {
      ret.error = "Unable to find artist";
    }
  }
  res.json(ret);
}

function getAllArtists(res){
  var ret = {"error":null, "response":{"artists":null}};
  console.log("Retrieving All Artists");

  var artists = db.get('artists').value();

  if(artists != null){
    ret.response.artists = artists;
  }
  else {
    ret.error = "Unable to find artists";
  }
  res.json(ret);
}

function getAllReleases(res){
  var ret = {"error":null, "response":{"music":null, "mixtapes":null, "videos":null}};
  console.log("Retrieving All Releases");

  var tmpartists = db.get('artists').value();
  var allArtists = null;
  if(tmpartists != null){
    allArtists = tmpartists;
  }
  else {
    ret.error = "Unable to find artists for releases";
  }

  if(allArtists != null) {
    var tmpMusic = [];
    var tmpMixtapes = [];
    var tmpVideos = [];

    for(var i = 0; i < allArtists.length; i++){
      // parse music/mixtapes
      for(var j =0; j < allArtists[i].releases.length; j++){
        var release = allArtists[i].releases[j];
        release.artist = allArtists[i].name;

        if(release.type.includes('mixtape')){
            tmpMixtapes.push(release);
        }
        else {
            tmpMusic.push(release);
        }
      }

      // parse videos
      for(var k =0; k < allArtists[i].videos.length; k++){
        allArtists[i].videos[k].artist = allArtists[i].name;
        tmpVideos.push(allArtists[i].videos[k]);
      }
    }

    // add music lists to return object
    ret.response.music = tmpMusic.sort(function(a,b) { var dateA= new Date(a.date), dateB=new Date(b.date); return dateB - dateA; });
    ret.response.mixtapes = tmpMixtapes.sort(function(a,b) { var dateA= new Date(a.date), dateB=new Date(b.date); return dateB - dateA; });
    ret.response.videos = tmpVideos.sort(function(a,b) { var dateA= new Date(a.date), dateB=new Date(b.date); return dateB - dateA; });    
  }

  res.json(ret);
}

function getSpotlightContent(res){
  var ret = {"error":null, "response":{"videos":null, "news":null, "recentNews":null }};
  console.log("Retrieving Spotlight Content");
  try {
    var news = db.get('news').filter({ spotlight: true}).value();
    var videos = dbR('artists').findAll({'videos.spotlight': true});
    
    var tmpRecent = db.get('news').sortBy('date').value();
    var recentNews = tmpRecent.reverse().slice(0, 7);

    ret.response.news = (news == undefined ? null : news);
    ret.response.videos = (videos == undefined? null : videos);
    ret.response.recentNews = (recentNews == undefined? null : recentNews);
  }
  catch(ex){
    console.log("Error: %s", ex);
    ret.error = "Error retrieving Spotlights";
  }

  res.json(ret);
}

function getNews(query, res){
  var ret = {"error":null, "response":{"news":null}};
  console.log("Retrieving News Content");

  try {
    var filter = {};

    if(query.type != undefined){
      filter.type = query.type;
    }
    if(query.date != undefined){
      filter.date = query.date;
    }

    var newsList = db.get('news').filter(filter);

    if(query.total != undefined && query.total != 'ALL'){
      ret.response.news = newsList.take(query.total).value();
    }
    else {
      ret.response.news = newsList.value();
    }
  }
  catch(ex){
    console.log("Error: %s", ex);
    ret.error = "Error retrieving news";
  } 

  res.json(ret);
}

function getEvents(query, res){
  var ret = {"error":null, "response":{"events":null}};
  console.log("Retrieving Events Content: %s-%s", query.artistname, query.date);

  try { 
    var filter = {};

    // By Artist Name
    if(query.artistname != undefined && query.artistname != "ALL"){
      filter.artistname = query.artistname;
    }
    var eventList = db.get('events').filter(filter);

    // Check Dates
    if(query.date != undefined && query.date != 'ALL'){         
      eventList = eventList.dateCmp(query,'date');
    }    

    // Sort By Date
    eventList = eventList.sortBy('date').value().reverse();

    if(query.total != undefined){
      eventList = eventList.slice(0, query.total);
    }
    // Set Response    
    ret.response.events = eventList;
  }
  catch(ex){
    console.log("Error: %s", ex);
    ret.error = "Error retrieving events";
  } 

  res.json(ret);
}

module.exports = function (app) {
  app.post('/api/artist', jsonParser, function (req, res) {    
    if(req.body != null){
      var artistname = req.body.artistname;
      getArtist(artistname, res);
    }
  });

  app.get('/api/allArtists', function (req, res) {
    getAllArtists(res);    
  });

  app.get('/api/spotlight', function (req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    getSpotlightContent(res);    
  });

  app.post('/api/news', jsonParser, function (req, res) {
    console.log(req.body);
    if(req.body != null){
      var query = req.body.query;
      getNews(query, res);
    }
  });

  app.post('/api/events', jsonParser, function (req, res) {    
    if(req.body != null){
      var query = req.body.query;
      getEvents(query, res);
    }
  });

  app.get('/api/allReleases', function (req, res) {
    getAllReleases(res);    
  });
}