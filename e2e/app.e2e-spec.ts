import { LabRoutesPage } from './app.po';

describe('lab-routes App', () => {
  let page: LabRoutesPage;

  beforeEach(() => {
    page = new LabRoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
