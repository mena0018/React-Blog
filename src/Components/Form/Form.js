import React from 'react'
import "./Form.scss"
import { useState } from 'react';
import { useDispatch } from 'react-redux';


export default function Form() {

  const [article, setArticle] = useState({
    title: "",
    body: ""
  })

  const dispatch = useDispatch();

  const handleForm = e => {
    e.preventDefault();

    dispatch({
      type: 'ADDARTICLE',
      payload: article
    })

    setArticle({
      title: "",
      body: ""
    })
  }

  
  const handleInput = (type, e) => {
    if (type === "title"){
      const newObj = { ...article, title: e.target.value }
      setArticle(newObj)
    } 
    else if (type === "body"){
      const newObj = {  ...article, body: e.target.value }
      setArticle(newObj)
    }
  }
  
  
  return (
    <form onSubmit={handleForm}>
        <h1 className='add-article-title'>Écrivez un article</h1>

        <label htmlFor="title">Titre</label>
        <input type="text" 
               id="title" 
               placeholder='Entrez votre nom' 
               className='input-txt'
               onChange={(e) => handleInput("title", e)}
               value={article.title}
        />

        <label htmlFor="article">Votre article</label>
        <textarea id="article" 
                  placeholder='Votre article'
                  onChange={(e) => handleInput("body", e)}
                  value={article.body}
        ></textarea> 

        <button className='submit-btn'>Envoyez l'article</button>  
    </form>
  )
}
 