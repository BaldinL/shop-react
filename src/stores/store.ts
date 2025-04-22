import { create } from "zustand"
import { devtools } from "zustand/middleware"
type Category = {
    id: number
    name: string
    image: string
    slug: string
}
type Product = {
    id: number
    title: string
    slug: string
    price: number
    description: string
    category: Category
    images: string[]
}
type ProductStore = {
    products: Product[]
    categories: Category[]
    fetchProducts: (data: Product[]) => void
    fetchCategories: (data: Category[]) => void
}

export const useProdStore = create<ProductStore>()(
    devtools((set) => ({
        products: [],
        categories: [],
        fetchProducts: (data) => {
            set({ products: data })
        },
        fetchCategories: (data) => {
            set({ categories: data })
        }
    }))
)
