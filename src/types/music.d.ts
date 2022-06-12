export interface IMusic {
  id: number
  title: string
  artist: string
  image: string
  audio: string
}

export interface IAudio {
  audio: HTMLAudioElement | null
  isPlaying: booleal
}
