var express = require('express');
var app = express();
// Acceso al recuso "preguntas" 
app.get('/preguntas', function (req, res){
	res.send( '<html>'
		+ '<title>Preguntas</title>'
		+ '<body>'
		+ '<h1>Preguntas</h1>'
		+ '<form method="GET" action="respuesta">'
		+ '¿Quién descubrió América?<br>'
		+ '<input type="text" name="respuesta" /><br>'
		+ '<input type="hidden" name="pregunta" value="1" /><br>'
		+ '<input type="submit" name="Enviar" />'
		+ '</form><br>'
		+ '<form method="GET" action="respuesta">'
		+ '¿Capital de Portugal?<br>'
		+ '<input type="text" name="respuesta" /><br>'
		+ '<input type="hidden" name="pregunta" value="2" /><br>'
		+ '<input type="submit" name="Enviar" />'
		+ '</form>'
		+ '</body></html>'
		 );
	});
// Acceso al recusro "respuestas"
app.get('/respuesta', function (req, res){
	var correcta = "";
	// Evaluamos la pregunta
	switch(req.query.pregunta){
	case "1":
		correcta = "Cristobal Colón";
		break;
	case "2": 
		correcta = "Lisboa";
		break;
	default:
		res.redirect(400, '/preguntas');
		return;

	} 
	if (req.query.respuesta === correcta) msg = '¡Respuesta Correcta!';
	else msg = '¡Respuesta incorrecta! La respuesta correcta es "' + correcta + '"';

	res.send( '<html>'
		+ '<title>Respuestas</title>'
		+ '<body>'
		+ msg + "<br>"
		+ '<a href="/preguntas">Volver</a>'
		+ '</body></html>'
		 );
	});
// Si no encuentra el recurso muestra un página de advertencia
app.get('*', function (req, res){res.send( '<html><body>Página no encontrada</body></html>' );});
console.log ("Aplicacion iniciada en http://localhost/preguntas")
app.listen(80);

