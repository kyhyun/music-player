import { atom } from 'recoil'
import store from 'storejs'
import { IMusic } from 'types/music.d'

import musicData from 'data/music_play_list.json'

store.set('musicInfo', musicData)

const initMusicData = store.get('musicInfo')

export const musicState = atom<IMusic[]>({
  key: '#musicState',
  default: initMusicData,
})

export const currentIdState = atom<number>({
  key: '#currentIdState',
  default: -1,
})
