import { useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AppRoutes from "./components/routes/Routes"
import Sidebar from "./components/Sidebar"
import { useProdStore } from "./stores/store"
import { getProducts } from "./api/getProudcts"
import UserForm from "./components/UserForm"
import { theme } from "./utils/theme"
import { ThemeProvider } from "@mui/material"

function App() {
    const store = useProdStore()
    // const [openUserForm, setOpenUserForm] = useState(false)
    useEffect(() => {
        console.log("dfsdj")

        const fetchProducts = async () => {
            try {
                const res = await getProducts()
                store.fetchProducts(res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <ThemeProvider theme={theme}>
            <div className="bg-main z-0 min-h-screen flex justify-center text-white">
                <div className="flex flex-col gap-5 w-4/5 min-h-screen justify-between ">
                    <Header />
                    <div className="grid grid-cols-[auto_1fr] grow gap-5 min-h-100 w-full">
                        <Sidebar />
                        <AppRoutes />
                    </div>
                    <Footer />
                </div>
                <UserForm />
            </div>
        </ThemeProvider>
    )
}

export default App
