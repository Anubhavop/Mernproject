import {React,useEffect,useState} from 'react'


const Contact = () => {
    
    const [userData, setUserData] = useState({name:"",email:"",phone:"",message:""});

    const callContactPage=async()=>{
        try{
        const res=await fetch("/getData",{
            method:"GET",
            headers:{
                'Content-Type': 'application/json'
            }
        });

        const data=await res.json();
        console.log(data);
        setUserData({...userData,name:data.name,email:data.email,phone:data.phone});

        if(!res.status===200){
            const error=new Error(res.error);
            throw error;
        }
        
    }
    catch(e){
        console.log(e);
        
    }

    }
    useEffect(() => {
        callContactPage();
        // eslint-disable-next-line
    }, [])

    const inputHandler=(e)=>{
     const name=e.target.name;
     const value=e.target.value;

     setUserData({...userData,[name]:value})
    }
    
    const contactForm= async(e)=>{
       e.preventDefault();

       const{name,email,phone,message}=userData;

       const res=await fetch("/contact",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
    
        },
        body:JSON.stringify({
            name,email,phone,message
        })
    });

    const data=await res.json();
    if(!data){
        console.log("message not sent");
    }else{
        window.alert("message send");
        setUserData({...userData,message:""});
    }

    }
    
    return (
        <>
           <div className="container mt-5">
    <div className="text-center mb-3">
        <h3>Contact us</h3>
    </div>
    <div className="row g-2">
        <div className="col-md-4">
            <div className="card cc"> <img src="https://i.imgur.com/xuGJbnU.png" alt="" width="40"/>
                <h5>Address</h5>
                <p>Main SagarPur,New Delhi</p>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card cc"> <img src="https://i.imgur.com/TNKflal.png" alt="" width="40"/>
                <h5>Email</h5>
                <p>vermaanubhav9717@gmail.com</p>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card cc"> <img src="https://i.imgur.com/pZLFSO3.png" alt="" width="40"/>
                <h5>Phone</h5>
                <p>9717415819</p>
            </div>
        </div>
    </div>
</div>

<div className="container mt-5 mb-5">
    <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
            <div className="card px-5 py-5"> 
                
                <form  method="post">
            <div className="form-input"> <i className="zmdi zmdi-accounts"></i> <input type="text" className="form-control" placeholder="User name" name="name" value={userData.name} onChange={inputHandler}/> </div>
                <div className="form-input"> <i className="zmdi zmdi-email"></i><input type="text" className="form-control" placeholder="Email address" name="email" value={userData.email} onChange={inputHandler}/> </div>
                <div className="form-input"> <i className="zmdi zmdi-phone"></i> <input type="number" className="form-control" placeholder="Phone No" name="phone" value={userData.phone} onChange={inputHandler}/> </div>
                <div className="form-input"> <textarea className="form-control"  rows="7" placeholder="Write Message" name="message" value={userData.message} onChange={inputHandler}></textarea> </div>
                <button className="btn btn-danger mt-4 signup" onClick={contactForm}>Send Message</button>
                </form>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Contact
