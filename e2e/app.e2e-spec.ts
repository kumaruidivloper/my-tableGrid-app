import { MyTableGridAppPage } from './app.po';

describe('my-table-grid-app App', () => {
  let page: MyTableGridAppPage;

  beforeEach(() => {
    page = new MyTableGridAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
