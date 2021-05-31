import React,{useEffect,useContext} from 'react'
import { useHistory} from 'react-router-dom';
import {UserContext} from '../App'

const Logout = () => {
    const {dispatch} = useContext(UserContext)
    const history=useHistory();
    const callLogoutPage=async()=>{
        try{
            localStorage.removeItem("tok");
        const res=await fetch("/logout",{
            method:"GET",
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:"include"
        });

        const data=await res.json();
        console.log(data)
        

        if(!res.status===200){
            const error=new Error(res.error);
            throw error;
        }
        
    }
    catch(e){
        dispatch({type:"USER",payload:false})
        console.log(e);
        history.push("/login",{replace:true});
    }

    }
    useEffect(() => {
        callLogoutPage();
        // eslint-disable-next-line
    }, [])
    
         
        
           
    return (
        <div>
            
        </div>
    )
}

export default Logout
