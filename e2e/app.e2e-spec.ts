import { RecordseriesPage } from './app.po';

describe('recordseries App', () => {
  let page: RecordseriesPage;

  beforeEach(() => {
    page = new RecordseriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
