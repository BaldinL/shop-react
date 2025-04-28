import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
type userStore = {
    favoriteProd: number[]
    isFavorite: (id: number) => boolean
    addFavoriteProd: (id: number) => void
    removeFavoriteProd: (id: number) => void
}
export const useUserStore = create<userStore>()(
    devtools(
        persist(
            (set, get) => ({
                favoriteProd: [],
                isFavorite: (id) => {
                    return get().favoriteProd.includes(id)
                },
                addFavoriteProd: (id) =>
                    set((state) => {
                        const newSet = new Set(state.favoriteProd)
                        newSet.add(id)
                        return { favoriteProd: [...newSet] }
                    }),
                removeFavoriteProd: (id) =>
                    set((state) => {
                        const newSet = new Set(state.favoriteProd)
                        newSet.delete(id)
                        return { favoriteProd: [...newSet] }
                    })
            }),
            {
                name: "sdflkj"
            }
        )
    )
)
