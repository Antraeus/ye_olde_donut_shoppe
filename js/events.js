(function() {
  var  = window.YeOldeDonutShoppe;

YeOldeDonutShoppe.prototype.prependRender = function (){
                              var newLocality, newMinPatrons, newMaxPatrons, newAveragePerPatron;

                              var shopForm = document.getElementById('shopForm');
                              shopForm.prependChild();
                            }


                            var handleNoteFormSubmit = function(event) {
    event.preventDefault();

var newShoppe = new YeOldeDonutShoppe(event.target.newLocality.value, {event.target.newMinPatrons.value, event.target.newMinPatrons.value, event.target.newAveragePerPatron};

(function () {
  var form = document.getElementById('newShoppeForm');
  form.addEventListener("submit", function() {
    event.preventDefault();
    window.shoppes.push(new window.YeOldeDonutShoppe (event.target.locality.value, Number.parseInt(event.target.minPatrons.value), Number.parseInt(event.target.maxPatrons.value), Number.parseInt(event.target.averagePerPatron.value)));
    event.target.locality.value = null;
    event.target.minPatrons.value = null;
    event.target.maxPatrons.value = null;
    event.target.AveragePerPatron.value = null;
    window.renderAll();
  });
}) ();
