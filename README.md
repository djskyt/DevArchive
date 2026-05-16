# Dev Archive

개발자를 위한 아티클 북마크 및 관리 서비스입니다.

> 이 프로젝트는 AI와 함께하는 바이브 코딩(Vibe Coding) 방식으로 개발되었습니다.
> Claude와 함께 아키텍처 설계부터 구현, 리팩토링, 배포까지 전 과정을 진행했습니다.

## 배포 링크

🔗 [dev-archive 바로가기](https://dev-archive-nx1irj3d8-djskyt.vercel.app/)

## 프로젝트 소개

개발 관련 아티클을 한 곳에서 저장하고 관리할 수 있는 서비스입니다.
로그인 후 관심 있는 아티클을 북마크하고, 태그 및 검색으로 빠르게 찾아볼 수 있습니다.

## 기술 스택

| 분류 | 기술 |
|------|------|
| UI | React, Tailwind CSS v4 |
| 상태 관리 | Zustand |
| 서버 상태 | TanStack Query v5 |
| 라우팅 | React Router DOM v6 |
| API 모킹 | MSW v2 |
| 빌드 도구 | Vite |
| 아키텍처 | Feature-Sliced Design (FSD) |

## 주요 기능

- 아티클 목록 조회 및 검색
- 태그 다중 필터링
- 로그인 / 로그아웃
- 아티클 북마크 추가 / 제거
- 북마크 목록 조회
- 다크모드 지원

## 실행 방법

```bash
# 패키지 설치
npm install

# MSW 서비스워커 등록
npx msw init public/

# 개발 서버 실행
npm run dev
```

## 테스트 계정
이메일: dev@archive.com
비밀번호: password123

## 아키텍처

Feature-Sliced Design(FSD) 아키텍처를 적용하여 레이어 간 의존성 방향을 단방향으로 유지했습니다.
src/
├─ app/        # 앱 진입점, 라우터, 프로바이더
├─ pages/      # 페이지 컴포넌트
├─ features/   # 사용자 행동 단위 기능
├─ entities/   # 핵심 도메인 API
└─ shared/     # 공용 유틸, UI, 훅, 스토어, MSW

## 바이브 코딩이란?

바이브 코딩(Vibe Coding)은 AI와 자연어로 대화하며 코드를 완성해 나가는 개발 방식입니다.
단순히 코드를 생성하는 것을 넘어, 아키텍처 결정, 트레이드오프 논의, 리팩토링까지
AI와 함께 사고하며 개발하는 새로운 패러다임입니다.

이 프로젝트는 다음 과정을 바이브 코딩으로 진행했습니다.

- FSD 아키텍처 설계 및 폴더 구조 결정
- MSW + localStorage 기반 목업 서버 구현
- TanStack Query 캐시 전략 설계
- Tailwind CSS v4 다크모드 구현
- 코드 리팩토링 및 Vercel 배포
