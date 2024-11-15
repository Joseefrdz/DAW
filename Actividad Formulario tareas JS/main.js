
const tarea = {
    id: '',
    nombre: "",
    descripcion: "",
    prioridad: "",
    fecha: "",
    prioritaria: false,
};

const tareas = [];

function agregar(){
    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const prioridad = document.getElementById("prioridad").value;
    const fecha = document.getElementById("fecha").value;
    const prioritaria = document.getElementById("flexCheckDefault").checked;
    var imag = '';
    switch(prioridad){
        case "alta":
            imag = "https://static-00.iconduck.com/assets.00/high-priority-icon-1024x1024-ryazhwgn.png"
            break;

        case "media":
            imag = "https://static-00.iconduck.com/assets.00/medium-priority-icon-512x512-kpm2vacr.png"
            break;

        case "baja":
            imag = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tANuBJoViapolNoVPmOHlaaFityDbdvSyyhUVpIL_MvB2K3IS6DNmUXkAtzhOPbbHRc&usqp=CAU"
            break;
    }

    if(nombre !='' && descripcion !='' && prioridad !='' && fecha !=''){
        const nuevaTarea = {
             nombre: nombre,
             descripcion: descripcion,
             prioridad: prioridad,
             fecha: fecha,
             prioritaria: prioritaria,
             img: imag,
        };
    
        tareas.push(nuevaTarea)
        tareas.forEach((elem, index) => {
            card(index)
            console.log(index)
        });
        mostrar()
    }else{
        alert('Debes rellenar todos los campos para continuar')
    }
}

function mostrar(){
    var lista = document.getElementById("list")
    prior = document.getElementById("filtro").value;
    lista.innerHTML = '';

    for (let i = 0; i < tareas.length; i++) {
            var li = document.createElement('p');
            li.textContent = tareas[i].nombre;  
            lista.appendChild(li);
            console.log(tareas[i].id)
    }
};

function busquedaRefinada(){
    var lista = document.getElementById("list")
    prior = document.getElementById("filtro").value;
    lista.innerHTML = '';

    for (let i = 0; i < tareas.length; i++) {
        
        if (prior == ""){
            var li = document.createElement('p');
            li.textContent = tareas[i].nombre;  
            lista.appendChild(li);
        }else if(tareas[i].prioridad == prior){
            var li = document.createElement('p');
            li.textContent = tareas[i].nombre;  
            lista.appendChild(li);
        }
    }
}

function card(index){
    var contenedor = document.getElementById('contenedor')
    contenedor.innerHTML = '';

    for(let i=0; i<tareas.length; i++){
        var card =`<div class="card" style="width: 18rem;">
        <img src="${tareas[i].img}" class="card-img-top" alt="${tareas[i].nombre}">
        <div class="card-body">
          <h5 class="card-title">${tareas[i].nombre}</h5>
          <p class="card-text">${tareas[i].descripcion}.</p>
          <a href="#" class="btn btn-dark" onclick="completar(${i})">Completar</a>
        </div>
      </div>`;
        var nuevaTarjeta = document.createElement('div');
        nuevaTarjeta.innerHTML = card;

        
        contenedor.appendChild(nuevaTarjeta);
    }
}

function completar(index){
    tareas.splice(index, 1)
    mostrarCartas()
    mostrar()
}

function mostrarCartas(){
    var contenedor = document.getElementById('contenedor')
    contenedor.innerHTML = '';
    tareas.forEach((elem, index) => {
        card(index)
    });
}