var server = require('./server');
var ds = server.dataSources.postgress;
var lbTables = ['Todo'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Looback tables [' + lbTables + '] created in ', ds.adapter.name);
  ds.disconnect();
});
