function mostrarAlumno(nombre, apellido, callback){
    callback(nombre, apellido);
}



const funcionNombre=(nombre, apellido)=>{
    console.log(`${nombre} ${apellido}`);

}
mostrarAlumno("Joel","Velasco", funcionNombre)