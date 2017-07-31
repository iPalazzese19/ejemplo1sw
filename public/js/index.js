$().ready(function(){
  //
  var htmlstr = [];
  $.get('/api/alumnos',
        {},
        function(data, successTxt, xhrq){
          if (data.length > 0) {
            htmlstr.push('<table class="table">');
            htmlstr.push('<tr><th>Cuenta</th><th>Nombre</th></tr>');
            data.map(function(obj, index){
              htmlstr.push('<tr><td>' + obj.cuenta + '</td><td>' + obj.Nombre + '</td></tr>');
            });
            htmlstr.push('</table>');
            $("#listadoAlumnos").html(htmlstr.join());
          }
        },
        'json'
  ).fail(function(xhrq, failTxt, something){

  });
});
