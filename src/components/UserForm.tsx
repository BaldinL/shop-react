import { Drawer } from "@mui/material"
import UserSignUpForm from "./UserSignUpForm"
import Cross from "../assets/cross.svg?react"
import { useFormState } from "../stores/userFormState"
import { useState } from "react"
import UserLogInForm from "./UserLogInForm"
import { useUserCart } from "../stores/userCart"
import InAccount from "./InAccount"
import { Toaster } from "react-hot-toast"
function UserForm() {
    const { user } = useUserCart()
    const formState = useFormState()
    const [showForm, setShowForm] = useState<"signup" | "login" | "inAccount">("signup")
    return (
        <>
            <Drawer variant="temporary" open={formState?.isOpen} anchor="right" className="">
                <div className="p-5">
                    <div className="cursor-pointer self-end  min-w-100 " onClick={formState.setIsOpen}>
                        <Cross />
                    </div>
                    {showForm === "signup" && user.role === "unsigned" ? (
                        <UserSignUpForm setShowForm={setShowForm} />
                    ) : showForm === "login" && user.role === "unsigned" ? (
                        <UserLogInForm setShowForm={setShowForm} />
                    ) : (
                        <InAccount />
                    )}
                    <Toaster />
                </div>
            </Drawer>
        </>
    )
}

export default UserForm
