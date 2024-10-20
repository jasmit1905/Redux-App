import React from 'react'
import Form from './Components/Form';
import TableData from './Components/TableData'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Example from './Components/Example';




function App() {
  
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/table' element={<TableData/>}/>
        <Route path='/edit/:id' element={<Form/>}/>
        <Route path='/Example' element={<Example/>}/>

       </Routes>
       
       </BrowserRouter>
    </div>
  )
}

export default App
