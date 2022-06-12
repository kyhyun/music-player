import { PlayIcon, PauseIcon } from 'assets/svgs'

import { useRecoilValue, useRecoilState } from 'recoil'
import { musicState, currentIdState } from 'store/music'
import { useState, useRef, useEffect } from 'react'

import song from 'assets/music'
import styles from './playList.module.scss'

const PlayList = () => {
  const musicInfo = useRecoilValue(musicState)
  const [currentId, setCurrentId] = useRecoilState<number>(currentIdState)
  const [audioTrack, setAudioTrack] = useState('')
  const audioRef = useRef(null)

  const onClickPlayButton = (id: number, audio: string) => () => {
    if (currentId === id) {
      setCurrentId(-1)
      setAudioTrack('')
    } else {
      setCurrentId(id)
      songChoose(audio)
    }
  }

  const songChoose = (audioURL: string) => {
    switch (audioURL) {
      case song.track1:
        setAudioTrack(song.track1)
        break
      case song.track2:
        setAudioTrack(song.track2)
        break
      case song.track3:
        setAudioTrack(song.track3)
        break
      case song.track4:
        setAudioTrack(song.track4)
        break
      case song.track5:
        setAudioTrack(song.track5)
        break
      case song.track6:
        setAudioTrack(song.track6)
        break
      case song.track7:
        setAudioTrack(song.track7)
        break
      case song.track8:
        setAudioTrack(song.track8)
        break
      default:
        break
    }
  }

  const renderMusicList = () => {
    return musicInfo.map((value) => {
      const { id, title, artist, audio } = value
      return (
        <div key={id} className={styles.contentItem}>
          <div className={styles.description}>
            <div className={styles.title}>
              <dt>Title</dt>
              <dd>{title}</dd>
            </div>
            <div className={styles.artist}>
              <dt>Artist</dt>
              <dd>{artist}</dd>
            </div>
          </div>
          <div className={styles.playButton}>
            <button type='button' onClick={onClickPlayButton(id, audio)}>
              {id === currentId ? <PauseIcon className={styles.pauseIcon} /> : <PlayIcon />}
            </button>
          </div>
        </div>
      )
    })
  }

  useEffect(() => {}, [audioRef, audioTrack])

  return (
    <section className={styles.contents}>
      <dl>{renderMusicList()}</dl>
      {audioTrack && (
        <audio src={audioTrack} ref={audioRef} controls autoPlay className={styles.audioPlayer}>
          <track default srcLang='ko' kind='captions' label={musicInfo[currentId].title} />
        </audio>
      )}
    </section>
  )
}

export default PlayList
