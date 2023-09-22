'use client'

import Image from 'next/image'
import {useState, useEffect} from 'react'
import { Input } from './ui/input'
import { formUrlQuery } from '@/sanity/utils'
import { useSearchParams, useRouter } from 'next/navigation'
const SearchForm = () => {
  const [search, setSearch] = useState('')

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if(search){
        newUrl = formUrlQuery({
          key : 'query',
          value : search,
          params : searchParams.toString()
        })
      }else{
        newUrl = formUrlQuery({
          keysToRemove: ['query'],
          params : searchParams.toString()
        })
      }
      router.push(newUrl, {scroll : false})
    }, 1000)
  
    return () => {
      clearTimeout(delayDebounceFn)
    }
  }, [search])
  
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