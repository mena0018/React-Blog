import "./Home.scss"
import Card from "../Card/Card"


export default function Home() {
  return (
    <>
      <h1 className="home-title">Tous les articles</h1>

      <div className="container-cards">
        <Card> 
          <h2>Hello Card</h2>
        </Card>
      </div>
    </>
  )
}
