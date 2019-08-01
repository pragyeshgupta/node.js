var extend = require('./base_module.js');
// var exports = module.exports = {};
exports.moduleExtension = function(){
  console.log("This is extended version of base module")
  this.doIt = function(){
    var DoIt = extend;
    DoIt.baseModule();
  }
}
