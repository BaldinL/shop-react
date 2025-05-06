import React, { Dispatch, useState } from "react"
import { createUser } from "../api/createUser"
import { useUserCart } from "../stores/userCart"
import toast from "react-hot-toast"
function UserSignUpForm({ setShowForm }: { setShowForm: Dispatch<React.SetStateAction<"signup" | "login" | "inAccount">> }) {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: ""
    })
    const userCart = useUserCart()
    async function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        const myPromise = createUser(values).then((res) => {
            if (res?.status !== 201) {
                throw new Error()
            }
        })
        try {
            toast.promise(
                myPromise,
                {
                    loading: "Loading",
                    success: "You are logged in!",
                    error: "Ivalid data"
                },
                {
                    duration: 1000
                }
            )
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
                id="avatar"
                name="avatar"
                onChange={handleChange}
                placeholder="Avatar..."
                required
                className="bg-main p-3 focus:outline-green-500 focus:outline-2 rounded-xl w-full "
            />
            <button type="button" onClick={() => setShowForm("login")} className="text-text underline text-base cursor-pointer hover:text-white">
                I already have an account
            </button>
            <button
                type="submit"
                onClick={handleSubmit}
                className="bg-green-500 rounded-xl p-3 font-extrabold text-black text-xl w-full cursor-pointer hover:bg-green-700 active:bg-green-950 transition"
            >
                Create an Account
            </button>
        </form>
    )
}

export default UserSignUpForm
