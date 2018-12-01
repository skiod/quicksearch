var input     = document.createElement("input");
document.body.appendChild(input);
input.setAttribute("type","text");
input.setAttribute("class","skiod_input");


document.body.onkeydown = function(e){
		 if (e.keyCode == 66 && e.ctrlKey) {
            	$(".skiod_input").slideDown();
            	$(".skiod_input").focus();
        }
}
var t = 0;
$(document).on("focus",".skiod_input",function(){
			t++;
			vv;		
	});
$(document).on("blur",".skiod_input",function(){
	$(this).val("");
	$(this).slideUp();
});

var vv = $(".skiod_input").keydown(function(e){
				if(e.keyCode == 13){
					chrome.runtime.sendMessage({
				             greeting: "fromInput",
				             valInput: $(".skiod_input").val()

				    	},function(response) {
				    	}); 
				    	$(".skiod_input").slideUp();
				    	$(this).val("");
				}
			});