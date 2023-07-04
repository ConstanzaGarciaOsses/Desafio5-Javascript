const Tarea = [
    {
        id:1,
        tarea: "Hacer la cama"
    },
    {
        id:2,
        tarea: "Tomar desayuno"
    },
    {
        id:3,
        tarea:"Ir al gimnasio"
    }
];

let cont = Tarea.length + 1 

document.addEventListener("DOMContentLoaded", function(){
    ListaTareas(Tarea);
});

// Esta funcion va a añadir la tarea al array
function AñadeAlArray(){
    const InpuTarea = document.querySelector("#InpuTareas").value;
    NuevaTarea = {id: cont, tarea: InpuTarea}
    Tarea.push(NuevaTarea);
    cont++;
    ListaTareas(Tarea);
}

// Esta funcion va a eliminar la tarea cuando se aprete el basurero.
function EliminaTarea(id){
    const index = Tarea.findIndex(li => li.id === id);
    Tarea.splice(index,1);
    ListaTareas(Tarea);
}

// Esta funcion va a mostrar el array con la tarea en la web.
function ListaTareas(Tarea){

    let ListHTML = "";

    Tarea.forEach(lista => {
        ListHTML += `
            <div class="d-flex">
                <p class="col-3">${lista.id}</p>
                <p class="col-3">${lista.tarea}</p>
                <input class="col-3" type="checkbox" onclick="Realizadas()">
                <i class="bi bi-trash" id="Tamaño" onclick="EliminaTarea(${lista.id})"></i>
            </div>
        `;
    });

    document.getElementById("Quehaceres").innerHTML = ListHTML;

    let TotalTareas = document.querySelector("#TotalTareas");
    TotalTareas.innerHTML = Tarea.length;
}

let TareasRealizadas = document.querySelector("#Realizadas");

function Realizadas() {
    let Checks = document.querySelectorAll('input[type="checkbox"]:checked').length;
    console.log(Checks);
    TareasRealizadas.innerHTML = Checks;
}