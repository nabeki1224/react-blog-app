export type Article = {
  id: number
  title: string
  content: string
}

export const initialArticles: Article[] = [
  {
    id: 1,
    title: 'Reactとは何か',
    content: 'ReactはFacebookが開発したUIライブラリです。'
  },
  {
    id: 2,
    title: 'useStateの使い方',
    content: 'useStateはReactで状態を管理するためのフックです。'
  }
]