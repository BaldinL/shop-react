import React, { useState } from "react"
import { CreateUser, createUser } from "../api/createUser"
import { useUserCart } from "../stores/userCart"
function UserSignUpForm() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: ""
    })
    console.log(values)

    const userCart = useUserCart()
    async function signUpUser(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        // console.log(values)
        // createUser(values)

        try {
            const res = await createUser(values)
            userCart.signUpUser(res?.data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <form className=" min-w-70 flex justify-center flex-col p-5 items-center gap-3">
            <h1 className="font-bold text-2xl">Sign Up</h1>
            <input
                type="email"
                placeholder="Email"
                required
                name="email"
                onChange={handleChange}
                value={values.email}
                className="bg-main p-3 focus:outline-green-500 focus:outline-2  rounded-xl w-full "
            />
            <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={values.name}
                required
                className="bg-main p-3 focus:outline-green-500 focus:outline-2  rounded-xl w-full "
            />
            <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="Password..."
                value={values.password}
                required
                className="bg-main p-3 focus:outline-green-500 focus:outline-2  rounded-xl w-full "
            />
            <input
                type="text"
                // accept="image/png, image/jpeg"
                id="avatar"
                name="avatar"
                onChange={handleChange}
                placeholder="Avatar..."
                required
                className="bg-main p-3 focus:outline-green-500 focus:outline-2 rounded-xl w-full "
            />
            {/* <label htmlFor="avatar" className="bg-main p-3 focus:outline-green-500 focus:outline-2 text-text rounded-xl w-full ">
                put an image
            </label> */}
            <button
                type="submit"
                onClick={signUpUser}
                className="bg-green-500 rounded-xl p-3 font-extrabold text-black text-xl w-full cursor-pointer hover:bg-green-700 active:bg-green-950 transition"
            >
                Create an Account
            </button>
        </form>
    )
}

export default UserSignUpForm
