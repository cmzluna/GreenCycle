import map from '../mapLocations/mapManager.js'
import { centersModel } from '../models/centers.model.js'


export const getAllSites = async (req, res) =>{

}
//PETICION PARA GUARDAR UN PUNTO DE RECICLAJE
export const createSite = async (req, res)=>{
    const {name, address, latitudes} = req.body
    const newSite= await centersModel.create({name:name,address:address,latitudes:latitudes})
    return res.status(200).json('Sitio creado con exito',newSite)
}