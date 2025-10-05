"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Image from "next/image";
import React, { useEffect, useState } from 'react'

const SearchInput = () => {
    const pathName = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    const query = searchParams.get("topic") || ""
    const [searchQuery, setSearchQuery] = useState(query)

    useEffect(()=>{
        const delayDebounce = setTimeout(()=>{
            if(searchQuery.trim()){
                const params = new URLSearchParams(searchParams.toString())
                params.set('topic', searchQuery.trim())
                router.push(`${pathName}?${params.toString()}`)
            }
            else{
                const params = new URLSearchParams(searchParams.toString())
                params.delete('topic')
                const queryString = params.toString()
                router.push(`${pathName}${queryString ? `?${queryString}` : ''}`)
            }
        }, 500)
    }, [pathName, searchParams, router, searchQuery])


  return (
        <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
            <Image src="/icons/search.svg" alt="search" width={15} height={15} />
            <input
                placeholder="Search companions..."
                className="outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}

export default SearchInput