import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // 1.0: Verify that I can go to the login component
  // 1.1: ...

  it('1.0: Verify that I can go to the login component', () => {
    browser.get('home/login');
    let loginText = element(by.id('login')).getText();
    expect(loginText).toEqual('Login');

  });

  it('1.1: Verify that i can login and be redirected to display-quizzes', function() {
    element(by.id("username")).sendKeys("admin");
    element(by.id("password")).sendKeys("admin");
    element(by.id("submitBtn")).click();

    let quizCard = element.all(by.css(".quiz-card")).get(0);
    expect(quizCard.isPresent());
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
