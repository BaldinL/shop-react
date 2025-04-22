import Skeleton from "@mui/material/Skeleton"
import { useProdStore } from "../stores/store"
import { NavLink } from "react-router-dom"
import { useEffect } from "react"
import { getCategories } from "../api/getCategories"
function Sidebar() {
    const store = useProdStore()
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await getCategories()
                store.fetchCategories(res)
                console.log(store)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCategories()
    }, [])
    return (
        <div className="bg-darker rounded-xl h-full min-w-60 self-center p-5">
            <div className="flex flex-col gap-5">
                <h1 className="font-bold font-sans text-xl">CATEGORIES</h1>
                <nav>
                    <ul>
                        {store.categories.length !== 0 ? (
                            store.categories.map(({ id, name }) => {
                                return (
                                    <li
                                        key={id}
                                        className="text-text font-bold hover:text-gray-300 transition shadow-green-400 duration-75 active:scale-98  "
                                    >
                                        <NavLink
                                            className={({ isActive }) => (isActive ? "text-green-500 transition " : "")}
                                            to={`/categories/${id}`}
                                        >
                                            {name}
                                        </NavLink>
                                    </li>
                                )
                            })
                        ) : (
                            <div className="flex flex-col gap-2">
                                {[...Array(5)].map(() => {
                                    return (
                                        <li>
                                            <Skeleton />
                                        </li>
                                    )
                                })}
                            </div>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
