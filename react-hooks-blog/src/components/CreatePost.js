import React from 'react'
import { useState } from 'react'
import { firestore } from '../firebase';
import {useFormInput} from './hooks';
import styled, {css} from 'styled-components';


const StyledButton = styled.button `
height: 33px;
background:${(props) => (props.primary ? 'green' : 'blue')};
border: 0;
color: #fff;
padding: 8px;
font-size: 15px;
border-radius: 3px;
cursor: pointer;

${(props) => props.primary && css `
border:2px solid ${props.bgColor};

`};

`;




const CreatePost = () => {
  const title=useFormInput('');
  const subTitle=useFormInput('');
  const content=useFormInput('');
   
const handleSubmit =(e) =>{
  e.preventDefault();
  console.log('title',title)
  console.log('subTitle',subTitle)
  console.log('content',content)

  firestore.collection('posts').add({
    title:title.value,
    content:content.value,
    subTitle:subTitle.value,
    createdAt:new Date(),
  })
}
  return (
    <div className='create-post'>
      <h1>Create Post</h1>
     <form onSubmit={handleSubmit}>
      <div className='form-field'>
        <label>Title</label>
        <input
        {...title}
        // value={title} 
        // onChange = {(e)=>setTitle(e.target.value)}
        />
        </div>

        <div className='form-field'>
        <label>Sub Title</label>
        <input 
        {...subTitle}
        // value={subTitle}
        // onChange ={(e) =>setSubTitle(e.target.value)}
        />
        </div>

        <div className='form-field'>
        <label>Content</label>
        <textarea
        {...content}
        // value={content}
        // onChange = {(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <StyledButton primary bgColor="red" >Create Post</StyledButton>
     </form>
    </div>
  )
}

export default CreatePost
