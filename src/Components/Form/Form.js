import React from 'react'
import "./Form.scss"


export default function Form() {
  return (
    <form>
        <h1 className='add-article-title'>Écrivez un article</h1>

        <label htmlFor="title">Titre</label>
        <input type="text" id="title" placeholder='Entrez votre nom' className='input-txt'/>

        <label htmlFor="article">Votre article</label>
        <textarea id="article" placeholder='Votre article'></textarea> 

        <button className='submit-btn'>Envoyez l'article</button>  
    </form>
  )
}
 