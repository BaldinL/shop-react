import { Link } from "react-router-dom"
import { useProdStore } from "../stores/store"

function Products({ amount }: { amount: number }) {
    const store = useProdStore()
    const prod = store.products.filter((_, i) => i <= amount)
    return (
        <section className="bg-darker p-5 rounded-xl w-full flex gap-5 justify-center flex-col items-center">
            <h1 className="text-3xl font-bold">Trending</h1>
            <div className="flex gap-3 h-full flex-wrap">
                {prod.map(({ id, title, slug, price, description, category, images }) => {
                    return (
                        <Link key={id} className="flex gap-0 flex-col max-w-45 justify-center items-center" to={`products/${id}`}>
                            <img className="rounded-t-xl hover:opacity-60 transition" src={images[0]} alt="" />
                            <div className="bg-main flex flex-col w-full justify-between rounded-b-xl h-full p-3">
                                <div>
                                    <h1 className="text-white font-extrabold">{title}</h1>
                                    <div className="text-text font-bold">{category.name}</div>
                                </div>
                                <div className="flex ">
                                    <div className="text-green-500 font-extrabold flex-1/3">{Math.floor(price * 0.8)}$</div>
                                    <div className="text-text text-sm line-through flex-2/3">{price}$</div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Products
