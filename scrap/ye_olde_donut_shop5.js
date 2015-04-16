'use strict';

(function(){


var YeOldeDonutShoppe   = function(locality, params){
    var opening, closing;
      this.opening          = params.opening || 600;
      this.closing          = params.closing || 1800;
      this.operatingHours   = (this.closing - this.opening)/100
      this.minPatrons       = params.minPatrons;
      this.maxPatrons       = params.maxPatrons;
      this.averagePerPatron = params.averagePerPatron
      this.locality         = shoppes.replace(/\s/g,'_').push(shoppes[]); // The Tosi maneuver. Removing whitespace from inputs that are sent to an array.
      localeSchedule        = [];
      this.donutSchedule    = [];

}
//______________________________________________________________________________
YeOldeDonutShoppe.prototype.generateHourlyPatrons = function() {
  return Math.floor((Math.random() * this.maxPatrons - this.minPatrons) + this.minPatrons);
};
YeOldeDonutShoppe.prototype.projectedOrders = function() {
  return Math.floor(this.generateHourlyPatrons() * this.averagePerPatron);
};
YeOldeDonutShoppe.prototype.projectedProduction = function() {
  var dailyDonuts = 0
  for (var i = 0; i < this.operatingHours || 11; i++){
  var hourlyDonuts = this.projectedOrders();
    this.donutSchedule.push(hourlyDonuts)
    dailyDonuts += hourlyDonuts;
  }
  return dailyDonuts;
};

YeOldeDonutShoppe.prototype.render = function(){
  var dailyDonuts = this.projectedProduction();
  var elTr = document.getElementById(this.locality);

  for (var i = 0; i < this.operatingHours || 11; i++) {
  var elTd = document.createElement('td');
  elTd.textContent = this.donutSchedule[i];
  elTr.appendChild(elTd);
  }
  var totalElement = document.createElement('td');
  totalElement.textContent = dailyDonuts;
  elTr.appendChild(totalElement);
};

YeOldeDonutShoppe.prototype.originalShoppes = function(){
  elTr.forEach(function(shoppes))
  tableEl.appendChild(shoppes.render())
}


var downtown = new YeOldeDonutShoppe ('Downtown', {maxPatrons:43, minPatrons:9, averagePerPatron: 4.50});

var capitolHill = new YeOldeDonutShoppe('Capitol Hill', {maxPatrons: 37, minPatrons: 4, averagePerPatron: 2});

var southLakeUnion = new YeOldeDonutShoppe('South Lake Union', {maxPatrons: 23, minPatrons: 9, averagePerPatron: 6.33});

var wedgeWood = new YeOldeDonutShoppe('Wedgewood', {maxPatrons:28, minPatrons:2, averagePerPatron:1.25});

var ballard = new YeOldeDonutShoppe('Ballard', {maxPatrons:58, minPatrons:8, averagePerPatron:3.75});

downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgeWood.render();
ballard.render();
})();
