const modelAlumno = require('../../models').Alumno;
const { Op } = require("sequelize");

const getAlumno=async (req,res)=>{

    const usuarios= await modelAlumno.findAll();

    res.send(usuarios)
}

const createAlumno=async (req,res)=>{
    const {cedula, nombre} = req.body;
    let options = {
        where: {
            CEDULA_ALUMNO: { [Op.eq]: cedula },
        },
      };
      try{
        const alumno = await modelAlumno.findOne({ ...options});

        if(!alumno){
            const alumnoCreado=await modelAlumno.create({ NOMBRE_ALUMNO: nombre , CEDULA_ALUMNO: cedula })
            if(!alumnoCreado){
                throw new Error('El alumno no fue creado')
            }else{
                res.json({message: "El alumno fue creado"})
            }
        }else{
            throw new Error('Ya hay un alumno existente')
        }
      }catch(err){
        console.log(err);
        res.status(400).send({message: err.message});

      }
    



}

module.exports={getAlumno,createAlumno}