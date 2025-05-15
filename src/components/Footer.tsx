import logo from "/logo.svg"
import Inst from "../assets/inst.svg?react"
import Youtube from "../assets/youtube.svg?react"
import Facebook from "../assets/faceb.svg?react"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <section className="bg-darker w-full rounded-2xl  p-3 flex items-center justify-between">
            <Link to="/">
                <img src={logo} className="w-25 m-5" alt="Logo" />
            </Link>

            <p className="opacity-60 text-md">
                Created by <span className="font-bold">ME!</span>
            </p>
            <div className="flex justify-between gap-3">
                <a href="">
                    <Inst />
                </a>
                <Youtube />
                <Facebook />
            </div>
        </section>
    )
}

export default Footer
