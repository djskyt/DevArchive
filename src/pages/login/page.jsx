import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLogin } from '../../features/auth/model/useLogin';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: login, isPending, isError } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(
      { email, password },
      { onSuccess: () => navigate('/') }
    );
  };

  return (
    <div className="max-w-sm mx-auto mt-20 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
          로그인
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          테스트 계정: dev@archive.com / password123
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
        />

        {isError && (
          <p className="text-xs text-red-400">
            이메일 또는 비밀번호가 올바르지 않습니다.
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-2.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:opacity-80 transition-opacity disabled:opacity-40"
        >
          {isPending ? '로그인 중...' : '로그인'}
        </button>
      </form>

      <Link
        to="/"
        className="text-center text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};