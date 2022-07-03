import React,{useState} from 'react';
import styles from "../styles/Contact.module.css"


const contact = () => {

    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [desc, setdesc] = useState("");

    const handleClick = (e)=>{
        e.preventDefault();
        console.log("Clicked");
        console.log(name,phone,email,desc);
        
//         const data = { username: 'example' };
const data = {name,phone,email,desc};
fetch('http://localhost:3000/api/postcontact', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.text())
.then(data => {
  console.log('Success:', data);
  // alert("done")

})
.catch((error) => {
  console.error('Error:', error);
  alert("errror")
});



       
        // fetch("http://localhost:3000/api/postcontact",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body: JSON.stringify(data)
        //     // body:JSON.stringify(data)
        // })
        // .then(response => response.text())
        // .then(data=>{
        //     console.log("Success");
        //     setname("ddd");
        //     setphone("");
        //     setemail("");
        //     setdesc("");
        //     alert("details has been received");
           

        // }).catch((error)=>{
        //     console.log("Error: ", error);
        // })

    }

    const handleChange=(e)=>{
      if(e.target.name === "name"){
        setname(e.target.value);
      }
      else if(e.target.name === "phone"){
        setphone(e.target.value);
      }
      else if(e.target.name === "email"){
        setemail(e.target.value);
      }
      else if(e.target.name === "desc"){
        setdesc(e.target.value);
      }else{
        alert("something went wrong")
      }
    }
    

 

  return (
    <div className={styles.container}>
        {/* name,phone,desc,email */}
        <form>
  <div className={styles.mb3}>
    <label htmlFor="name" className={styles.form_label}>Name</label>
    <input type="text" name='name' className={styles.form_input} onChange={handleChange} id="name" aria-describedby="emailHelp"/>
  </div>
  <div className={styles.mb3}>
    <label htmlFor="phone" className={styles.form_label}>Phone</label>
    <input type="phone" name='phone' className={styles.form_input}  onChange={handleChange} id="phone"/>
  </div>
  <div className={styles.mb3}>
  <label className={styles.form_label} htmlFor="email">email</label>
    <input type="email" name='email' className={styles.form_input}  onChange={handleChange} id="email"/>
   
  </div>
  <div className={styles.mb3}>
  <label className={styles.form_label} htmlFor="desc">Description</label>
  <textarea className={styles.form_input} name="desc" placeholder="Leave a description here"  onChange={handleChange} id="desc"/>
 
</div>
  <button type="submit" onClick={handleClick} className={styles.btn}>Submit</button>
</form>
    </div>
  )
}

export default contact