import { useState } from "react";
import { initialArticles} from './articles'
import type { Article } from './articles'

function App() {
  const [articles] = useState<Article[]>(initialArticles)

  return (
    <div style={{ padding: '2rem' }}>
      <h1>ブログ記事一覧</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {articles.map((article) => (
          <li key={article.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
