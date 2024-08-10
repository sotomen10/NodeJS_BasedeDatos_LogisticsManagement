import { viewAllInformation,modelByGetId,InsertNewDataModel,modelsOfUpdate,modelDelete} from "../models/vehiclesModels.js"


function findId(req){
    const findId= req.params.id
    return findId
}

export const getButAll=async (req,resp)=>{
    const vehiclesInfo=await viewAllInformation()
    
     try{
         if(vehiclesInfo){
             resp.json({
                 message: `all info in your view`,
                 vehiclesInfo
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
        throw new Error(`can't find the informacion was a error vehicles  `,error)
    } 
}


export const InsertNewDataController=async(req,resp)=>{
    const {model,year,drivers_id}=req.body
    const viewDrivers=await InsertNewDataModel(model,year,drivers_id)
    
    try {
        resp.status(201).json({
            message:"created success",
            viewDrivers
        })
    } catch (error) {
        throw new Error("no insert nothing in the post function controller vehicles ",error)   
    }
}

export const UpdateById=async(req,resp)=>{
    
    const dataForUpdate={
        model:req.body.model,
        year:req.body.year,
        driversId:req.body.drivers_id
    }
    const [[[dataThatUpdate]]]= await modelsOfUpdate(dataForUpdate.model,dataForUpdate.year,dataForUpdate.driversId,findId(req))

    try{
        resp.status(203).json({
            message:"updated success",
            dataThatUpdate
        })
    }catch(err){
        throw new Error("error from controller of Update ",err)
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