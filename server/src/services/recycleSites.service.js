import { centersModel } from '../models/centers.model.js'


export const getAllSites = async (req, res) =>{
    try {
        const sites= await centersModel.find()
        return res.json(sites)        
    } catch (error) {
        return error
    }

}
//PETICION PARA GUARDAR UN PUNTO DE RECICLAJE
export const createSite = async (req, res)=>{
    const {name, address, coordinates} = req.body
    const newSite= await centersModel.create({name:name,address:address,coordinates:coordinates})
    return res.status(200).json('Sitio creado con exito',newSite)
}