"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { subjects } from '@/constants';

const SubjectFilters = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()
    const query = searchParams.get("subject") || "all"

    const [subject, setSubject] = useState(query)

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString())
        
        if (subject === "all") {
            params.delete('subject')
        } else {
            params.set('subject', subject)
        }
        const queryString = params.toString()
        router.push(`${pathname}${queryString ? `?${queryString}` : ''}`)
    }, [subject, pathname, searchParams, router])

  return (
        <Select onValueChange={setSubject} value={subject}>
            <SelectTrigger className="input capitalize">
                <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All subjects</SelectItem>
                {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject} className="capitalize">
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SubjectFilters   