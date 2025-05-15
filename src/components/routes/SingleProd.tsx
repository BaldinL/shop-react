import { Link, useParams } from "react-router-dom"
import { useProdStore } from "../../stores/store"
import ProdSkeleton from "../../utils/ProdSkeleton"
import { useUserStore } from "../../stores/userStore"
import { useMemo, useState } from "react"
import CartDialog from "../../utils/CartDialog"
import toast, { Toaster } from "react-hot-toast"
import Products from "../Products"
import { useUserCart } from "../../stores/userCart"
import { useFormState } from "../../stores/userFormState"

function SingleProd() {
    const { id } = useParams()
    const store = useProdStore()
    const cart = useUserCart()
    const formState = useFormState()
    const userStore = useUserStore()
    const prod = store.products.find((el) => el.id === Number(id))
    const products = useMemo(() => {
        return store.products.filter((el) => el.category.id === prod?.category.id && el.id !== prod.id).sort(() => Math.random() - 0.5)
    }, [prod, store.products])

    const [photo, setPhoto] = useState(0)
    const [open, setOpen] = useState(false)
    function handleAddToFav() {
        if (cart.isLogged) {
            toast.success("Product's been added to favorite!", {
                duration: 1500,
                position: "top-right",
                className: "text-base font-bold"
            })
            userStore.addFavoriteProd(Number(id))
        } else {
            setTimeout(() => {
                toast.error("You are not into account. Please log in or sign up", {
                    duration: 1500,
                    position: "top-center"
                })
            }, 200)
            return formState.setIsOpen()
        }
    }
    function handleRemoveFromFav(): void {
        toast.error("Product's been removed from favorite.", {
            duration: 1500,
            position: "top-right",
            className: "text-base font-bold"
        })
        userStore.removeFavoriteProd(Number(id))
    }
    function handleAddToCart() {
        if (cart.isLogged) {
            return setOpen((prev) => !prev)
        } else {
            setTimeout(() => {
                toast.error("You are not into account. Please log in or sign up", {
                    duration: 1500,
                    position: "top-center"
                })
            }, 200)
            return formState.setIsOpen()
        }
    }
    return (
        <>
            {store.products.length !== 0 ? (
                <div className="bg-darker container flex w-full h-full rounded-xl gap-5 p-5">
                    {prod?.images.length !== 0 ? <img src={prod?.images[photo]} className="size-100 rounded-xl" alt="" /> : <h1>No photos</h1>}
                    <div className="w-full flex gap-5 h-full">
                        <div className="flex flex-col flex-1/3 gap-5">
                            {prod?.images.map((el, index) => {
                                return (
                                    <img
                                        key={el}
                                        onClick={() => setPhoto(index)}
                                        className="hover:opacity-60 cursor-pointer rounded-xl size-30 active:opacity-40"
                                        src={el}
                                        alt=""
                                    />
                                )
                            })}
                        </div>
                        <div className="flex flex-col flex-2/3 justify-around gap-3">
                            <div className="flex flex-col gap-3 flex-1/3">
                                <h1 className="font-extrabold text-xl">{prod?.title}</h1>
                                <h1 className="font-extrabold text-xl text-green-500">{prod?.price}$</h1>
                            </div>
                            <div className="flex-2/3 flex flex-col justify-between">
                                <p className="text-text font-bold">{prod?.description}</p>
                                <div className="flex gap-10">
                                    <div>
                                        <Toaster />
                                        <button
                                            onClick={handleAddToCart}
                                            className="bg-green-500 rounded-xl p-3 font-extrabold text-xl text-darker cursor-pointer hover:opacity-60 active:opacity-40 transition active:transition-none"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                    {!userStore.isFavorite(Number(id)) ? (
                                        <div className="max-h-1">
                                            <Toaster />
                                            <button
                                                onClick={handleAddToFav}
                                                className="bg-main p-3 rounded-xl text-white font-bold text-xl cursor-pointer hover:opacity-60 active:opacity-40 transition active:transition-none"
                                            >
                                                Add to Favorite
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="max-h-1">
                                            <Toaster />
                                            <button
                                                onClick={handleRemoveFromFav}
                                                className="bg-green-500 rounded-xl p-3 font-bold text-base text-darker cursor-pointer hover:opacity-60 active:opacity-40 transition active:transition-none"
                                            >
                                                Remove from favorite
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <Link className="underline opacity-80 self-end" to="/">
                                to homepage
                            </Link>
                        </div>
                    </div>
                    {prod && <CartDialog prod={prod} open={open} setOpen={setOpen} />}
                </div>
            ) : (
                <div className="w-full">
                    <ProdSkeleton />
                </div>
            )}
            {/* <RelatedProd /> */}
            <Products products={products} amount={5} title="Related" />
        </>
    )
}

export default SingleProd
