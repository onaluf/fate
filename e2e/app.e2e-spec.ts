import { FatePage } from './app.po';

describe('fate App', () => {
  let page: FatePage;

  beforeEach(() => {
    page = new FatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
