const Joi = require('joi');

let  nombre= Joi.string().min(3).max(30);
let apellido= Joi.string().min(3).max(30);
let  edad= Joi.number().min(3).max(30);
let dni= Joi.string().min(3).max(30);
let curso= Joi.string().min(3).max(30);
let nota= Joi.number().min(3).max(30);
const estudiantesSchema = Joi.object({
    nombre: nombre.required(),
    apellido: apellido.required(),
    edad: edad.required(),
    dni: dni.required(),
    curso: curso.required(),
    nota: nota.required(),

})

module.exports = {estudiantesSchema};