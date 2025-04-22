import { Link } from "react-router-dom"
import logo from "/logo.svg"
// import heart from "/heart.svg"
// import { ReactCom } from "../../assets/bag.svg"
// import { ReactInstance as } from "react"
import Heart from "../assets/heart.svg?react"
import Bag from "../assets/bag.svg?react"
import Glass from "../assets/glass.svg?react"
// import jack from "/jackdaniels.svg"
function Header() {
    return (
        <div className="flex flex-row md:justify-between w-full md:items-center justify-between  md:flex-row  items-center">
            <div>
                <Link to={"/"}>
                    <img className="md:w-25  w-25 m-5" src={logo} alt="Stuff" />
                </Link>
            </div>
            <div className="flex gap-3 justify-center items-center">
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
                <Heart />
                <Bag />
            </div>
        </div>
    )
}

export default Header
