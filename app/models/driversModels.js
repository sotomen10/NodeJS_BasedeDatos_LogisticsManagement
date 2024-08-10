// Importación del pool de conexiones a la base de datos
import pool from "../../config/db.js";

// Función para ver toda la información de la tabla 'drivers'
export async function viewAllInformation() {
    try {
        // Se ejecuta la consulta para seleccionar todos los registros de la tabla 'drivers'
        let driversInfo = await pool.query('SELECT * FROM drivers')
        // Se obtiene el primer resultado (en caso de que venga encapsulado en un array)
        driversInfo = driversInfo[0]
        // Se retorna la información obtenida
        return driversInfo
    } catch (err) {
        // En caso de error, se lanza una excepción con un mensaje de error
        throw new Error(`error in the models view all information ${err}`)
    }
}

// Función para obtener información por ID
export async function modelByGetId(id) {
    try {
        // Se ejecuta la consulta para seleccionar un registro específico de la tabla 'drivers' basado en el ID
        const [[data]] = await pool.query('SELECT * FROM drivers WHERE id=?', id)
        // Se retorna la información obtenida
        return data
    } catch (error) {
        // En caso de error, se lanza una excepción con un mensaje de error
        throw new Error('error in model of getById', error)
    }
}

// Función para insertar nuevos datos en la tabla 'drivers'
export async function InsertNewDataModel(name, shipmentsId) {
    try {
        // Se ejecuta la consulta para insertar un nuevo registro en la tabla 'drivers'
        const [objectInner] = await pool.query('INSERT INTO drivers(name, shipments_id) VALUES(?,?)', [name, shipmentsId])
        // Se ejecuta una consulta para seleccionar el nuevo registro insertado basado en el ID generado
        const [[viewDrivers]] = await pool.query('SELECT * FROM drivers WHERE id = ?', [objectInner.insertId])
        // Se retorna la información del nuevo registro
        return viewDrivers
    } catch (err) {
        // En caso de error, se lanza una excepción con un mensaje de error
        throw new Error(`not was possible to insert new data`, err)
    }
}

// Función para actualizar datos en la tabla 'drivers' por ID
export async function modelsOfUpdate(name, shipmentsId, id) {
    try {
        // Se ejecuta la consulta para actualizar un registro específico en la tabla 'drivers'
        const [update] = await pool.query('UPDATE drivers SET name=?, shipments_id=? WHERE id=?', [name, shipmentsId, id])
        // Se ejecuta una consulta para seleccionar el registro actualizado
        const dataThatWasUpdate = await pool.query('SELECT * FROM drivers WHERE id=?', id)
        // Se retorna la información del registro actualizado
        return [[dataThatWasUpdate]]
    } catch (err) {
        // En caso de error, se lanza una excepción con un mensaje de error
        throw new Error('error in models for update', err)
    }
}

// Función para eliminar un registro en la tabla 'drivers' por ID
export async function modelDelete(id) {
    try {
        // Se selecciona el registro que se va a eliminar para retornarlo como referencia
        const [[objectDelete]] = await pool.query('SELECT * FROM drivers WHERE id=?', id)
        // Se ejecuta la consulta para eliminar el registro de la tabla 'drivers'
        const deleteObject = await pool.query('DELETE FROM drivers WHERE id=?', id)
        // Se retorna la información del registro eliminado y el resultado de la operación de eliminación
        return [objectDelete, deleteObject]
    } catch (err) {
        // En caso de error, se lanza una excepción con un mensaje de error
        throw new Error('error in model for delete', err)
    }
}
