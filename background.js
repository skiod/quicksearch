
chrome.contextMenus.create({
	title:"quick search",
	contexts:["selection"],
	onclick: myFunction
});

 var arrayList ;
 chrome.storage.sync.get("sites", function(items){ 
			 arrayList = items.sites;
 		});
console.log(arrayList);
 chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
 	if(request.greeting  == "updated"){
  		
  		chrome.storage.sync.get("sites", function(items){ 
			 arrayList = items.sites;
			console.log(arrayList);
 		});
  	}
  	if(request.greeting == "fromInput"){
  		fromInput(request.valInput);
  		console.log("requette is :"+request.valInput);
  		console.log("array is :"+arrayList);
  	}
  });
 function fromInput(requette){
 	for(var i = 0 ; i < arrayList.length ; i++){
 		chrome.tabs.create(
			{
			  url :	arrayList[i]+requette
			}
		);
 	}
 }
function myFunction(textSelected){
	
	for(var i = 0 ; i < arrayList.length ; i++){
		chrome.tabs.create(
			{
			  url :	arrayList[i]+textSelected.selectionText
			}
		);
	}
}




