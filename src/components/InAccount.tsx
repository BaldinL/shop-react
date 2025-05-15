import { useUserCart } from "../stores/userCart"
import Change from "../assets/change.svg?react"
import { useEffect, useRef, useState } from "react"
import Check from "../assets/check.svg?react"
import { updateUser } from "../api/updateUser"
import toast from "react-hot-toast"
function InAccount() {
    const { user, logOut, signUpUser } = useUserCart()
    const [isChanging, setIsChanging] = useState(false)
    const [value, setValue] = useState(user.name)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const myPromise = updateUser(user.id, { email: user.email, name: value }).then((res) => {
            if (res?.status !== 200) {
                throw new Error()
            } else {
                return res
            }
        })
        try {
            toast.promise(myPromise, {
                success: "Changed successful!",
                loading: "Proceeding...",
                error: "Something gone wrong("
            })
            const res = await updateUser(user.id, { email: user.email, name: value })
            signUpUser(res?.data)
            console.log(res?.status)

            setIsChanging((prev) => !prev)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        inputRef.current?.focus()
    }, [isChanging])
    return (
        <div className="bg-main container p-3  flex flex-col max-w-ful items-center w-full gap-5 rounded-xl">
            {!isChanging ? (
                <div className="flex self-start gap-10 items-center">
                    <img src={user.avatar} className="rounded-2xl size-30" alt="" />
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <div onClick={() => setIsChanging((prev) => !prev)} className="self-start cursor-pointer hover:opacity-55 transition">
                        <Change />
                    </div>
                </div>
            ) : (
                <form className="flex self-start gap-10 items-center" onSubmit={handleSubmit}>
                    <img src={user.avatar} className="rounded-2xl size-30" alt="" />
                    <div className="bg-darker flex cursor-pointer rounded-xl p-3 ">
                        <input
                            onChange={handleChanger}
                            type="text"
                            required
                            ref={inputRef}
                            value={value}
                            className="   text-2xl font-bold transition outline-none"
                        />
                        <button
                            type="submit"
                            formAction="submit"
                            className="self-center w-fit cursor-pointer hover:opacity-50 active:opacity-20 transition"
                        >
                            <Check />
                        </button>
                    </div>
                    <div onClick={() => setIsChanging((prev) => !prev)} className="self-start cursor-pointer hover:opacity-55 transition">
                        <Change />
                    </div>
                </form>
            )}
            <div className="flex flex-col justify-center w-4/5 items-center gap-3">
                <button className="bg-green-500 w-full p-3 rounded-xl text-xl text-main font-bold cursor-pointer hover:bg-green-800 active:bg-green-950 transition">
                    Cart
                </button>
                <button className="bg-green-500 w-full p-3 rounded-xl text-xl text-main font-bold cursor-pointer hover:bg-green-800 active:bg-green-950 transition">
                    Favorite products
                </button>
                <button
                    className="bg-green-900 mt-5  text-darker p-3 w-full rounded-xl text-xl  font-bold cursor-pointer hover:bg-green-800 active:bg-green-950 transition"
                    onClick={logOut}
                >
                    Log out
                </button>
            </div>
        </div>
    )
}

export default InAccount
