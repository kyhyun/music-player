import { FavoriteIcon, MoreIcon, MusicIcon } from 'assets/svgs'
import { useRecoilValue } from 'recoil'
import { currentIdState } from 'store/music'
import styles from './visualization.module.scss'
import store from 'storejs'
import images from 'assets/images'

const Visualization = () => {
  const storeData = store.get('musicInfo')
  const currentId = useRecoilValue(currentIdState)

  const renderImage = () => {
    const { thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8 } = images
  }

  return (
    <section className={styles.wrap}>
      <button type='button' className={styles.favorite}>
        <FavoriteIcon />
      </button>

      <div className={styles.songThumbnailWrap}>
        {currentId === -1 ? (
          <MusicIcon className={styles.loadingIcon} />
        ) : (
          <img src={storeData[currentId].image} alt={storeData[currentId].title} />
        )}
      </div>
      <button type='button' className={styles.more}>
        <MoreIcon />
      </button>
    </section>
  )
}

export default Visualization
