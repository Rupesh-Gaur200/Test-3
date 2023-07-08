
import Product from "./Product";
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";



function Card({value}){

    
   
   return (
     
    <div  className= "flex justify-content:center gap-x-3  border-2 border-black">
   { value.map((data)=>{
        return( 
   

    <Product
      key={uuidv4()}
    id={data.id}
    price={data.price}
    image={data.Image}
    title={data.title}
    
    ></Product>)
    }
   )
}
   </div>
  
   )
}

export default Card;