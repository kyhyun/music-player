import { FavoriteIcon, MoreIcon, MusicIcon } from 'assets/svgs'
import { useRecoilValue } from 'recoil'
import { currentIdState, musicState } from 'store/music'
import styles from './visualization.module.scss'
import images from 'assets/images'

const thumbnailChoose = (imageURL: string) => {
  switch (imageURL) {
    case images.thumb1:
      return images.thumb1
    case images.thumb2:
      return images.thumb2
    case images.thumb3:
      return images.thumb3
    case images.thumb4:
      return images.thumb4
    case images.thumb5:
      return images.thumb5
    case images.thumb6:
      return images.thumb6
    case images.thumb7:
      return images.thumb7
    case images.thumb8:
      return images.thumb8
    default:
      return undefined
  }
}

const Visualization = () => {
  const musicData = useRecoilValue(musicState)
  const currentId = useRecoilValue(currentIdState)

  const thumbnailRender = () => {
    if (currentId === -1) {
      return <MusicIcon className={styles.loadingIcon} />
    }
    return <img src={thumbnailChoose(musicData[currentId].image)} alt={musicData[currentId].title} />
  }

  return (
    <section className={styles.wrap}>
      <button type='button' className={styles.favorite}>
        <FavoriteIcon />
      </button>
      <div className={styles.songThumbnailWrap}>{thumbnailRender()}</div>
      <button type='button' className={styles.more}>
        <MoreIcon />
      </button>
    </section>
  )
}

export default Visualization
