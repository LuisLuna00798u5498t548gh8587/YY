import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Pregunta saber 11</h1>
<div>
"¿ Que jugador de futbool tiene mas balones de oro”?
 <br> A= Leonel Messi.
 <br> B= Cristiano Ronaldo.
 <br> C= Kevin De Bruine.
 <br> D= Iniesta.
<br>
</div>
`;

function ingresarrespuesta() {
  let respuesta = document.getElementById("input_pregunta").value;
  if (respuesta === "B") {
    alert("Respuesta correcta");
  } else {
    alert("Respuesta incorrecta");
  }
}

document
  .getElementById("btn_pregunta")
  .addEventListener("click", ingresarrespuesta);
