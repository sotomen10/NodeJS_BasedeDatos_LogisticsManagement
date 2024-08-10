import express from 'express'
import { warehouserouter } from '../views/wharehouses.js'
import {drivererouter} from '../views/drivers.js'
import { shipmentrouter } from '../views/shipments.js'
import { vehiclerouter } from '../views/vehicles.js'

export const routes=express()

routes.use('/warehouses', warehouserouter)
routes.use('/drivers', drivererouter)
routes.use('/shipments', shipmentrouter)
routes.use('/vehicles', vehiclerouter)