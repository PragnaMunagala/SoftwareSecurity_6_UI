import { SS6UIPage } from './app.po';

describe('ss6-ui App', () => {
  let page: SS6UIPage;

  beforeEach(() => {
    page = new SS6UIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
