import Header from './Header'
import Main from './Main'

import styles from './musicListPage.module.scss'

const MusicListPage = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <Main />
    </div>
  )
}

export default MusicListPage
