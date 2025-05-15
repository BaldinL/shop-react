import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import SingleProd from "./SingleProd"
import NoPage from "./NoPage"
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
            <Route path="*" element={<NoPage />} />
        </Routes>
    )
}

export default AppRoutes
