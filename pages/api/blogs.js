import * as fs from "node:fs";
export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");
  console.log("query is",req.query.count);
  data = data.slice(0,parseInt(req.query.count))
  let myFile = [];
  let allBlogs = [];

  // console.log(data);
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    myFile = await fs.promises.readFile(("blogdata/" + element),"utf-8");
    allBlogs.push(JSON.parse(myFile))
    // console.log(JSON.parse(myFile));
  }
  console.log("from blogs",allBlogs);
res.status(200).json(allBlogs);
}

