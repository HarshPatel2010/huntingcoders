import * as fs from 'node:fs';
export default async function handler(req,res){
    let data = [{a:"array"}]

    if(req.method === "POST"){
        //Process a POST req
        let data =await fs.promises.readdir("contactdata");
        console.log("before",data);
        fs.promises.writeFile(`contactdata/${data.length+1}.json`,JSON.stringify(req.body));
        res.status(200).json(req.body);
    }else{
        //handle any ohter HTTP method
        res.status(200).json(["getReq"])
    }

}