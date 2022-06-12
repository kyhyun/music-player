# React Music Player

## 📜 프로젝트 개요
음악 목록들을 실행할 수 있는 뮤직 플레이어 앱 

## 🔗 프로젝트 배포

### [배포 링크](https://team8-react-music-app.netlify.app/)

## ⚙ 기술 스택
  <img src="https://img.shields.io/badge/TypeScript-v4.4.2-blue"/>
  <img src="https://img.shields.io/badge/React-v18.1.0-blue"/>

```
그 외 추가 라이브러리
  - "recoil": "^0.7.3",
  - "classnames": "^2.3.1"

```

## 🎄 프로젝트 구조

```
src
 ┣ assets       // images, music, svg 파일
 ┣ data         // json 파일
 ┣ hooks        // Custom Hooks
 ┣ store        // 전역 state
 ┣ pages        // 페이지
 ┣ styles       // 전역 style
 ┣ types        // 필요한 type 정의
```

## 📍 실행 방법

1. Repository 클론
```sh
$ git clone https://github.com/kyhyun/music-player.git
```

2. Dependencies 설치
```sh
$ yarn install
```

3. Run 실행
```sh
$ yarn start
```

## 🎨 실행 이미지
<p align="center"><img src="https://user-images.githubusercontent.com/77887712/173256932-6a16cb52-9cd3-45be-885b-87507d951fb6.gif" width="350px">
</p>


## 🔥 어려웠던 점
- 단순히 이미지나 텍스트처럼 내용을 가져와서 화면에 보여주고, 빈 값이면 보여주는 것과 달리 오디오 같은 재생이 이루어지는 미디어 컨텐츠를 다루는 것이 처음이다보니 어떻게 다루어야 하는지 감이 잘 오지 않았다.
- Audio 객체를 생성해서 각 플레이버튼에 인스턴스를 생성하는 방식으로 하고 그것을 조작하려는 방식의 접근은 좋지 못했다. 그 플레이리스트마다 생성되는 인스턴스에 값이 담긴 음악이 실행되고, 그것을 조작하기 위해서는 버튼을 누른 시점에 이전 값을 담고 있다가 그것을 정지시켜야하는데, 이미 상수에 선언된 인스턴스 변수가 이전 값으로 담기고 그것을 새로 할당하는 것이 안되기 때문에 이전 값을 조작하고, 그 위에 새로운 인스턴스로 할당하거나 그것을 삭제하려는 접근은 어려워보였다.
- 또 다른 접근 방식으로는 각 음악의 실행에 따라 Audio 객체를 생성되게 하는 것이 아니라 하단에 하나의 audio 태그를 생성해서 그 플레이어를 useRef로 DOM을 조작할 수 있도록 접근하고, audio의 ref는 src 속성에 담긴 track 변수의 값이 변경됨에 따라 값이 변경되기 때문에, 이 값을 매번 업데이트가 이루어질 때마다 반영될 수 있도록 useEffect로 2번째 인자에 audioTrack과 audioRef를 두어 버튼 클릭에 따라 audioTrack을 변경하고 그 상태 값이 변경됨으로써 audio를 버튼을 누름에 따라 조작할 수 있도록 구현하는 방식에 접근하니 문제가 보다 수월하게 해결됐다.

## 📝CopyRight
> 음원 사용 관련 허가 및 비상업 목적인 개인 포트폴리오로써 저작물을 사용했음을 아래와 같이 명시합니다. 
- [오늘의 일기 - Blog](https://blog.naver.com/illusiondk2)
- [Sereno - Instagram](https://www.instagram.com/sereno_piano/)
- [V.K克 - Instagram](https://www.instagram.com/vkstylemusic/)
- [Toby Fox - Twitter](https://twitter.com/tobyfox?lang=ko)
