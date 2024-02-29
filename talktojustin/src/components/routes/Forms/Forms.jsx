import Login from "./Login";
import SignUp from "./Signup";

const Forms = ({type}) => {

    return ( 
        <div className="w-screen h-screen flex justify-center items-center px-10">
            {
                type === "login" ? <Login/> : null
            }
            {
                type === "signup" ? <SignUp/> : null
            }
        </div>
     );
}
 
export default Forms;