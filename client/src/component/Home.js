import React,{useEffect,useState} from 'react'
import {NavLink} from 'react-router-dom'
import logo from "../images/logo4.png"





const Home = () => {
    const [userName, setUserName] = useState('')
    const [show, setShow] = useState(false)
    const callHomePage=async()=>{
        try{
        const res=await fetch("/getData",{
            method:"GET",
            headers:{
                'Content-Type': 'application/json'
            }
        });

        const data=await res.json();
        console.log(data);
        setUserName(data.name);
        setShow(true);

       
        
    }
    catch(e){
        console.log(e);
        
    }

    }
    useEffect(() => {
        callHomePage();
        // eslint-disable-next-line
    }, [])

    return (
        <>
          <div className="page-wrap d-flex flex-row align-items-center ll">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12 text-center">
                <span className="display-1 d-block "><img className="image picture" src={logo} alt=""  /></span>
                <div className="mb-4 lead not-found">Welcome
                <h2>{userName}</h2>
                <h4>{show ?'Happy to see you back':"We are the mern Developers"}</h4> 
                </div>
                <NavLink to="/login" className="btn btn-success send px-3"><i className="zmdi zmdi-long-arrow-right"></i> Login</NavLink> 
    
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Home
 