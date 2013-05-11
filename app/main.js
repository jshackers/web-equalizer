
var webEq = (function(){

//change it to require a file from engine
var nSplitter = (function(){

	var source,
	context = new webkitAudioContext();

	function setSource(audio){
		source = context.createMediaElementSource(audio);
		
	}

	return{
		setSource:setSource
	}
})();

return function(node){

	nSplitter.setSource(node);


}

})();