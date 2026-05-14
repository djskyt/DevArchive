import { useParams } from 'react-router-dom';
import { ArticleDetail } from '../../features/article/ui/ArticleDetail';

export const ArticlePage = () => {
  const { id } = useParams();

  return (
    <div>
      <ArticleDetail id={id} />
    </div>
  );
};