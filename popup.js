var save 		  = document.getElementById("save"),
	pexels		  = document.getElementById("pexels"),
	freepik       = document.getElementById("freepik"),
	unsplash      = document.getElementById("unsplash"),
	// coolWallpaper = document.getElementById("coolwallpapers"),
	pixBay		  = document.getElementById("pixbay"),
	pngtree		  = document.getElementById("pngtree"),
	pexelUrl      = "https://www.pexels.com/search/",
	unsplashUrl   = "https://unsplash.com/search/",
	freepikUrl    = "http://www.freepik.com/index.php?goto=2&searchform=1&k=",
	// coolWallpaperUrl = "http://coolwallpapers.ir/stockphoto/?s=",
	pixbayUrl     = "https://pixabay.com/fr/photos/?q=",
	pngtreeUrl    = "https://pngtree.com/so/";

chrome.storage.sync.get("sites", function(items){ 
		var arrayList = items.sites;
		var pexelsChecked   	= arrayList.indexOf(pexelUrl);
		    unsplashChecked 	= arrayList.indexOf(unsplashUrl),
		    freepikChecked  	= arrayList.indexOf(freepikUrl),
		    // coolWallpaperCheked = arrayList.indexOf(coolWallpaperUrl),
		    pixbayChecked       = arrayList.indexOf(pixbayUrl),
		    pngtreeChecked		= arrayList.indexOf(pngtreeUrl);
		if(pexelsChecked   != -1){   pexels.checked = true; }else{ pexels.checked = false; }	
		if(unsplashChecked != -1){	 unsplash.checked = true; }else{ unsplash.checked = false; }
		if(freepikChecked  != -1){	 freepik.checked = true; }else{ freepik.checked = false; }
		// if(coolWallpaperCheked  != -1){	 coolWallpaper.checked = true; }else{ coolWallpaper.checked = false; }
		if(pixbayChecked  != -1){	 pixBay.checked = true; }else{ pixBay.checked = false; }
		if(pngtreeChecked  != -1){	 pngtree.checked = true; }else{ pngtree.checked = false; }
 });
	var sites = new Array();
	save.onclick = function(){

		if(unsplash.checked == true){
			if(sites.indexOf(unsplashUrl) == -1){
				sites.push(unsplashUrl);
			}

		}else{
				var index2 = sites.indexOf(unsplashUrl);
    				sites.splice(index2, 1);
				
		}	

		if(freepik.checked == true){
			if(sites.indexOf(freepikUrl) == -1){
				sites.push(freepikUrl);
			}
		}else{
				var index3 = sites.indexOf(freepikUrl);
					if(index3 != -1){
	    				sites.splice(index3, 1);
					}
					
			}
		if(pexels.checked == true){
			if(sites.indexOf(pexelUrl) == -1){
				sites.push(pexelUrl);
			}	
		}else{
			var index = sites.indexOf(pexelUrl);
				if(index != -1){
	    			sites.splice(index, 1);
    			}
		}

		// if(coolWallpaper.checked == true){
		// 	if(sites.indexOf(coolWallpaperUrl) == -1){
		// 		sites.push(coolWallpaperUrl);
		// 	}	
		// }else{
		// 	var index4 = sites.indexOf(coolWallpaperUrl);
		// 		if(index4 != -1){
	    // 			sites.splice(index4, 1);
    	// 		}
		// }

		if(pixBay.checked == true){
			if(sites.indexOf(pixbayUrl) == -1){
				sites.push(pixbayUrl);
			}	
		}else{
			var index5 = sites.indexOf(pixbayUrl);
				if(index5 != -1){
	    			sites.splice(index5, 1);
    			}
		}

		if(pngtree.checked == true){
			if(sites.indexOf(pngtreeUrl) == -1){
				sites.push(pngtreeUrl);
			}	
		}else{
			var index6 = sites.indexOf(pngtreeUrl);
				if(index6 != -1){
	    			sites.splice(index6, 1);
    			}
		}

		chrome.storage.sync.set({ "sites": sites }, function(){ });

		chrome.runtime.sendMessage({
             greeting: "updated",
    	},function(response) {
    	}); 
    	$("#message").slideDown();
	}
	/* developed by me */

	document.getElementById("developed").onclick = function(){

		chrome.tabs.create(
			{
			  url :	"https://www.facebook.com/skiod.khalid"
			}
		);
	};



