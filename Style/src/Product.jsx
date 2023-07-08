
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
function Product({id, price, title, image}){

   
    return(
        <>
        <div  className='flex  items-center flex-col gap-5 '>
          <div className="">
           <img src={image}></img>
           <h1>{title}</h1>
            </div>

           <div className=""  >
            <p>{price}</p>
            </div>
        </div>
        </>
    
)}
export default Product