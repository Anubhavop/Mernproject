import {React,useState} from 'react'
import {NavLink, useHistory} from "react-router-dom";


const Signup = () => {
    const history=useHistory();
    const [user, setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    });
    let name,value;
    const handleInputs=(e)=>{
      name=e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value});
    }
    const postData= async(e)=>{
        e.preventDefault();
        const{name,email,phone,work,password,cpassword}=user;
        const res=await fetch("/register",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
        'Accept': 'application/json'
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        });

        const data=await res.json();

        if(res.status===422 || !data){
            window.alert("Invalid Registration");
        }
        else{
            window.alert("Sucessfull Registration");
            history.push("/login")
        }

    }
    return (
        <>
           <div className="container mt-5 mb-5">
    <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
            <div className="card px-5 py-5"> 
                <h1 className="mt-3">REGISTRATION</h1> 
                <form method="POST">
                <div className="form-input"> <i className="zmdi zmdi-accounts"></i> <input type="text" className="form-control" placeholder="User name" name="name" value={user.name} onChange={handleInputs}/> </div>
                <div className="form-input"> <i className="zmdi zmdi-email"></i><input type="text" className="form-control" placeholder="Email address" name="email" value={user.email} onChange={handleInputs}/> </div>
                <div className="form-input"> <i className="zmdi zmdi-phone"></i> <input type="number" className="form-control" placeholder="Phone No" name="phone" value={user.phone} onChange={handleInputs}/> </div>
                <div className="form-input"> <i className="zmdi zmdi-file-text"></i> <input type="text" className="form-control" placeholder="Profession" name="work" value={user.work} onChange={handleInputs}/> </div>
                <div className="form-input"> <i className="zmdi zmdi-lock"></i> <input type="password" className="form-control" placeholder="password" name="password" value={user.password} onChange={handleInputs}/> </div>
                <div className="form-input"> <i className="zmdi zmdi-lock"></i> <input type="password" className="form-control" placeholder="confirm password" name="cpassword" value={user.cpassword} onChange={handleInputs}/> </div>
                {/* <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/> <label class="form-check-label"htmlFor="flexCheckChecked"> I agree all the statements </label> </div>  */}
                <button className="btn btn-danger mt-4 signup" type="submit" onClick={postData} >Register</button>
                </form>
               <div className="text-center mt-4"> <span>Already a member?</span> <NavLink to="/login" className="text-decoration-none log">Login</NavLink> </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Signup
