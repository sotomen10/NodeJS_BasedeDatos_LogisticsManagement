import {viewAllInformation,InsertNewDataModel,modelsOfUpdate,modelDelete,modelByGetId} from '../models/wharehouseModels.js'


export const getButAll=async (req,resp)=>{
    
    const wharehousesInfo=await viewAllInformation()
     // console.log(wharehousesInfo[0])  //solo estamos viendo que me esta trayendo con el [0] desestructuramos para que solo nos traiga un array 
     try{
         if(wharehousesInfo){
             resp.json({
                 message: `all info in your view`,
                 wharehousesInfo
             })
         }
     }catch(err){
         resp.json({
             message:`error obtaining the infomation${err}`
         })
     }
 }

 export const getById=async(req,resp)=>{
    try {
        const id=findId(req)
    const data= await modelByGetId(id)
        if(!data){
            resp.status(404).send(
                'the information do not finded'
            )
        }else{resp.status(200).json({
            message:'information in your screen',
            data
        })}
        
    } catch (error) {
        throw new Error(`can't find the informacion was a error `,error)
    } 
}

 export const InsertNewDataController=async(req,resp)=>{
    const {name,location,drivers_id,vehicles_id}=req.body
    const viewWarehouse=await InsertNewDataModel(name,location,drivers_id,vehicles_id)
    
    try {
        resp.status(201).json({
            message:"created success",
            viewWarehouse
        })
    } catch (error) {
        throw new Error("no insert nothing in the post function controller ",error)   
    }
}


function findId(req){
    const findId= req.params.id
    return findId
}

export const UpdateById=async(req,resp)=>{
    
    const dataForUpdate={
        name:req.body.name,
        location:req.body.location
    }
    const [[[dataThatUpdate]]]= await modelsOfUpdate(dataForUpdate.name,dataForUpdate.location,findId(req))

    try{
        resp.status(203).json({
            message:"updated success",
            dataThatUpdate
        })
    }catch(err){
        throw new Error("error from controller of Update",err)

    }
}


export const deleteById=async(req,resp)=>{
    const deleteObject=await modelDelete(findId(req))
    try {
        resp.status(201).json({
         message:'object was deleted',
         deleteObject
         
    })
} catch (error) {
        throw new Error(`error in try to delete object`,error)
    }
   
}

