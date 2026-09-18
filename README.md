# Jay · Waybridge instructor profile

GitHub와 Vercel에서 독립적으로 관리할 수 있는 Next.js 강사 소개 사이트입니다.
2026-09-18 기준 기존 사이트의 콘텐츠, 성과, 사진, 한·영 신앙 섹션을 보존했습니다.

## 로컬 실행

Node.js 22를 설치한 뒤 실행합니다.

```sh
npm ci
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 검증

```sh
npm run build
npm run typecheck
npm start
```

## Vercel 배포

1. 이 프로젝트를 GitHub 저장소에 올립니다. 소스 공개가 필요하지 않으면 Private을 선택합니다.
2. Vercel에서 Add New → Project → 해당 GitHub 저장소를 Import합니다.
3. Framework Preset은 Next.js, Root Directory는 저장소 루트로 둡니다.
4. Node.js 22.x와 기본 빌드 설정을 사용해 Deploy합니다.
5. 생성된 `.vercel.app` 주소를 확인합니다. 이후 기본 브랜치 변경사항은 연결된 Vercel 프로젝트에서 자동 배포됩니다.

필수 환경 변수나 API 키는 없습니다. Vercel의 배포 도메인을 메타데이터에 자동 반영합니다.
커스텀 도메인을 사용하는 경우 선택적으로 `NEXT_PUBLIC_SITE_URL`을 지정할 수 있습니다.

## 수정 위치

- `app/page.tsx`: 강사 소개, 점수, 입시 결과, 수업 과목, 신앙 문구
- `app/globals.css`: 색상, 여백, 반응형 레이아웃
- `app/layout.tsx`: 제목, 설명, 공유 이미지 설정
- `public/`: 사진과 공유 이미지

현재 공개된 Sites 사이트와 원본 프로젝트는 별도로 유지됩니다.
이 저장소에는 로그인 정보, 배포 토큰, Sites 전용 설정이 포함되지 않습니다.
