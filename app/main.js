
var webEq = (function(){

//change it to require a file from engine
var nSplitter = (function(){

	var source,bands=[],
	context = new webkitAudioContext();

	function setSource(audio){
		source = context.createMediaElementSource(audio);

	}

	function splitTo(n){
		//split sound to n Bands

		//save each band in bands array
	}

	function getBand(num){
		return band[num];
	} 

	return{
		setSource:setSource,
		splitTo:splitTo,
		getBand:getBand
	}
})();


return function(node){

	nSplitter.setSource(node);


}

})();