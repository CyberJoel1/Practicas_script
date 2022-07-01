const datosAlumnos = [
  {
    cedula: "1726944026",
    nombre: ["Joel", "Velasco"],
  },
  {
    cedula: "1556462645",
    nombre: ["Ernesto", "Bahamonde"],
  },
];

const datosNotas = [
  {
    cedula: "1726944026",
    notas: [{ "Sistemas digitales": 18 },{"Modelos discretos": 14}],
  },
  {
    cedula: "1556462645",
    notas: [{ "Sistemas digitales": 19 }],
  },
];

const getNombreAlumno = (id) => {
  const nombreAlumno = datosAlumnos.find((e) => e.cedula == id)?.nombre;
  return new Promise((resolve, reject) => {
    if (nombreAlumno) {
      resolve(nombreAlumno);
    } else {
      reject("Lo lamentamos no se encontro el alumno");
    }
  });
};

const getNotasAlumno = (id) => {
  const notasAlumnos = datosNotas.find((e) => e.cedula == id)?.notas;
  return new Promise((resolve, reject) => {
    if (notasAlumnos) {
      resolve(notasAlumnos);
    } else {
      reject("No se encontro notas");
    }
  });
};

var cedula = "1726944026";
let nombre;
//   getNombreAlumno(cedula)
//     .then((resultado) => {
//       console.log(resultado);
//       nombre= resultado;
//       return getNotasAlumno(cedula);
//     })
//     .then((resultado)=>{
//       console.log(`El nombre del alumno es ${nombre} sus notas son : `);
//       resultado.forEach((e)=>{
//           console.log(e);
//       })
//     })
//     .catch((error) => console.log(error));

// const getInfo=async ()=>{
//     return "Alumno en espera";
// }
//getInfo().then((resultado) => console.log(resultado));
function recorrerNotas(notas) {
    console.log("Sus notas son : ")
    notas.forEach((e) => {
    console.log(e);
  });
}

const getInfoAlumno1 = async () => {
  const nombreAlumno = await getNombreAlumno(cedula);
  const getnotas = await getNotasAlumno(cedula);

  console.log(`El nombre del alumno es : ${nombreAlumno}`);
  recorrerNotas(getnotas);
};


const getInfoAlumno2 = async () => {
    const infoAlumno = await Promise.all([getNombreAlumno(cedula),getNotasAlumno(cedula)]);
    
  
    console.log(`El nombre del alumno es : ${infoAlumno[0]}`);
    recorrerNotas(infoAlumno[1]);
  };
  

  const getInfoAlumno3 = async () => {
    const infoAlumno = await Promise.race([
        
            new Promise((resolve, reject)=>{
                resolve("Hola mundo")
            })
        
        ,getNotasAlumno(cedula)]);
    console.log(infoAlumno);
   
  };

getInfoAlumno3()
