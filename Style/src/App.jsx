import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { v4 as uuidv4 } from 'uuid';
import Card from './Card'
import styled from "styled-components";


function App() {
 
   const data =[
    
    {
      id:1,
      Image:"https://media.istockphoto.com/id/1420486889/photo/candid-portrait-of-young-middle-eastern-digital-native.webp?b=1&s=170667a&w=0&k=20&c=XZ57XDmNuS_eOtXdKpEFeMmen4hIKoHGeZ89B4HHOYY=",

       title:"Product1",
       
       price:"100"

    }

    ,
    {
      id:2,
      Image:"https://media.istockphoto.com/id/1420486889/photo/candid-portrait-of-young-middle-eastern-digital-native.webp?b=1&s=170667a&w=0&k=20&c=XZ57XDmNuS_eOtXdKpEFeMmen4hIKoHGeZ89B4HHOYY=",

       title:"Product1",
       
       price:"100"

    },
    {
      id:3,
      Image:"https://media.istockphoto.com/id/1420486889/photo/candid-portrait-of-young-middle-eastern-digital-native.webp?b=1&s=170667a&w=0&k=20&c=XZ57XDmNuS_eOtXdKpEFeMmen4hIKoHGeZ89B4HHOYY=",

       title:"Product1",
       
       price:"100"

    },
    {
      id:4,
      Image:"https://media.istockphoto.com/id/1420486889/photo/candid-portrait-of-young-middle-eastern-digital-native.webp?b=1&s=170667a&w=0&k=20&c=XZ57XDmNuS_eOtXdKpEFeMmen4hIKoHGeZ89B4HHOYY=",

       title:"Product1",
       
       price:"100"

    }

   ]

  return (
    <div>
      
      <Card key={uuidv4()} value={data}></Card>
      

  
  </div>
  )
}

export default App
