import { useContext, } from "react"
import Card from "../../components/Card"
import { GlobalContext } from "../../contexts/GlobalContext"
import styles from './Home.module.css'

const Home = () => {
  const { posts } = useContext(GlobalContext)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Posts</h1>
      <section className={styles.cardList}>
        {
          posts.map((post)=>(
           <Card title={post.title} body={post.body} key={post.id} />
          ))
        }
      </section>
    </div>
  )
}

export default Home
