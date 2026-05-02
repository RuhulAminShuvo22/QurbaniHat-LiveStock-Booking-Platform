// import { createAuthClient } from "better-auth/react"
// export const authClient = createAuthClient({
//     /** The base URL of the server (optional if you're using the same domain) */
//     baseURL: "http://localhost:3000"  // ei link change hobe jokhon finally submit korbo
// })

// export const { signIn, signUp, useSession } = createAuthClient()

import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    /** 
     * baseURL: প্রোডাকশনে আপনার ভার্সেল লিঙ্ক কাজ করবে 
     * এবং লোকালে ৩০০০ পোর্ট কাজ করবে।
     */
    baseURL: process.env.NODE_ENV === "production" 
        ? "https://qurbani-hat-live-stock-booking-plat.vercel.app" 
        : "http://localhost:3000"
})

export const { signIn, signUp, useSession } = createAuthClient()
