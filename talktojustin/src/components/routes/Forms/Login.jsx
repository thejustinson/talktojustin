import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = ({}) => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const errorRef = useRef(null)
    const [errors, setErrors] = useState([])


    const processForm = () => {
        let newErrors = [];
    
        if (username === '') {
            newErrors.push("Enter username to continue");
        }
    
        if (password === '') {
            newErrors.push("Enter password to continue");
        }
    
        setErrors(newErrors);
    
        if (newErrors.length > 0) {
            errorRef.current.classList.remove("hidden");
        } else {
            errorRef.current.classList.add("hidden");
        }
    }
    


    return ( 
        <div className="md:w-[400px] flex flex-col">
            <h1 className="text-light-textcolor py-4 text-2xl font-bold rounded-t-lg">Log In</h1>

            <div className="bg-light-backgroundoverlay px-4 py-4 rounded-b-lg flex gap-3 flex-col relative">
                
                <div ref={errorRef} className="text-red-500 text-sm hidden">
                    {
                        errors.map((error, key) => (
                            <div key={key}>
                                {error}
                            </div>
                        ))
                    }
                </div>

                <div>
                    <label htmlFor="username" className="text-sm font-semibold" >Username</label>
                    <input type="text" id="username" className="w-full outline-none border px-3 py-2 rounded-lg focus:border focus:border-blue-700 focus:bg-blue-50"
                    onChange={
                        (e)=>{
                            setUserName(e.target.value)
                        }
                    }
                    />
                </div>

                <div>
                    <label htmlFor="password" className="text-sm font-semibold">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="w-full outline-none border px-3 py-2 rounded-lg focus:border focus:border-blue-700 focus:bg-blue-50"
                        onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            }
                        }
                    />
                </div>

                <button className="bg-blue-700 text-white py-4 text-center rounded-lg active:scale-90 duration-200 text-lg" onClick={
                    ()=>{
                        processForm()
                    }
                }>
                    Login
                </button>

                <div className="text-sm font-semibold">
                    <p>
                        <Link to={'/forgot-password'} className="text-blue-700">
                            I can't remember my Password.
                        </Link>
                    </p>
                    <p>
                        I don't have an account. I should <Link to={'/signup'} className="text-blue-700">create one</Link>.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Login;