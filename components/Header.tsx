import React from 'react'


interface Props {
  query : string | undefined,
  category : string | undefined
}
const Header = ({query, category} : Props) => {
  
  if(query && category){
    return (
     <h1 className="heading3 self-start text-white-800">
      Search Result for {query} in {category}
     </h1> 
    )
  }
  if(query){
    return (
     <h1 className="heading3 self-start text-white-800">
      Search Result for {query}
     </h1> 
    )
  }
  if(category){
    return (
     <h1 className="heading3 self-start text-white-800">
      Search Result in {category}
     </h1> 
    )
  }

 // return (<h1 className="heading3 self-start text-white-800">No Result</h1>)
  
}

export default Header