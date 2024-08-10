import pool from "../../config/db.js";

export async function viewAllInformation(){
    try{
        let vehiclesInfo = await pool.query('select * from vehicles')
        vehiclesInfo=vehiclesInfo[0]
        return vehiclesInfo
    }catch(err){
        throw new Error (`error in the models view all information ${err}`)
    }
}

export async function modelByGetId(id){
    try {
        const [[data]]= await pool.query('SELECT * FROM vehicles WHERE id=?',id)
        return data
    } catch (error) {
        throw new Error('error in model of getByid',error)
    }
}


export async function InsertNewDataModel(model,year,driversId){
    try{
    const [objectInner]= await pool.query('insert into vehicles(model,year,drivers_id) values(?,?,?)',[model,year,driversId])
    const [[viewVehicles]] = await pool.query('select * from vehicles where id = ?',[objectInner.insertId])
    return viewVehicles
    }catch(err){
        throw new Error(`not was possible insert new data `,err)
    }
}

export async function modelsOfUpdate(model,year,driversId,id){
    try{
        const [update]= await pool.query('update vehicles set model=?, year=?,drivers_id=? where id=?',[model,year,driversId,id])
        const dataThatWasUpdate= await pool.query('select * from vehicles where id=?',id)
        return [[dataThatWasUpdate]]
    }catch(err){
        throw new Error('error in models for update',err)
    }
}

export async function modelDelete(id){
    try{
    const [[obejectDelete]]= await pool.query(`SELECT * FROM vehicles WHERE id=?`, id)
        const deleteObject= await pool.query('DELETE from vehicles where id=?', id)
        return [obejectDelete,deleteObject]
        
    }catch(err){
        throw new Error('error in model for delete',err)
    }
}