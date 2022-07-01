const datosAlumnos=[
    {
        cedula:'1726944026',
        nombre: ['Joel','Velasco']
    },{
        cedula:'1556462645',
        nombre: ['Ernesto','Bahamonde']
    }
]

const datosNotas =[
    {
        cedula:'1726944026',
        notas: [{'Sistemas digitales':18}]
    },
    {
        cedula:'1556462645',
        notas: [{'Sistemas digitales':19}]
    }

]

const getNombreAlumno= (id, callback)=>{
        const nombreAlumno=datosAlumnos.find((e)=> e.cedula == id);
        if(nombreAlumno){
        callback(null,nombreAlumno);
        }else{
            callback("Lo lamentamos no se encontro el alumno");
        }
}

const getNotasAlumno= (id, callback)=>{
    const notasAlumnos= datosNotas.find((e)=>e.cedula==id).notas;
    if(notasAlumnos){
        callback(null,notasAlumnos);
    }else{
        callback("No se encontro notas")
    }
}



let cedula= "1726944026";


getNombreAlumno(cedula,(err, nombreAlumno)=>{

    if(err){
        return console.log(err);
    }
    console.log(nombreAlumno)
    getNotasAlumno(cedula,(err, notasAlumnos)=>{
        
        if(err){
            return console.log(err);
        }
        console.log(notasAlumnos);

       
    });
});

