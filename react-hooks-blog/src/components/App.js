import React from 'react'

import {Routes, Route} from 'react-router-dom'
// import { Navabar,Home,CreatePost,PostDetails} from './'
import CreatePost from './CreatePost'
import Home from './Home'
import PostDetail from './PostDetail'
import Navbar from './Navbar'

const App = () => {
  return (
    <div className="container">
      <Navbar />
        <Routes>
       <Route path="/" element={<Home/>}/>
<Route exact path="/post/:postId" element={<PostDetail/>}/>
<Route exact path="/create-post" element={<CreatePost/>}/>
     </Routes> 
  </div>
  )
}

export default App






// function App() {
//   return (
//     <div className="container">
  
//    
      
//     </div>
//   )
// }
  
// export default App;
