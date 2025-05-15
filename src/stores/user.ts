// import { create } from "zustand"
// import { persist } from "zustand/middleware"

export type User = {
    email: string
    password: string
    name: string
    role: "customer" | "admin" | "unsigned"
    id: string
    avatar: string
}
