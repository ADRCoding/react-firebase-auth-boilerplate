import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/authContext'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'

const Register = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <div className="bg">
                <div className="login">
                    <div className="loginTxt">
                        Create a New Account
                    </div>
                    <form onSubmit={onSubmit} className="space-y-4">
                        {/* Email input */}
                        <div className="inputContainer">
                            <label className="text-sm text-gray-600 font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete="email"
                                required
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                className="inputField"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password input */}
                        <div className="inputContainer">
                            <label className="text-sm text-gray-600 font-bold">
                                Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete="new-password"
                                required
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                className="inputField"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Confirm Password input */}
                        <div className="inputContainer">
                            <label className="text-sm text-gray-600 font-bold">
                                Confirm Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete="off"
                                required
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="inputField"
                                placeholder="Confirm your password"
                            />
                        </div>

                        {/* Error message */}
                        {errorMessage && (
                            <span className="text-red-600 font-bold">{errorMessage}</span>
                        )}

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            disabled={isRegistering}
                            className={`loginBtn ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : ''}`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>

                        {/* Login Link */}
                        <div className="signup">
                            Already have an account? <Link to={'/login'} className="font-bold hover:underline">Continue</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
