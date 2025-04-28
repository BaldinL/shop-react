import { create } from "zustand"
type UserFormState = {
    isOpen: boolean
    setIsOpen: () => void
}

export const useFormState = create<UserFormState>()((set, get) => ({
    isOpen: false,
    setIsOpen: () => {
        const state = get().isOpen
        console.log(state)
        set({
            isOpen: !state
        })
    }
}))
