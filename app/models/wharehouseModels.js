import pool from '../../config/db.js'


export async function viewAllInformation(){
    
    try{
        let wharehousesInfo = await pool.query('select * from warehouses')
        wharehousesInfo=wharehousesInfo[0]
        return wharehousesInfo
    }catch(err){
        throw new Error (`error in the models view all information ${err}`)
    }
}


export async function InsertNewDataModel(name,location,driversId,vehiclesId){
    try{
    const [objectInner]= await pool.query('insert into warehouses(name,location,drivers_id,vehicles_id) values(?,?,?,?)',[name,location,driversId,vehiclesId])
    const [[viewWarehouse]] = await pool.query('select * from warehouses where id = ?',[objectInner.insertId])
    return viewWarehouse
    }catch(err){
        throw new Error(`not was possible insert new data `,err)
    }
}

export async function modelsOfUpdate(name,location,id){
    try{
        const [update]= await pool.query('update warehouses set name=?, location=? where id=?',[name,location,id])
        const dataThatWasUpdate= await pool.query('select * from warehouses where id=?',id)
        return [[dataThatWasUpdate]]
    }catch(err){
        throw new Error('error in models for update',err)
    }
}

export async function modelDelete(id){
    try{
    const [[obejectDelete]]= await pool.query(`SELECT * FROM warehouses WHERE id=?`, id)
        const deleteObject= await pool.query('DELETE from warehouses where id=?', id)
        return [obejectDelete,deleteObject]
        
    }catch(err){
        throw new Error('error in model for delete',err)
    }
}

export async function modelByGetId(id){
    try {
        const [[data]]= await pool.query('SELECT * FROM warehouses WHERE id=?',id)
        return data
    } catch (error) {
        throw new Error('error in model of getByid',error)
    }
}