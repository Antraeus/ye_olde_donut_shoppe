/*//////////////////////////////////////////////////////////////////////////////
|var YeOldeDonutShoppe     = function(min, max, canHas, name) {
|Instead, use options and expand the parameter with braces when creating a new
|instance, and colons to create a heirarchy of values within the parameter 'options'. function (name, options)
|this.name         = locality;
|
|Let 'canHas' represent the average donuts a customer buys
|this.canHas       = [4.50, 2.00, 6.33, 1.25, 3.75];
|
|Let 'min' represent the minimum customers per hour
|this.min          = YeOldeDonutShoppe.min[8, 4, 9, 2, 8];
|
|Let 'max' represent the maximum customers per hour
|this.max          = YeOldeDonutShoppe.max[43, 37, 23, 28, 58];
|
|};
|
|YeOldeDonutShoppe.prototype.generateRandom = function () {
|    return Math.random() * (YeOldeDonutShoppe.max[] - YeOldeDonutShoppe.min[]) + min[])
|
|YeOldeDonutShoppe.prototype.getBaked = function () {
|    return Math.floor(this.generateRandom() * this.canHas[]);
|    for (var i = 0; i < 11; i++) {
|    }
| };
|
| var downtown              = new YeOldeDonutShoppe(YeOldeDOnutShoppe.pull.min[0], pull.max[0], pull.canHas[0]){
|/////////////////////////////////////////////////////////////////////////////*/

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
      this.locality         = [];
      this.donutSchedule    = [];


}
//______________________________________________________________________________
YeOldeDonutShoppe.prototype.generateHourlyPatrons = function() {
  return Math.floor((Math.random() * this.maxPatrons - this.minPatrons) + this.minPatrons);
};
          //______________________________________________________________________________
          YeOldeDonutShoppe.prototype.projectedOrders = function() {
            return Math.floor(this.generateHourlyPatrons() * this.averagePerPatron);
          };
                    //_________________________________________________________________________
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
                              // var elTr = document.ElementById(this.originalShoppes[]);
                              var elShop = document.createElement('th');
                              var elTotal = document.createElement('td');
                              elName.textContent = this.locality[];

                              for (var i = 0; i < this.operatingHours || 11; i++) {
//elTd creates data fields for each operating hour.
                              var elTd = document.createElement('td');
                              elTd.textContent = this.donutSchedule[i];
                              elTr.appendChild(elTd);
    }
                              var totalElement = document.createElement('td');
                              totalElement.textContent = dailyDonuts;
                              elTr.appendChild(totalElement);
                            };
locality.forEach(function (YeOldeDonutShoppe))

// Replaces all of THIS!!!!
// document.getElementById('Downtown')
// document.getElementById('CapitolHill')
// document.getElementById('SouthLakeUnion')
// document.getElementById('Wedgewood')
// document.getElementById('Ballard')



var downtown = new YeOldeDonutShoppe ('Downtown', {maxPatrons:43, minPatrons:9, averagePerPatron: 4.50}).push(locality);

var capitolHill = new YeOldeDonutShoppe('Capitol Hill', {maxPatrons: 37, minPatrons: 4, averagePerPatron: 2}).push(locality);

var southLakeUnion = new YeOldeDonutShoppe('South Lake Union', {maxPatrons: 23, minPatrons: 9, averagePerPatron: 6.33}).push(locality);

var wedgeWood = new YeOldeDonutShoppe('Wedgewood', {maxPatrons:28, minPatrons:2, averagePerPatron:1.25}).push(locality);

var ballard = new YeOldeDonutShoppe('Ballard', {maxPatrons:58, minPatrons:8, averagePerPatron:3.75}).push(locality);
window.originalShoppes = [downtown, capitolHill, southLakeUnion, wedgeWood, ballard];
originalShoppes[0[.render();
originalShoppes[1].render();
originalShoppes[2].render();
originalShoppes[3].render();
originalShoppes[4].render();

stores.forEach(function (store) {
      tableEl.appendChild(store.render());
})();
