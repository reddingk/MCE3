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
  var ret = {"error":null, "response":null};
  console.log("Looking For %s", aname);
  
  if(aname == null) {
    ret.error = "No Artist Name";
  }
  else {
    var artist = db.get('artists').find({ name: aname}).value();

    if(artist != null){
      ret.response = artist;
    }
    else {
      ret.error = "Unable to find artist";
    }
  }
  res.json(ret);
}

function getSpotlightContent(res){
  var ret = {"error":null, "response":{"video":null, "news":null }};
  console.log("Retrieving Spotlight Content");
  try {
    var news = db.get('news').filter({ spotlight: true}).value();
    var videos = dbR('artists').findAll({'videos.spotlight': true});
    
    ret.response.news = (news == undefined ? null : news);
    ret.response.video = (videos == undefined? null : videos);
  }
  catch(ex){
    console.log("Error: %s", ex);
    ret.error = "Error retrieving Spotlights";
  }

  res.json(ret);
}

function getNews(query, res){
  var ret = {"error":null, "response":null};
  console.log("Retrieving News Content");

  try {
    var filter = {};

    if(query.type != undefined){
      console.log("Adding Type Filter");
      filter.type = query.type;
    }
    if(query.date != undefined){
      console.log("Adding Date Filter");
      filter.date = query.date;
    }

    var newsList = db.get('news').filter(filter);

    if(query.total != undefined && query.total != 'ALL'){
      ret.response = newsList.take(query.total).value();
    }
    else {
      ret.response = newsList.value();
    }
  }
  catch(ex){
    console.log("Error: %s", ex);
    ret.error = "Error retrieving news";
  } 

  res.json(ret);
}

module.exports = function (app) {
  app.post('/api/artist', jsonParser, function (req, res) {
    console.log(req.body);
    if(req.body != null){
      var artistname = req.body.artist;
      getArtist(artistname, res);
    }
  });

  app.get('/api/spotlight', function (req, res) {
    getSpotlightContent(res);    
  });

  app.post('/api/news', jsonParser, function (req, res) {
    console.log(req.body);
    if(req.body != null){
      var query = req.body.query;
      getNews(query, res);
    }
  });
}