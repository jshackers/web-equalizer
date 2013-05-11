
var webEq = (function(){

//change it to require a file from engine
var band = function(){
	
}

var eq = (function(argument) {

  var eqContainer = document.querySelector('#eq');
  var inputs = eqContainer.querySelectorAll('input[type="range"]');

  eqContainer.addEventListener('submit', formSubmitHandler, false);

  function formSubmitHandler (event) {
    event.preventDefault();
    var controls = [];

    Array.prototype.map.call(inputs, function(element, index) {
      return controls[index] = element.value;
    });

    console.log(controls);

    nSplitter.setBands(controls);
    
  }
}());


//change it to require a file from engine
var nSplitter = (function(){

	var src,bands=[],
	ctx = new webkitAudioContext();

	//tmp stuff
	var fs = [60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000];
	//the higher the value, the narrower the span of frequencies
	var qs = [ 1,   1,   1,   1,    1,    1,    1,     2,    10,    10];


	function init(audio,n){
		n = n?n:10;
		src = ctx.createMediaElementsrc(audio);

		splitTo(n);

	}

	function splitTo(n){
		//split sound to n Bands
		for (var i=0; i<n; i++)
		{
			var f = ctx.createBiquadFilter();
			f.type = "bandpass";
			f.frequency.value = fs[i];
			f.Q.value = qs[i];
			var g = ctx.createGainNode();
			g.gain.value = 0.55;
			src.connect(f);
			f.connect(g)
			g.connect(ctx.destination);
			//gain node is saved as a band
			bands[i] = g;
		}

		
	}

	function getBand(num){
		return band[num];
	} 

	function setBands(valueArr){
		for (var i = 0; i <valueArr.length; i+=1) {
			getBand(i).gain.value = valueArr[i];			
		}

	return{
		init:init,
		getBand:getBand,
		setBands:setBands
	}
})();


return function(node){

	nSplitter.init(node);



	



	return nSplitter;

}

})();