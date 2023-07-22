
import data from '../components/product.json'
import React from 'react'

const Menu=() => {

  
    // console.log(data);
    return (
        <>     
       <h3>Menu Page</h3>
       {data.map((i, index)=> {
        <div key={index}>{i.name}</div>
    })}
       </>
       )
}
export default Menu