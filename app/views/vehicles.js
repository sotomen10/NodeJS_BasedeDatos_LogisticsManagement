import { Router } from "express";
import { getButAll,InsertNewDataController,UpdateById,deleteById,getById} from "../controllers/vehiclesControllers.js";


export const vehiclerouter=Router()

vehiclerouter.get('/',getButAll)
vehiclerouter.get('/:id',getById)
vehiclerouter.post(`/`,InsertNewDataController)
vehiclerouter.put('/:id',UpdateById)
vehiclerouter.delete('/:id',deleteById)