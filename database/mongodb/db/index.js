const {MongoClient,ObjectId} = require('mongodb');

const {mongourl,database} = require('../config.json')
async function connect(){
    client = await MongoClient.connect(mongourl,{useNewUrlParser: true});
    db = client.db(database);
    return {client,db}
}
//查询
exports.search = async(colname,data)=>{
    let {client,db} = await connect();
    let result;
    // if(data._id){
    //     data._id = ObjectId(data._id);
    // }
    try{
        result = await db.collection(colname).find(data).toArray();
        console.log(result)
    }catch(err){
        result = err;
    }
    client.close();
    return result;
    
}
//查询获取全部商品
exports.searchall = async(colname)=>{
    let {client,db} = await connect();
    let result;
    try{
        result = await db.collection(colname).find({guid:{$ne:"null"}}).toArray();
    }catch(err){
        result = err;
    }
    client.close();
    return result;
    
}
//查询获取单个商品
exports.searchone = async(colname,guid)=>{
    let {client,db} = await connect();
    let result;
    try{
        result = await db.collection(colname).find({productId:guid}).toArray();
    }catch(err){
        result = err;
    }
    client.close();
    return result;
    
}


//插入
exports.add = async(colname,data)=>{
    let {client,db} = await connect();
    // console.log(data);
    let result ;
    try{
        result= await db.collection(colname).insertOne(data);
    }catch(err){
        result = err;
    }
    client.close();
    return result;
}
//删除
exports.del = async(colname,data)=>{
    let {client,db} = await connect();
    let result ;
    try{
        result= await db.collection(colname).deleteOne(data);
        return "ok";
    }catch(err){
        // result = err;
        return err
    }
    client.close();
}
//修改
exports.amend = async(colname,query,newdata)=>{
    let {client,db} = await connect();
    let result ;
    // console.log(query)
    try{
        result= await db.collection(colname).updateOne(query,{$set:newdata});
        if(result.result.nModified == 1){
            result = "ok";
        }else{
            result = err;
        }
      
    }catch(err){
        result = err;
    }
    client.close();
    return result;
}



