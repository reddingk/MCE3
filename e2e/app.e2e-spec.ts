import { MCE3Page } from './app.po';

describe('mce3 App', function() {
  let page: MCE3Page;

  beforeEach(() => {
    page = new MCE3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
