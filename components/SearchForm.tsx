'use client'

import Image from 'next/image'
import {useState} from 'react'
import { Input } from './ui/input'

const SearchForm = () => {
  const [search, setSearch] = useState('')
  return (
    <form>
        <label htmlFor="" className='flex-center relative w-full sm:-mt-10 sm:px-5'>
            <Image src="/magnifying-glass.svg" className="absolute left-8" width={32} height={32} alt="Search Icon" />

            
            <Input className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
            placeholder='Search for a course'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </label>
    </form>
  )
}

export default SearchForm