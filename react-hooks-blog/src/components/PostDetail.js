import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
//  import Radium from 'radium'


const PostDetail = () => {
  const[post, setPost]=useState({});
  const {postId}=useParams();

useEffect (() =>{
firestore
.collection('posts')
.doc(postId).get()
.then((snapshot) => {
  console.log('snapshot', snapshot.data());
  setPost(snapshot.data())
})
},[])

  return (
    <div className='post-detail'>
      <h1>{post.title}</h1>
      <h1>{post.content}</h1>
    </div>
  )
}

export default PostDetail

// const styles= {
//  heading:{
//  textAlign: 'center',

//  ':hover': {
//   color: 'red'
//  },
//   },
// }