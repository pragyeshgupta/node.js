var app = require('./extended_module.js');
app.moduleExtension();
// app.moduleExtension.doIt();
var obj2 = new app.moduleExtension();
obj2.doIt();
