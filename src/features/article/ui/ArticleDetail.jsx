import { useArticleDetail } from '../model/useArticleDetail';

export const ArticleDetail = ({ id }) => {
  const { data: article, isPending, isError } = useArticleDetail(id);

  if (isPending) return <p>로딩 중...</p>;
  if (isError) return <p>아티클을 불러올 수 없습니다.</p>;

  return (
    <div>
      <img src={article.thumbnail} alt={article.title} />
      <div>
        {article.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <h1>{article.title}</h1>
      <div>
        <span>{article.author}</span>
        <span>{new Date(article.createdAt).toLocaleDateString('ko-KR')}</span>
      </div>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noreferrer">
        원문 보기
      </a>
    </div>
  );
};