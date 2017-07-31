var express =require("express");
var routes = express.Router();

module.exports = function(){
  routes.get('/getstatus', function(req, res, next){
    res.json({"datos":"ok"});
  });

  routes.get('/alumnos', function(req, res, next){
    var datos = [];
    datos.push({"cuenta": '0801199620983', "Nombre":"Italo"});
    datos.push({"cuenta": '0801199620984', "Nombre":"Italo2"});
    datos.push({"cuenta": '0801199620985', "Nombre":"Italo3"});
    res.json(datos);
  });

  return routes;
}
