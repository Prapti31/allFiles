import '../Main.css'

function Mainpage(){
    return (
        <div className="container-fluid">

            <center>
                <br/>
            <p><h1>Welcome to JobSpace</h1></p>
            
            <br/>
                
            <div className="container1">
                <br/>
                <br/>
                
                <a href="/login" button type="button" className="btn btn-success">Login</a>
                <br/>
                <br/>
                
                <a href="/register" button type="button" className="btn btn-success">Register</a>
                
            </div>
            <br/>
            <br/>
            <div>
            <footer>
                <p><h5>Copyrights reversed to Hands Company and Co. <sup>&copy;</sup> </h5></p>
            </footer>
            </div>
            </center>
        </div>
    )
}
export default Mainpage;