import userEvent from "@testing-library/user-event"
import { useEffect, useState } from 'react';

function UserProfile(){
    const [user, setUser] = useState('');
    const [email, setEmail]= useState('');
    const [username, setUserName]= useState('');
    const [password, setPassword]= useState('');
    const [type, gettype]= useState('');
    
    
    return(
        <div>
            <center>  
            <h5>Welcome to user profile</h5>
            
                     

               <div className='container'>
                   <div className='row'>
                   
                           <div className='col-md-4'>
                               <div className='card'>
                               
                               <div className='card-body'>
                                   <h5 className='card-title'>{user.setEmail}</h5>
                                   <h5 className='card-title'>{user.setUserName}</h5>
                                   <h5 className='card-title'>{user.setPassword}</h5>
                                   
                       </div></div>
                       </div>
                   </div>
               </div> 
               
               <div className='spinner-border text-primary'>

               </div>
               
            </center>
            </div>
        

    )
}
export default UserProfile