import { useProdStore } from "../../stores/store"
import Categories from "../Categories"
import Poster from "../Poster"
import Products from "../Products"
import { LinearProgress } from "@mui/material"

function Home() {
    const store = useProdStore()
    const products = store.products.filter((_, i) => i < 6).sort(() => Math.random() - 0.5)
    return (
        <>
            <Poster />
            {store.products.length !== 0 ? (
                <Products products={products} amount={5} title="Trending" />
            ) : (
                <div className="col-span-2 w-full">
                    <LinearProgress color="success" />
                </div>
            )}
            <Categories />
        </>
    )
}

export default Home
