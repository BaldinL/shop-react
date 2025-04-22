import { useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AppRoutes from "./components/routes/Routes"
import Sidebar from "./components/Sidebar"
import { useProdStore } from "./stores/store"
import Poster from "./components/Poster"
import Products from "./components/Products"
import { getProducts } from "./api/getProudcts"
import { LinearProgress } from "@mui/material"
import Categories from "./components/Categories"

function App() {
    const store = useProdStore()
    console.log(store)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getProducts()
                store.fetchProducts(res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [])
    return (
        <div className="bg-main h-full flex justify-center text-white">
            <div className="flex flex-col gap-5 w-4/5 items-center">
                <Header />
                <div className="flex gap-5 min-h-100 w-full">
                    <Sidebar />
                    <Poster />
                </div>
                {store.products.length !== 0 ? (
                    <Products amount={5} />
                ) : (
                    <div className="w-full">
                        <LinearProgress color="success" />
                    </div>
                )}
                <Categories />
                <Footer />
            </div>
            <AppRoutes />
        </div>
    )
}

export default App
