const contenedorPrincipal = document.getElementById("contenedorPrincipal");
const inputTarea = document.getElementById("inputTarea");
const btnTarea = document.getElementById("btnTarea");
const notepad = document.getElementById("notepad");
const tarea = document.getElementById("tarea");
const listado = document.getElementById("listado");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const agregarAlListado = () => {
  const anotacion = tarea.value;
  tareas.push(anotacion);
  console.log(tareas);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  mostrarListado();
};
const mostrarListado = () => {
  listado.innerHTML = "";
  tareas.forEach((elemento) => {
    let element = elemento;
    const objetolista = document.createElement("li");
    objetolista.innerHTML = ` <div class="divLi"><input type="checkbox" data-id=${element} class="chk" id="chk"><label id="lbl" for="chk"><p data-p=${element} >${element}</p></label></div><button id="btnLista"> <p>-</p></button>`;
    listado.append(objetolista);
  });
};

if (tareas != []) {
  mostrarListado();
}

btnTarea.addEventListener("click", agregarAlListado);

//checkbox funcion

const checkear = (e) => {
  const eleccion = e.target.getAttribute("data-id");
  console.log(eleccion);

  if (e.target.checked) {
    const pTitulo = document.querySelector(`[data-p="${eleccion}"]`);
    pTitulo.style.textDecoration = "line-through";
  } else {
    const pTitulo = document.querySelector(`[data-p="${eleccion}"]`);
    pTitulo.style.textDecoration = "none";
  }
};

const check = document.querySelectorAll("#chk");

check.forEach((box) => {
  box.addEventListener("click", checkear);
});
