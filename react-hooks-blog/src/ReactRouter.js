import React from 'react'
// import{Routes, Route} from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Users from './components/Users'


const ReactRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Users/>}/>
      </Routes>
    </div>
  )
}

export default ReactRouter
