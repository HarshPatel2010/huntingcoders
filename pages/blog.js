import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import * as fs from "node:fs";
//step:1 collect all the files from blogdata directory;
//step:2 iterate through them  and display them

const blog = (props) => {
  // building state for display all Blogs which blogs are fetched
  // const [blogs, setblogs] = useState(props.blogs);

  // useEffect(()=>{
  //   console.log("useeffect is runnign");
  //   fetch("http://localhost:3000/api/blogs").then((a)=>{
  //     return a.json()
  //   }).then((parsed)=>{
  //     setblogs(parsed)
  //   })
  // },[])

  return (
    <div>
      <main>
        {blogs.map((blogItem) => {
          return (
            <div className={styles.grid} key={blogItem.slug}>
              <div className={styles.card}>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <h2>{blogItem.title}</h2>
                </Link>
                <p>{blogItem.content.substr(0, 130)}...</p>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

// serverside rendering
export async function getStaticProps(context) {
  // let data =await  fetch("http://localhost:3000/api/blogs");
  // let allBlogs = await data.json();

  // let allBlogs = [];
  // let myFile = [];
  // let data = await fs.promises.readdir("blogdata");
  // data.forEach(async(element) => {
  //   myFile = await fs.promises.readFile((`blogdata/${element}`),"utf-8",()=>{

  //     allBlogs.push(JSON.parse(myFile))
  //     // console.log(element)
  //   })

  // });

  let allBlogs=[];
  let myFile;
  let data = await fs.promises.readdir("blogdata");
  console.log(data);
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
   
    myFile = await fs.promises.readFile(("blogdata/"+item),"utf-8");
  
    
    allBlogs.push(JSON.parse(myFile))
    // myFile = await fs.promises.readFile(("blogdata/" + element),"utf-8"),
    // // allBlogs.push(JSON.parse(myFile));
  }

  return {
    props: { blogs: allBlogs }, // will be passed to the page component as props
  };
}

export default blog;
