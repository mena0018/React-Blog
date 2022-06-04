import { useLocation } from 'react-router-dom'
import "./Article.scss"


export default function Article() {

  const location = useLocation();
  console.log(location)

  return (
    <div className='article-content'>
      <h2>
        Votre article : <span> {location.state.title} </span>
      </h2> 

    
      <p>{location.state.body}</p>
    </div>
  )
}
