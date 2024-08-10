// Importación de las funciones necesarias desde el archivo de modelos
import { viewAllInformation, modelByGetId, InsertNewDataModel, modelsOfUpdate, modelDelete } from "../models/driversModels.js";

// Función para encontrar el ID a partir de los parámetros de la solicitud
function findId(req){
    // Se obtiene el ID de los parámetros de la solicitud
    const findId = req.params.id
    // Se retorna el ID encontrado
    return findId
}

// Controlador para obtener toda la información
export const getButAll = async (req, resp) => {
    // Se obtiene toda la información usando la función viewAllInformation
    const driversInfo = await viewAllInformation()

    try {
        // Si se obtiene información, se envía una respuesta en formato JSON
        if (driversInfo) {
            resp.json({
                message: `all info in your view`,
                driversInfo
            })
        }
    } catch (err) {
        // En caso de error, se envía un mensaje de error en formato JSON
        resp.json({
            message: `error obtaining the information ${err}`
        })
    }
}

// Controlador para obtener información por ID
export const getById = async (req, resp) => {
    try {
        // Se encuentra el ID usando la función findId
        const id = findId(req)
        // Se obtiene la información por ID usando la función modelByGetId
        const data = await modelByGetId(id)
        // Si no se encuentra la información, se envía una respuesta 404
        if (!data) {
            resp.status(404).send(
                'the information do not find'
            )
        } else {
            // Si se encuentra la información, se envía una respuesta 200 con los datos en formato JSON
            resp.status(200).json({
                message: 'information in your screen',
                data
            })
        }
    } catch (error) {
        // En caso de error, se lanza una excepción con un mensaje de error
        throw new Error(`can't find the information, there was an error with the drivers`, error)
    }
}

// Controlador para insertar nuevos datos
export const InsertNewDataController = async (req, resp) => {
    // Se extraen los datos del cuerpo de la solicitud
    const { name, shipments_id } = req.body
    // Se inserta la nueva información usando la función InsertNewDataModel
    const viewDrivers = await InsertNewDataModel(name, shipments_id)
    
    try {
        // Si la inserción es exitosa, se envía una respuesta 201 con un mensaje de éxito
        resp.status(201).json({
            message: "created success",
            viewDrivers
        })
    } catch (error) {
        // En caso de error, se lanza una excepción con un mensaje de error
        throw new Error("no insert nothing in the post function controller drivers", error)   
    }
}

// Controlador para actualizar datos por ID
export const UpdateById = async (req, resp) => {
    // Se prepara la data para la actualización extrayendo los datos del cuerpo de la solicitud
    const dataForUpdate = {
        name: req.body.name,
        shipmentsID: req.body.shipments_id
    }
    // Se actualiza la información usando la función modelsOfUpdate
    const [[[dataThatUpdate]]] = await modelsOfUpdate(dataForUpdate.name, dataForUpdate.shipmentsID, findId(req))

    try {
        // Si la actualización es exitosa, se envía una respuesta 203 con un mensaje de éxito
        resp.status(203).json({
            message: "updated success",
            dataThatUpdate
        })
    } catch (err) {
        // En caso de error, se lanza una excepción con un mensaje de error
        throw new Error("error from controller of Update", err)
    }
}

// Controlador para eliminar datos por ID
export const deleteById = async (req, resp) => {
    // Se elimina la información usando la función modelDelete
    const deleteObject = await modelDelete(findId(req))
    try {
        // Si la eliminación es exitosa, se envía una respuesta 201 con un mensaje de éxito
        resp.status(201).json({
            message: 'object was deleted',
            deleteObject
        })
    } catch (error) {
        // En caso de error, se lanza una excepción con un mensaje de error
        throw new Error(`error in trying to delete object`, error)
    }
}
