import { Link } from "react-router-dom"
import { useProdStore } from "../stores/store"

function Categories() {
    const store = useProdStore()
    return (
        <div className="bg-darker col-span-2 flex flex-col items-center font-extrabold text-3xl gap-5 p-5 rounded-xl w-full">
            <h1>Categories</h1>
            <div className="flex flex-wrap gap-3 justify-center">
                {store.categories.map(({ id, image, name }) => {
                    return (
                        <Link key={id} className="flex gap-3 w-45" to={`/categories/${id}`}>
                            <div className="flex flex-col justify-between items-center gap-3">
                                <img src={image} className="hover:opacity-60 transition rounded-xl" alt="" />
                                <h1 className="flex text-base font-extrabold">{name}</h1>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories
