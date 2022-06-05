import PlayList from './PlayList/index'
import Visualization from './Visualization/index'

import styles from './main.module.scss'

const Main = () => {
  return (
    <main className={styles.wrap}>
      <Visualization />
      <PlayList />
    </main>
  )
}

export default Main
