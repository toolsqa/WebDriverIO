/*
	This tests file contains sample demonstrating custom commands and its usage.
*/


/*
  Adding a custom command to the browser instance
*/

browser.addCommand("getPageTitleAndUrl", function (){
	
	return	{
		url: browser.getUrl(),
		title : browser.getTitle()
	};
});


/*
	Usage of custom command
*/
	describe("Usage of custom command which returns the url and title of the page", function (){
		it("Shows the usage of a custom command getPageTitelAndUrl", function (){
			browser.url("http://ToolsQA.com");
			var result = browser.getPageTitleAndUrl();
			console.log("Page url is " + result.url);
			console.log("Page title is " + result.title);
		});		
	});
	
/*
  Real life usage of custom commands
*/