import React,{useEffect,useState} from 'react'
import styles from "../../styles/Home.module.css";
import * as fs from "node:fs";



const Slug = (props) => {
   // const router = useRouter();
    //const {slug} = router.query; //destructured because its an object so we have to get a key (slug ) from the router.query
  const {myBlog} = props;
  const [blog, setblog] = useState(myBlog);
    // //step 1: find the file curresponding the slug;
    // useEffect(() => {
    //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((data)=>{
    //       return data.json()
    //     }).then((parsed)=>{
    //       setblog(parsed);
      
    //     });

    // }, [])
    
    // step 2: populate inside the page
  return (
    <div>
    <main>
    <div className={styles.grid}>
      <div className={styles.card}>
      
          <h2>Title of the Page is {blog.title}</h2>
        
        <p>{blog.content}</p>
        </div>
      </div>
    </main>
  </div>
  )
}

// getStaticpath
export async function getStaticPaths() {
  return {
    paths: [
      { params:{slug:  "how-to-learn-javascript" }}, 
      { params:{slug: "how-to-learn-nodejs"} },
      { params:{slug: "how-to-learn-solidity"} },

    ],
    fallback: true // false or 'blocking'
  };
}

// serverside rendering function\
export async function getStaticProps(context) {
  
  const {slug} = context.params
  console.log(slug)
  let myBlog =await fs.promises.readFile(`blogdata/${slug}.json`,"utf-8");
  
  return {
    props: {myBlog : JSON.parse(myBlog)}, // will be passed to the page component as props
  }
}

export default Slug