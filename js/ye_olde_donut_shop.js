'use strict';

(function(){
var shoppes = [];
var YeOldeDonutShoppe   = function(locality, params){

    var opening, closing;
      this.opening            =   params.opening || 600;
      this.closing            =   params.closing || 1800;
      this.operatingHours     =   (this.closing - this.opening)/100
      this.minPatrons         =   params.minPatrons;
      this.maxPatrons         =   params.maxPatrons;
      this.averagePerPatron   =   params.averagePerPatron
      this.locality           =   locality
      this.donutSchedule      =   [];



};

// var shoppes = []
// window.shoppes


YeOldeDonutShoppe.prototype.generateHourlyPatrons =   function() {
  return Math.floor((Math.random() * this.maxPatrons - this.minPatrons) + this.minPatrons);
};

YeOldeDonutShoppe.prototype.projectedOrders       =   function() {
  return Math.floor(this.generateHourlyPatrons() * this.averagePerPatron);
};

YeOldeDonutShoppe.prototype.projectedProduction   =   function() {
  var dailyDonuts                  =   0;

for (var i = 0; i < this.operatingHours || 11; i++) {
  var hourlyDonuts                 =   this.projectedOrders();
    this.donutSchedule.push(hourlyDonuts);
    dailyDonuts                   +=   hourlyDonuts;
  }
  return dailyDonuts;
};

/*
.append() puts data inside an element at last index and
.prepend() puts the prepending elem at first index
*/
debugger;

YeOldeDonutShoppe.prototype.render =   function(){
  var dailyDonuts                  =   this.projectedProduction();
  var table                        =   document.getElementById('newShoppe');
  var elTr                         =   document.createElement('tr')
    table.appendChild(elTr);
  var elTh                         =   document.createElement('th')
    elTr.appendChild(elTh);
    elTh.textContent               =   this.locality;

for (var i = 0; i < this.operatingHours || 11; i++) {
  var elTd                         =   document.createElement('td');
    elTd.textContent               =   this.donutSchedule[i];
    elTr.appendChild(elTd);
}
    dailyDonuts.textContent        =   dailyDonutTotal;
    elTr.appendChild(elTd);
};


var handleShoppeInit = function(event) {
  event.preventDefault();
}
  noteForm.addEentListener('submit', handleShoppeInit);
}

var getFormData                    =   document.getElementById('newShoppeInit')
    getFormData.addEventListener("submit", function(event) {
    event.preventDefault();
var newShoppe                      =   new YeOldeDonutShoppe(event.target.newLocality.value, {event.target.newMaxPatrons.value, event.target.newMinPatrons.value, event.target.newAvgPP.value});
  event.target.newLocality.value   = null;
  event.target.newMaxPatrons.value = null;
  event.target.newMinPatrons.value = null;
  event.target.newAvgPP.value      = null;
    getFormData.push(newShoppe);
    newShoppe.render();


  });



var downtown       = new YeOldeDonutShoppe ('Downtown', {maxPatrons:43, minPatrons:9, averagePerPatron: 4.50});

var capitolHill    = new YeOldeDonutShoppe('CapitolHill', {maxPatrons: 37, minPatrons: 4, averagePerPatron: 2});

var southLakeUnion = new YeOldeDonutShoppe('SouthLakeUnion', {maxPatrons: 23, minPatrons: 9, averagePerPatron: 6.33});

var wedgeWood      = new YeOldeDonutShoppe('Wedgewood', {maxPatrons:28, minPatrons:2, averagePerPatron:1.25});

var ballard        = new YeOldeDonutShoppe('Ballard', {maxPatrons:58, minPatrons:8, averagePerPatron:3.75});

downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgeWood.render();
ballard.render();
})();
