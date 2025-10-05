"use server"

import { auth } from "@clerk/nextjs/server"
import { createSupaBaseClient } from "../supabaseClient"



export const addCompanion = async(formData:CreateCompanion )=>{
    const {userId: author} = await auth()
    const supabase = await createSupaBaseClient()

    const {data, error} = await supabase.from("companions").insert({...formData, author}).select()

    if(error || !data){
        throw new Error(error?.message || "Failed to create a companion")
    }

    return data[0]
}