var eq = (function equalizer (argument) {

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
    
    return controls;
  }
}());
