import { PlayIcon, PauseIcon } from 'assets/svgs'

import { useRecoilValue, useRecoilState } from 'recoil'
import { musicState, currentIdState } from 'store/music'
import { useState, useEffect, useRef, useCallback } from 'react'

import song from 'assets/music'
import styles from './playList.module.scss'

const PlayList = () => {
  const musicInfo = useRecoilValue(musicState)
  const [currentId, setCurrentId] = useRecoilState(currentIdState)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioTrack, setAudioTrack] = useState('')
  const currentSong = useRef('')

  const onClickPlayButton = (id: number, audio: string) => () => {
    if (currentId === id) {
      setCurrentId(-1)
    } else {
      setCurrentId(id)
      audioChoose(audio)
    }
  }

  const audioChoose = (audio: string) => {
    switch (audio) {
      case song.track1:
        currentSong.current = song.track1
        setAudioTrack(song.track1)
        break
      case song.track2:
        currentSong.current = song.track2
        setAudioTrack(song.track2)
        break
      case song.track3:
        currentSong.current = song.track3
        setAudioTrack(song.track3)
        break
      case song.track4:
        currentSong.current = song.track4
        setAudioTrack(song.track4)
        break
      case song.track5:
        currentSong.current = song.track5
        setAudioTrack(song.track5)
        break
      case song.track6:
        currentSong.current = song.track6
        setAudioTrack(song.track6)
        break
      case song.track7:
        currentSong.current = song.track7
        setAudioTrack(song.track7)
        break
      case song.track8:
        currentSong.current = song.track8
        setAudioTrack(song.track8)
        break
      default:
        break
    }
  }

  const audioPlayer = useCallback(() => {
    const audioPlay = new Audio(audioTrack)
    if (audioPlay !== undefined) {
      audioPlay.play()
    }
    // if (isPlaying) {
    //   audioPlay.pause()
    // } else {
    //   audioPlay.play()
    // }
    setIsPlaying((prevState) => !prevState)
  }, [audioTrack])

  useEffect(() => {
    if (currentSong.current !== '') {
      audioChoose(currentSong.current)
      audioPlayer()
    }
  }, [audioPlayer])

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

  return (
    <section className={styles.contents}>
      <dl>{renderMusicList()}</dl>
    </section>
  )
}

export default PlayList
