import pool from "../../config/db.js";

export async function viewAllInformation(){
    try{
        let shipmentsInfo = await pool.query('select * from shipments')
        shipmentsInfo=shipmentsInfo[0]
        return shipmentsInfo
    }catch(err){
        throw new Error (`error in the models view all information ${err}`)
    }
}

export async function modelByGetId(id){
    try {
        const [[data]]= await pool.query('SELECT * FROM shipments WHERE id=?',id)
        return data
    } catch (error) {
        throw new Error('error in model of getByid',error)
    }
}


export async function InsertNewDataModel(item,quantity,warehousesId,vehiclesId){
    try{
    const [objectInner]= await pool.query('insert into shipments(item,quantity,warehouses_id,vehicles_id) values(?,?,?,?)',[item,quantity,warehousesId,vehiclesId])
    const [[viewShipments]] = await pool.query('select * from shipments where id = ?',[objectInner.insertId])
    return viewShipments
    }catch(err){
        throw new Error(`not was possible insert new data `,err)
    }
}

export async function modelsOfUpdate(item,quantity,warehousesId,vehiclesId,id){
    try{
        const [update]= await pool.query('update shipments set item=?, quantity=?,warehouses_id=?,vehicles_id=? where id=?',[item,quantity,warehousesId,vehiclesId,id])
        const dataThatWasUpdate= await pool.query('select * from shipments where id=?',id)
        return [[dataThatWasUpdate]]
    }catch(err){
        throw new Error('error in models for update',err)
    }
}

export async function modelDelete(id){
    try{
    const [[obejectDelete]]= await pool.query(`SELECT * FROM shipments WHERE id=?`, id)
        const deleteObject= await pool.query('DELETE from shipments where id=?', id)
        return [obejectDelete,deleteObject]
        
    }catch(err){
        throw new Error('error in model for delete',err)
    }
}