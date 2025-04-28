import { Drawer } from "@mui/material"
import UserSignUpForm from "./UserSignUpForm"
import Cross from "../assets/cross.svg?react"
import { useFormState } from "../stores/userFormState"
function UserForm() {
    const formState = useFormState()
    return (
        <>
            <Drawer variant="temporary" open={formState?.isOpen} anchor="right" className="z-10">
                <div className="cursor-pointer self-end m-2 " onClick={formState.setIsOpen}>
                    <Cross />
                </div>
                <UserSignUpForm />
            </Drawer>
        </>
    )
}

export default UserForm
