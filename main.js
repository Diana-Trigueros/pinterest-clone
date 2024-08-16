// console.log("Hola Mundo! desde la colsola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Científica')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Descubriendo y aprendiendo')
    .pauseFor(2500)
    .deleteChars(13)
    .typeString('<strong>ciencia!</strong>')
    .pauseFor(2500)
    .start();