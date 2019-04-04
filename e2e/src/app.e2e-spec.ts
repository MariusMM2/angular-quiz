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

  it('1.1: Verify that I can login and be redirected to display-quizzes', function() {
    element(by.id("username")).sendKeys("admin");
    element(by.id("password")).sendKeys("admin");
    element(by.id("submitBtn")).click();

    // let quizCard = element.all(by.css(".quiz-card")).get(0);
    expect(browser.getCurrentUrl()).toContain('/portal/display-quizzes');
  });

  it('1.2 Verify that I go to the create new quiz component', function() {
    element(by.id("portalCreateQuizBtn")).click();

    expect(browser.getCurrentUrl()).toContain('/portal/create-quiz');
  });

  it('1.3 Verify that I can create a new quiz and see it in the list', function() {
    const title = "This is a test quiz";
    const userId = 1;
    const user = "asdf";
    const q1 = "First test question";
    const q1a1 = "First question first answer";
    const q1a2 = "First question second answer";
    const q1a3 = "First question third answer"; // correct one
    const q2 = "Second test question";
    const q2a1 = "Second question first answer";
    const q2a2 = "Second question second answer"; // correct one
    const q2a3 = "Second question third answer";
    const q2a4 = "Second question fourth answer";
    const q3 = "Third test question";
    const q3a1 = "Third question first answer"; // correct one
    const q3a2 = "Third question seconds answer";

    //Enter title
    let titleField = element(by.id("createTitle"));
    // let titleField = $$("title").get(0);
    titleField.sendKeys(title);
    expect(titleField.getAttribute("value")).toEqual(title);

    // var selectDropdownbyNum = function (optionNum ) {
    //   if (optionNum){
    //     let select = element(by.id("createUserId"));
    //     select.click();
    //     element.all(by.className("option")).get(optionNum).click();
    //     // var options = select.all(by.tagName('option')).get(optionNum).click();
    //       // .then(function(options){
    //       // .then(function(){
    //       //   options[optionNum].click();
    //       // });
    //     // options[optionNum].click();
    //   }
    // };

    //Select author
    let select = element(by.formControlName("user"));
    select.click();
    let chosenUser = element.all(by.className("option")).get(userId);
    chosenUser.click();

    expect(chosenUser.getText()).toEqual(user);
    // expect(element(by.id('createUserId')).element(by.css('option:checked')).getText()).toEqual(userId);
    // expect(select.getAttribute("value")).toEqual(userId);
    // element(by.formGroup)

    //First Question
    let q1TitleField = element.all(by.id("createQuestionTitle")).get(0);
    q1TitleField.sendKeys(q1);
    expect(q1TitleField.getAttribute("value")).toEqual(q1);

    //First Answer
    let q1a1field = element.all(by.id("createAnswerTitle")).get(0);
    q1a1field.sendKeys(q1a1);
    expect(q1a1field.getAttribute("value")).toEqual(q1a1);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
