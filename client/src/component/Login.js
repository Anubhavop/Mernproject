import React,{useState,useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom';
import {UserContext} from '../App'
// import { ToastProvider, useToasts } from 'react-toast-notifications';

const Login = () => {
    const {dispatch} = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history=useHistory();
    // const { addToast } = useToasts();
    
    const loginData=async(e)=>{
        e.preventDefault();
        localStorage.setItem("tok","anubhavtheking")
        
        const res=await fetch("/signin",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                email,password
            })
        });
        
        const data=await res.json();
        
        if(res.status===400 || !data){
            window.alert("Invalid Login");
        }
        else{
            window.alert("succesfully login");
            dispatch({type:"USER",payload:true})
            history.push("/")
        }
        
    }
    
   
    return (
        <>
        
            <div className="container mt-5 mb-5">
    <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
            <div className="card px-5 py-5"> 
                <h1 className="mt-3">LOGIN</h1> 
                <form  method="post">
                <div className="form-input"> <i className="zmdi zmdi-email"></i><input type="text" className="form-control" placeholder="Email address" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> </div>
                
                <div className="form-input"> <i className="zmdi zmdi-lock"></i> <input type="password" className="form-control" placeholder="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} /> </div>
                {/* <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/> <label class="form-check-label"htmlFor="flexCheckChecked"> I agree all the statements </label> </div>  */}
                <button className="btn btn-danger mt-4 signup" type="submit" onClick={loginData}>Login</button>
                
                </form>
               <div className="text-center mt-4"> <span>Create an Account!</span> <NavLink to="/Signup" className="text-decoration-none log">Sign Up</NavLink> </div>
            </div>
        </div>
    </div>
</div>

        </>
        
    )
}

export default Login
