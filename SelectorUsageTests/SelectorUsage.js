/*
   These tests demonstrate the element selector strategies available in WebDriverIO.
   Each test focusses on certain aspects of the selector being used. Pay attention to
   comments that we have written for better understandin of the topic
   
   Test pages: http://toolsqa.com/automation-practice-form/
   and: http://toolsqa.com/automation-practice-switch-windows/
*/


// /*
  // In this test we will see how we can select an element by ID.
  // This command is similar to WebDriver.GetElementByID() or 
  // WebDriver.getElement(By.id())
// */

	// describe('Selecting element by ID on http://toolsqa.com//automation-practice-switch-windows', function (){
		// it('Tests that we can select an element by ID by using # as the keyword for id', function () {
		   
			// browser.url("http://toolsqa.com/automation-practice-switch-windows/");
			// //See how # can be used to find an element by ID. Text following # represents and ID
			// browser.click("#button1");
		// });
	// });

// /*
  // In this test we will see how we can select an element by CSS path.
  // This command is similar to WebDriver.GetElementByCssSelector() or 
  // WebDriver.getElement(By.ByCssSelector())
  // Note: WebDriverIO has default search stratedgy set to CSS Path
// */

	// describe('Selecting element by CSS path on http://toolsqa.com//automation-practice-switch-windows', function (){
		// it('Tests that we can select an element by CSS by simply specifying the CSS path', function () {
		   
			// browser.url("http://toolsqa.com/automation-practice-switch-windows/");
			// browser.click("#content > p:nth-child(5) > button");
		// });
	// });


// /*
  // In this test we will see how we can select an element by Link text.
  // This command is similar to WebDriver.GetElementByLinkText() or 
  // WebDriver.getElement(By.LinkText())
  // This is application to only Link elements
  // Note: Pay attention to the usage of '=' to specify that the text following it is link text
// */

	// describe('Selecting element by Link text on http://toolsqa.com/automation-practice-form/', function (){
		// it('Tests that we can select an element by specifying the link text', function () {
			// browser.url("http://toolsqa.com/automation-practice-form/");
			// //= specifies that the text following is the complete visible text of a link element
			// browser.click("=Link Test");
		// });
	// });

// /*
  // In this test we will see how we can select an element by Partial Link text.
  // This command is similar to WebDriver.GetElementByPartialLinkText() or 
  // WebDriver.getElement(By.PartialLinkText())
  // This is application to only Link elements
  // Note: Pay attention to the usage of '*=' to specify that the text following it is partial link text
// */

	// describe('Selecting element by partial Link text on http://toolsqa.com/automation-practice-form/', function (){
		// it('Tests that we can select an element by specifying the partial link text', function* (done) {
			// browser.url("http://toolsqa.com/automation-practice-form/");
			// //*= specifies that the text following is the partial visible text of a link element
			// browser.click("*=Partial Link").then(function() {
				// console.log("The page title is " + browser.getTitle());
			// }).call(done);
		// });
	// });

// /*
  // This is locator technique is unique to WebDriverIO and is not available in WebDriver Java bindings.
  // You can identify elements using visible text of the element. Just make sure that the text is unique to
  // that element. Something like this
// */

	// describe("Selecting element by the text available on the element", function () {
		// it("Tests that we can select an element by using text value associated with the element", function (){
			// browser.url("http://toolsqa.com/automation-practice-switch-windows/");
			// var textOfElement = browser.getText("a=Find me I have nothing in me!!");
			// console.log("Text on the element is " + textOfElement);
			
			// /*
				// Note: If you pay attention to the output of this test you will see that it contains
				// this find stratedgy {"using":"xpath","value":"//a[normalize-space() = \"Find me I have nothing in me!!\"]"}
				// which means that finding element by some text is actually converted to findByXpath and normalize-space() function
				// is used.				
			// */
			
		// });	
	// });
	
// /*
  // This is locator technique is unique to WebDriverIO and is not available in WebDriver Java bindings.
  // You can identify elements using visible partial text of the element. Just make sure that the text is unique to
  // that element. Something like this
// */

	// describe("Selecting element by the partial text available on the element", function () {
		// it("Tests that we can select an element by using text value associated with the element", function (){
			// browser.url("http://toolsqa.com/automation-practice-switch-windows/");
			// var textOfElement = browser.getText("a*=Find me");
			// console.log("Text on the element is " + textOfElement);			
			// /*
				// Note: If you pay attention to the output of this test you will see that it contains
				// this find stratedgy  {"using":"xpath","value":"//a[contains(., \"Find me\")]"}
				// which means that finding element by some text is actually converted to findByXpath and contains function
				// is used.				
			// */
			
		// });	
	// });
	
/*
  Finding element with respect to a reference element is a technique where you will want to start from a given element to find
  an element. This locator technique is referred to as chain selectors. Here is a sample 
  
  ** create an element on the test page where we can test this locator. Have same element in two places
*/

	// describe("Selecting element using the chain selector stratedgy", function (){
		// it("Correct element is identified using chain selector", function () {
			
			// browser.url("http://toolsqa.com/automation-practice-form/");
			// browser.element("#content > form > fieldset > div:nth-child(19)").click("#tool-2");
		// });
	// });










