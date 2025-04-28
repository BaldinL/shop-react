import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import SingleProd from "./SingleProd"
// const SingleProd = lazy(() => import("./SingleProd"))

function AppRoutes() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route
                path="/products/:id"
                element={
                    // <Suspense>
                    <SingleProd />
                }
            />
        </Routes>
    )
}

export default AppRoutes
