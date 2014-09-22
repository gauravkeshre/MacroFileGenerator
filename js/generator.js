var DEFAULT_PREFIX = "k"
var arrayOfKeys =[];
var getMacroName = function(prefix, key){
	if (prefix==null)
	 {
	 	prefix = this.prefix;
	 };
	var strName = prefix + key.toUpperCase();
	return strName;
}


var writeMacrosOnDiv = function(div_id, jsonText, prefix, functionCallback){
	 div_id.text("");
	var dictionary = JSON.parse(jsonText);
	window.arrayOfKeys = [];
	r(dictionary);

	window.arrayOfKeys = window.arrayOfKeys.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

	if (prefix=="") {
		prefix = window.DEFAULT_PREFIX;
	};
	div_id.append("<ul id='macrolist'></ul>");
	for (var i = 0; i < window.arrayOfKeys.length; i++) {
		var key = window.arrayOfKeys[i];
         div_id.append("#define "+ getMacroName(prefix, key)+ "  \t\t @\"" +key + "\""+"<br>");
	};

	functionCallback()

}

function addKey(key){
		if (!isNaN(key)) return; //check if its a number
		// if ($.inArray(value, array)) return; //check if its already available
		console.log("k: " + key);
		window.arrayOfKeys.push(key);
	}
function r(obj) {
    if (obj){
        for (var key in obj) {
            if (typeof obj[key] == "object"){
            	addKey(key);
                r(obj[key]);
            } else if (typeof obj[key] != "function"){
            	addKey(key);
            }
   		 }
   	}
    return;
} 
