import { Router } from 'express'
import { getButAll,getById,InsertNewDataController,UpdateById,deleteById} from '../controllers/driversController.js'


export const drivererouter=Router()

drivererouter.get('/',getButAll)
drivererouter.get('/:id',getById)
drivererouter.post('/',InsertNewDataController)
drivererouter.put('/:id',UpdateById)
drivererouter.delete('/:id',deleteById)