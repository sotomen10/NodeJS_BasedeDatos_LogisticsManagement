import { Router } from "express";
import { getButAll,InsertNewDataController,UpdateById,deleteById,getById} from "../controllers/shipmentsController.js";


export const shipmentrouter=Router()

shipmentrouter.get('/',getButAll)
shipmentrouter.get('/:id',getById)
shipmentrouter.post(`/`,InsertNewDataController)
shipmentrouter.put('/:id',UpdateById)
shipmentrouter.delete('/:id',deleteById)