'use client'

import { formUrlQuery } from '@/sanity/utils';
import {useState} from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const links = ['all', 'mobile', 'Backend', 'Frontend', 'Fullstack'];
    const [active,setActive] = useState<String>('');

    const handleFilter = (link: String) => {
        let newUrl = '';
        console.log("this search : " +searchParams.toString());
        if(active === link){
         
            setActive('');
            newUrl = formUrlQuery({
              params : searchParams.toString(),
              keysToRemove : ['category']
            });

            // return;
        }else{
          setActive(link);
          
          newUrl = formUrlQuery({
            params : searchParams.toString(),
            key : 'category',
            value : link.toLocaleLowerCase()
          })
        }
        console.log(newUrl);
        router.push(newUrl, {scroll : false})
    }

  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
        {links.map((link, index) => (
            <button 
            key={link} 
            className={`${active === link ? "gradient_blue-purple" : ""} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
            onClick={() => handleFilter(link)}
            >{link}</button>
        ))}
    </ul>
  )
}

export default Filter