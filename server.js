
var e = require('express');

var app = e();
app.use(e.static('./client'));
app.listen(process.env.PORT || 3000);
