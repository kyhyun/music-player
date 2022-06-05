import { Routes, Route } from 'react-router-dom'
import MusicListPage from './MusicListPage'
import styles from './pages.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<MusicListPage />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
