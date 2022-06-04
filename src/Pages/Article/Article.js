import { useLocation } from 'react-router-dom'
import "./Article.scss"


export default function Article() {

  const location = useLocation();

  return (
    <div className='article-content'>
      <h2>
        Votre article : <span> {location.state.title} </span>
      </h2> 

      <p>{location.state.body}</p>
    </div>
  )
}
