import "./Card.scss"
import { useTrail, animated } from 'react-spring';
import {v4 as uuidv4} from "uuid"
import { Link } from "react-router-dom";


export default function Card({ title, body }) {

  const trail = useTrail( 1, {
    from: {
      opacity: 0,
      x: 50
    },
    to: {
      opacity: 1,
      x:0
    }
  })
  
  const slug = title.toLowerCase().replace(/\s+/g, '-').trim();

  return (
    <>
      {trail.map(cardStyle => {
        return <animated.div key={uuidv4()} style={cardStyle}>

          <div className="card">
            <h2>{title}</h2>
            <Link to={`/articles/${slug}`} 
                  state={{ title: title, body: body }} 
              >  

              Lien vers l'article
            </Link>
          </div>

        </animated.div>
      })}
    </>
  )
}
