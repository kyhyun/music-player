import { HeadPhoneIcon } from 'assets/svgs'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.wrap}>
      <section className={styles.contents}>
        <div className={styles.title}>
          <h1>Play List</h1>
          <HeadPhoneIcon />
        </div>
        <button type='button'>Library</button>
      </section>
    </header>
  )
}
export default Header
