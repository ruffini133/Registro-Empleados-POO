let empleados = [];


function Empleado(id, nombre, apellido, nacimiento, cargo) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}

function agregarEmpleado(){
    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let cargo = document.getElementById("cargo").value;

    let empleado = new Empleado(id, nombre, apellido, nacimiento, cargo);
    empleados.push(empleado);

    alert("Empleado agregado exitosamente");

    limpiarInputs();
    

}

function mostrarEmpleados() {
    let listado = '';
    for(empleado of empleados) {
        for (let caract in empleado){
            listado += caract.toUpperCase() + ": " + empleado[caract] + ", "

        }
        listado = listado + "\n";
    }
    alert(listado);
}

function limpiarInputs() {
    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("nacimiento").value = "";
    document.getElementById("cargo").value = "";
}

