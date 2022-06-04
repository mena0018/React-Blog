import "./Home.scss"
import Card from "../Card/Card"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getArticles } from "../../redux/articles/articleReducer";
import {v4 as uuidv4} from "uuid"


export default function Home() {

  const { articles } = useSelector(state => ({
    ...state.articleReducer
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    if (articles.length === 0 ) {
      dispatch(getArticles())
    }
  }, [])


  return (
    <>
      <h1 className="home-title">Tous les articles</h1>

      <div className="container-cards">
        {articles.map(item => {
          return <Card title={item.title} body={item.body} key={uuidv4()} />
        })}
      </div>
    </>
  )
}
