import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import LoginWithGoogle from "../componenets/buttons/LoginWithGoogle"

export default function LoginPage() {
    return(
        <div>
            <div className=" p-4 max-w-xs mx-auto">
                <h1 className="text-4xl font-bold text-center mb-6">
               Sign In 
                </h1>
                <p className="text-center mb-5 text-gray-500">
                    Sign in to your account using one of the methods below
                </p>
                
<LoginWithGoogle />
            </div>
        </div>
    )
}