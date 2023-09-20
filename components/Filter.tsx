'use client'

import {useState} from 'react'

const Filter = () => {

    const links = ['all', 'web', 'mobile', 'design', 'data science'];
    const [active,setActive] = useState<String>('');

    const handleFilter = (link: String) => {
        setActive(link);
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