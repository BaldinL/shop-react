import { Link } from "react-router-dom"
import logo from "/logo.svg"
import Badge from "@mui/material/Badge"
import Heart from "../assets/heart.svg?react"
import Bag from "../assets/bag.svg?react"
import Glass from "../assets/glass.svg?react"
import { useUserStore } from "../stores/userStore"
import { useFormState } from "../stores/userFormState"
// import jack from "/jackdaniels.svg"
function Header() {
    const fav = useUserStore()
    const formState = useFormState()

    return (
        <div className="flex flex-row md:justify-between w-full md:items-center justify-between  md:flex-row  items-center">
            <div>
                <Link to={"/"}>
                    <img className="md:w-25  w-25 m-5" src={logo} alt="Stuff" />
                </Link>
            </div>
            <div onClick={formState.setIsOpen} className="flex gap-3 justify-center cursor-pointer items-center">
                <div className="bg-[url('/facebook.svg')] bg-cover bg-center rounded-b-full size-8 md:size-10" />
                <h1>username</h1>
            </div>
            <form action="" className="bg-darker pl-3 flex flex-row p-1 gap-2 items-center rounded-xl">
                <Glass />
                <input
                    placeholder="search..."
                    className="flex justify-center align-middle outline-none text-text items-center"
                    type="text"
                    name=""
                    id=""
                />
            </form>
            <div className="flex gap-5">
                <div className="flex justify-center">
                    <Badge className="top-1 left-7" badgeContent={fav.favoriteProd.length} color="success" />
                    <Heart />
                </div>
                <Bag />
            </div>
        </div>
    )
}

export default Header
