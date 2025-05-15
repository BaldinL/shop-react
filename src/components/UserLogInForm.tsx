import { ChangeEvent, Dispatch, FormEvent, useState } from "react"
import { logInUser } from "../api/logInUser"
import { useUserCart } from "../stores/userCart"
import toast from "react-hot-toast"

function UserLogInForm({ setShowForm }: { setShowForm: Dispatch<React.SetStateAction<"signup" | "login" | "inAccount">> }) {
    const [values, setValues] = useState({ email: "", password: "" })
    const User = useUserCart()
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    console.log(values)

    async function handleSubmit(e: FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        const myPromise = logInUser(values).then((res) => {
            if (res?.status !== 200) {
                throw new Error("Invalid email or password")
            }
        })
        try {
            toast.promise(
                myPromise,
                {
                    loading: "Loading",
                    success: "You are logged in!",
                    error: "Invalid email or password"
                },
                {
                    duration: 1000
                }
            )
            const res = await logInUser(values)
            User.signUpUser(res?.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form className=" min-w-70 flex justify-center flex-col p-5 items-center gap-3">
            <h1 className="font-bold text-2xl">Log in </h1>
            <input
                type="email"
                placeholder="your email"
                required
                name="email"
                onChange={handleChange}
                value={values.email}
                className="bg-main p-3 focus:outline-green-500 focus:outline-2  rounded-xl w-full "
            />
            <input
                type="password"
                placeholder="your password"
                required
                name="password"
                onChange={handleChange}
                value={values.password}
                className="bg-main p-3 focus:outline-green-500 focus:outline-2  rounded-xl w-full "
            />
            <button type="button" onClick={() => setShowForm("signup")} className="text-text underline text-base cursor-pointer hover:text-white">
                I don't have an account
            </button>
            <button
                onClick={handleSubmit}
                type="submit"
                className="bg-green-500 rounded-xl p-3 font-extrabold text-black text-xl w-full cursor-pointer hover:bg-green-700 active:bg-green-950 transition"
            >
                Log into Account
            </button>
        </form>
    )
}

export default UserLogInForm
