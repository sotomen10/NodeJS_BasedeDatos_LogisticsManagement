import { Router } from "express";
import { getButAll,InsertNewDataController,UpdateById,deleteById,getById} from "../controllers/warehousesControllers.js";


export const warehouserouter=Router()

warehouserouter.get('/',getButAll)
warehouserouter.get('/:id',getById)
warehouserouter.post(`/`,InsertNewDataController)
warehouserouter.put('/:id',UpdateById)
warehouserouter.delete('/:id',deleteById)























