import { Link } from "react-router-dom"
import logo from "/logo.svg"
import Badge from "@mui/material/Badge"
import Heart from "../assets/heart.svg?react"
import Bag from "../assets/bag.svg?react"
import Glass from "../assets/glass.svg?react"
import Cancel from "../assets/cancel.svg?react"
import { useUserStore } from "../stores/userStore"
import { useFormState } from "../stores/userFormState"
import { useUserCart } from "../stores/userCart"
import { ChangeEvent, useState } from "react"
import { searchProdBySlug } from "../api/searchingProdBySlug"
import { Product } from "../stores/store"
function Header() {
    const fav = useUserStore()
    const formState = useFormState()
    const userCart = useUserCart()
    const [isLoading, setIsLoading] = useState(false)
    const [prodList, setProdList] = useState<Product[]>([])
    const [isSearching, setIsSearching] = useState(false)
    const [value, setValue] = useState("")
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa")

    function handleChanger(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)

        setIsLoading(true)
        searchProdBySlug(value)
            .then((res) => {
                return value.length !== 0 ? setProdList(res?.data) : setProdList([])
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div className="flex flex-row md:justify-between w-full md:items-center justify-between  md:flex-row  items-center">
            <div>
                <Link to={"/"}>
                    <img className="md:w-25  w-25 m-5" src={logo} alt="Stuff" />
                </Link>
            </div>
            {userCart.user.role === "unsigned" ? (
                <div onClick={formState.setIsOpen} className="flex gap-3 justify-center cursor-pointer items-center">
                    <h1>
                        You are not in accout!
                        <br /> <span className="underline">Click to Sign Up</span>
                    </h1>
                </div>
            ) : (
                <div onClick={formState.setIsOpen} className="flex gap-3 justify-center cursor-pointer items-center">
                    <img className="size-8 rounded-full " src={userCart.user.avatar} alt="" />
                    <h1>{userCart.user.name}</h1>
                </div>
            )}
            <div className="bg-main">
                <form
                    action=""
                    className={`bg-darker min-w-80 pl-3 flex flex-row  p-1 gap-2 items-center ${isSearching ? "rounded-t-xl" : "rounded-xl"}`}
                >
                    <div>
                        <Glass />
                    </div>
                    <div className="flex grow w-full justify-center align-middle outline-none items-center">
                        <input
                            placeholder="search..."
                            onFocus={() => setIsSearching(true)}
                            className="flex justify-center w-full align-middle outline-none items-center"
                            type="text"
                            onBlur={() => setTimeout(() => setIsSearching(false), 110)}
                            value={value}
                            onChange={handleChanger}
                        />
                        {isSearching && value.length !== 0 && (
                            <div
                                onClick={() => {
                                    setValue("")
                                    setIsSearching(false)
                                    setProdList([])
                                }}
                                className="cursor-pointer"
                            >
                                <Cancel />
                            </div>
                        )}
                    </div>
                </form>
                {isSearching && (
                    <div className="flex z-10 border-darker overflow-y-auto max-h-150 border-5 flex-col bg-main p-5 rounded-b-xl gap-3 absolute max-w-80">
                        {prodList.length !== 0 ? (
                            prodList.map((el) => {
                                return (
                                    <Link
                                        to={`/products/${el.id}`}
                                        className="hover:shadow-md  transition duration-150 shadow-green-800 outline-lime-500 rounded-xl max-w-70 flex items-center gap-5"
                                    >
                                        <img src={el.images[0]} className="rounded-xl max-w-1/2" alt="" />
                                        <div>
                                            <h1 className="">{el.title}</h1>
                                        </div>
                                    </Link>
                                )
                            })
                        ) : (
                            <div className="min-w-67 p-3">Nothing here(</div>
                        )}
                    </div>
                )}
            </div>
            <div className="flex gap-5">
                <div className="flex justify-center">
                    {userCart.isLogged && <Badge className="top-1 left-7" badgeContent={fav.favoriteProd.length} color="success" />}
                    <Heart />
                </div>
                <Bag />
            </div>
        </div>
    )
}

export default Header
