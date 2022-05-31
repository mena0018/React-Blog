import "./Card.scss"
import { useTrail, animated } from 'react-spring';
import {v4 as uuidv4} from "uuid"


export default function Card({ title }) {

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
  
  return (
    <>
      {trail.map(cardStyle => {
        return <animated.div key={uuidv4()} style={cardStyle}>

          <div className="card">
            <h2>{title}</h2>
            <a href="/"> Lien vers l'article</a>
          </div>

        </animated.div>
      })}
    </>
  )
}
