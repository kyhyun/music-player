import { atom } from 'recoil'
import { IMusic } from 'types/music.d'

import musicData from 'data/music_play_list.json'

export const musicState = atom<IMusic[]>({
  key: '#musicState',
  default: musicData,
})

export const currentIdState = atom<number>({
  key: '#currentIdState',
  default: -1,
})
