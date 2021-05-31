import React from 'react'
import '../styles.css'

const Signup = () => {
    const SignupForm = () => {
        return (
            <div>
                <h2 className="text-center bg-success">Digital Health Card</h2>
                <div className="mt-5 container">
                    <h4 className="text-center">Signup Form</h4>
                    <button className="btn btn-primary">Submit</button>
                </div>


            </div>
        )
    }

    return (
        <div>
            {SignupForm()}
        </div>
    )
}

export default Signup
