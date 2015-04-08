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
      params.opening        = 600;
      params.closing        = 1800;
      this.operatingHours   = (this.closing - this.opening)/100
      this.minPatrons       = params.minPatrons;
      this.maxPatrons       = params.maxPatrons;
      this.averagePerPatron = params.averagePerPatron

}
//______________________________________________________________________________
debugger;
YeOldeDonutShoppe.prototype.generateRandom = function() {
  return Math.floor((Math.random() * this.maxPatrons - this.minPatrons) + this.minPatrons);
};
          //______________________________________________________________________________
          YeOldeDonutShoppe.prototype.projectedOrders = function() {
            return this.generateRandom() * this.averagePerPatron;
          };
                    //_________________________________________________________________________
                    YeOldeDonutShoppe.prototype.projectedProduction = function() {
                      return (this.generateRandom() * this.averagePerPatron);
                        var donuts = 0
                        for (var i = 0; i < 11; i++) {
                        donuts += this.projectedProduction();
                    }
    return donuts;
};
/******************************************************************************/
var downtown =
new YeOldeDonutShoppe ('Downtown', {maxPatrons:43, minPatrons:9, averagePerPatron: 4.50});
/******************************************************************************/
var capitolHill =
new YeOldeDonutShoppe('Capitol Hill', {maxPatrons: 37, minPatrons: 4, averagePerPatron: 2});
/******************************************************************************/
var southLakeUnion =
new YeOldeDonutShoppe('South Lake Union', {maxPatrons: 23, minPatrons: 9, averagePerPatron: 6.33});
/******************************************************************************/
var wedgeWood =
new YeOldeDonutShoppe('Wedgewood', {maxPatrons:28, minPatrons:2, averagePerPatron:1.25});
/******************************************************************************/
var ballard =
new YeOldeDonutShoppe('Ballard', {maxPatrons:58, minPatrons:8, averagePerPatron:3.75});

})();
