import { Link, useNavigate, useParams } from "react-router-dom";

function UserForget() {
    return (
      
        <div>
            <center>
        <br></br>
            <div className="container">
        <h2>RESET PASSWORD</h2>
        <br></br>
        <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="uname"
                        placeholder="Enter Username"
                    />

                    <br/>
                    <input 
                        type="email" 
                        className="form-control col-4"
                        id="uname"
                        placeholder="Enter your email Id"
                    />
                </div>
            <br></br>

                <div >
                    <a href="/login" className="btn btn-primary">Login Now</a>
                </div>
                <br></br>

                



                

                <br></br>


                

                <br></br>
                
                <Link to="login/"> Go Back to Home and login</Link>
                
            </form>
            <h5> </h5>
    </div>
    </center>
 </div>
  );
}

export default UserForget