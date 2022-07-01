const datosAlumnos=[]

const nuevoAlumno = alumno => new Promise( resolve => {
    setTimeout(() => {
        datosAlumnos.push(alumno);
        resolve(`Agregado: ${alumno.nombre}`)
    }, 3000);
});

nuevoAlumno({
    cedula:'1726944026',
    nombre: ['Joel','Velasco']
}).then(resultado =>{
    console.log(resultado);
    console.log(datosAlumnos)
    return nuevoAlumno({
        cedula:'1556462645',
        nombre: ['Ernesto','Bahamonde']
    });
}).then(resultado =>{
    console.log(resultado);
    console.log(datosAlumnos)
}).catch(e=>console.log(e))