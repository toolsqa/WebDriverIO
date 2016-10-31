/*
   These tests demonstrate the element selector strategies available in WebDriverIO.
   Each test focusses on certain aspects of the selector being used. Pay attention to
   comments that we have written for better understandin of the topic
   
   Test pages: http://toolsqa.com/automation-practice-form/
   and: http://toolsqa.com/automation-practice-switch-windows/
*/


/*
  In this test we will see how we can select an element by ID.
  This command is similar to WebDriver.GetElementByID() or 
  WebDriver.getElement(By.id())
*/

/*describe('Selecting element by ID on http://toolsqa.com//automation-practice-switch-windows', function (){
	it('Tests that we can select an element by ID by using # as the keyword for id', function () {
	   
		browser.url("http://toolsqa.com/automation-practice-switch-windows/");
		//See how # can be used to find an element by ID. Text following # represents and ID
		browser.click("#button1");
	});
});
*/

/*
  In this test we will see how we can select an element by CSS path.
  This command is similar to WebDriver.GetElementByCssSelector() or 
  WebDriver.getElement(By.ByCssSelector())
  Note: WebDriverIO has default search stratedgy set to CSS Path
*/

/*
describe('Selecting element by CSS path on http://toolsqa.com//automation-practice-switch-windows', function (){
	it('Tests that we can select an element by CSS by simply specifying the CSS path', function () {
	   
		browser.url("http://toolsqa.com/automation-practice-switch-windows/");
		browser.click("#content > p:nth-child(5) > button");
	});
});
*/

/*
  In this test we will see how we can select an element by Link text.
  This command is similar to WebDriver.GetElementByLinkText() or 
  WebDriver.getElement(By.LinkText())
  This is application to only Link elements
  Note: Pay attention to the usage of '=' to specify that the text following it is link text
*/
/*describe('Selecting element by Link text on http://toolsqa.com/automation-practice-form/', function (){
	it('Tests that we can select an element by specifying the link text', function () {
		browser.url("http://toolsqa.com/automation-practice-form/");
		//= specifies that the text following is the complete visible text of a link element
		browser.click("=Link Test");
	});
});*/

/*
  In this test we will see how we can select an element by Partial Link text.
  This command is similar to WebDriver.GetElementByPartialLinkText() or 
  WebDriver.getElement(By.PartialLinkText())
  This is application to only Link elements
  Note: Pay attention to the usage of '*=' to specify that the text following it is partial link text
*/

describe('Selecting element by partial Link text on http://toolsqa.com/automation-practice-form/', function (){
	it('Tests that we can select an element by specifying the partial link text', function* (done) {
		browser.url("http://toolsqa.com/automation-practice-form/");
		//*= specifies that the text following is the partial visible text of a link element
	    browser.click("*=Partial Link").then(function() {
			console.log("The page title is " + browser.getTitle());
		}).call(done);
	});
});















