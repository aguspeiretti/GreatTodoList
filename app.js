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
  tarea.value = "";
};

btnTarea.addEventListener("click", agregarAlListado);

const elegir = (e) => {
  const tocado = e.target.getAttribute("data-id");
  console.log(e);
  console.log(tocado);
  tareas = tareas.filter((elemento) => elemento != tocado);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  mostrarListado();
};

const checkear = (e) => {
  const eleccion = e.target.getAttribute("data-id");
  console.log(eleccion);
  console.log(e);
  if (e.target.checked) {
    const pTitulo = document.querySelector(`[data-p="${eleccion}"]`);
    pTitulo.style.textDecoration = "line-through";
  } else {
    const pTitulo = document.querySelector(`[data-p="${eleccion}"]`);
    pTitulo.style.textDecoration = "none";
  }
};

const mostrarListado = () => {
  listado.innerHTML = "";
  tareas.forEach((elemento) => {
    let element = elemento;
    const objetolista = document.createElement("li");
    objetolista.innerHTML = ` <div class="divLi"><input type="checkbox" data-id=${element} class="chk" id="chk"><label id="lbl" for="chk"><p data-p=${element} >${element}</p></label></div> <button  data-id=${element} class="btnLista" id="btnLista">-</button>`;
    listado.append(objetolista);
  });
  const boton = document.querySelectorAll("#btnLista");
  console.log(boton);
  boton.forEach((btn) => {
    btn.addEventListener("click", elegir);
  });
  const check = document.querySelectorAll("#chk");
  console.log(check);
  check.forEach((box) => {
    box.addEventListener("click", checkear);
  });
};

if (tareas != []) {
  mostrarListado();
}

//checkbox funcion

// boton eliminar funcion
