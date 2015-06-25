var express = require('express');
var app = express();
app.get('/preguntas', function (req, res){
	res.send( '<html><body>'
		+ '<form method="GET" action="respuestas1">'
		+ '¿Quién descubrió America?<br>'
		+ '<input type="text" name="respuesta1" /><br>'
		+ '<input type="submit" name="Enviar" />'
		+ '</form><br>'
		+ '<form method="GET" action="respuestas2">'
		+ '¿Capital de Portugal?<br>'
		+ '<input type="text" name="respuesta2" /><br>'
		+ '<input type="submit" name="Enviar" />'
		+ '</form>'
		+ '</body></html>'
		 );
	});
app.get('/respuestas*', function (req, res){

	if (req.query.respuesta1 === "Cristobal Colón")
	{
		msg = "Respuesta Correcta";
	}
	else {
		msg = "Respuesta incorrecta, la respuesta correcta es Cristbal Colón";
	}

	res.send( '<html><body>'
		+ msg + "<br>"
		+ '</body></html>'
		 );
	});
app.get('*', function (req, res){res.send( 'Nada' );});
app.listen(8080);

