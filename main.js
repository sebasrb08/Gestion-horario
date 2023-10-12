let botonEstudiante= document.querySelector("#enviar-estudiante")
let botonCurso= document.querySelector("#enviar-curso")
let checkbox= document.querySelector("#checkbox__cursos")
let selec= document.querySelector("#selec-inputs")
let botonSelec= document.querySelector("#boton-selec")
let tabla= document.querySelector(".tabla")




let datosEstudiante= document.querySelectorAll(".input_estudiante")
let datoscurso= document.querySelectorAll(".datos-curso")
let chee = document.querySelectorAll("conten-check")

let arrayCurso=JSON.parse(localStorage.getItem("curso"))
let arrayEstudiante=JSON.parse(localStorage.getItem("estudiante"))

comprobarArrays()
añadirCheckbox(arrayCurso)

class Estudiante{
    constructor(codigo,nombre,cursos){
        this.codigo=codigo
        this.nombre=nombre
        this.cursos=cursos
    }
}

class Curso{
    constructor(codigo,nombre,especialidad,duracion,credito){
        this.codigo=codigo
        this.nombre=nombre
        this.especialidad=especialidad
        this.duracion=duracion
        this.credito=credito


    }
}

function comprobarArrays(){
    if(!arrayCurso){
        arrayCurso=[]

    }else{
        agregarrSelect()
    }
    if(!arrayEstudiante){
        arrayEstudiante=[]
    }

}

botonEstudiante.addEventListener("click",()=>{
    // let check=document.querySelectorAll(".check")
    // check.addEventListener("click",()=>{
        
    // })
    // console.log(check)
    let nombre=datosEstudiante[0].value
    let codigoE=datosEstudiante[1].value
    let estudiante= new Estudiante(codigoE,nombre)
    arrayEstudiante.push(estudiante)
    localStorage.setItem("estudiante",JSON.stringify(arrayEstudiante))
    console.log(arrayEstudiante)
    borrarInputs()
})


botonCurso.addEventListener("click",()=>{
    let nombre=datoscurso[0].value
    let codigoC=datoscurso[1].value
    let especialidad=datoscurso[2].value
    let duracion=datoscurso[3].value
    let credito=datoscurso[4].value
    let curso = new Curso(nombre,codigoC,especialidad,duracion,credito)
    arrayCurso.push(curso)
    localStorage.setItem("curso",JSON.stringify(arrayCurso))
    borrar()
    añadirCheckbox(arrayCurso)
    borrar2()
    agregarrSelect()
    borrarInputs()
})

function borrar(){
    let check = document.querySelectorAll(".conten-check")
    check.forEach(element => {
        checkbox.removeChild(element)
    });
}
function borrar2(){
    let opti = document.querySelectorAll(".options")
    opti.forEach(element => {
        selec.removeChild(element)
    });
}

function añadirCheckbox(arrayCurso){
    
    arrayCurso.forEach(element => {
        let div = document.createElement("div")
        div.classList.add("conten-check")

        let input = document.createElement("input")
        input.type="checkbox"
        input.classList.add("check")
    
        let p = document.createElement("p")
        p.textContent=element.nombre
        p.classList.add("cursoss")
        
        div.appendChild(input)
        div.appendChild(p)
        checkbox.appendChild(div)
    });
}  

function agregarrSelect(){ 
    arrayCurso.forEach(element => {
        let option = document.createElement("option")
        option.classList.add("options")
        option.value=element.nombre
        option.textContent=element.nombre
        selec.appendChild(option)
        console.log(element)
    });
}

function borrarInputs(){

    datosEstudiante.forEach(element => {
        element.value= " "
    });

    datoscurso.forEach(element => {
        element.value= " "
    });
}

botonSelec.addEventListener("click",()=>{
    arrayEstudiante.forEach(element => {
        tabla.innerHTML+=`<tr>
        <th scope="row">${element.nombre}</th>
        <td>Fecha</td>
        <td>Fecha</td>
        <td>Fecha</td>
        <td>Fecha</td>
        <td>Fecha</td>
        <td>Fecha</td>
        <td>Fecha</td>
      </tr>`
    });
})