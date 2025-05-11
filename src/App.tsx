import { useState } from "react";
import { initialArticles} from './articles'
import type { Article } from './articles'

function App() {
  const [articles, setArticles] = useState<Article[]>(initialArticles)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleDelete = (id: number) => {
    setArticles(articles.filter((article) => article.id !== id))
    // Reactは新しい配列を作って更新するのが主流　→ 
  }

  return (
    <div style={{ padding: '2rem' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if(!title.trim() || !content.trim()) return

          const newArticle: Article = {
            id: articles.length + 1,
            title,
            content,
          }

          setArticles([newArticle, ...articles])
          setTitle('')
          setContent('')
        }}
        style={{ marginBottom: '2rem' }}
      >
        <div>
          <label>タイトル：</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', marginBottom: '0.5rem' }}
          />
        </div>
        <div>
          <label>内容：</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: '100%', height: '80px', marginBottom: '0.5rem' }}
          />
        </div>
        <button type="submit">記事を追加</button>
      </form>

      <h1>ブログ記事一覧</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {articles.map((article) => (
          <li key={article.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <button
              onClick={() => handleDelete(article.id)}
              style={{ marginTop: '0.5rem', color: 'red' }}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
