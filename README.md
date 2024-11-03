![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=Instagram%20Clone%20Blog&fontSize=80)

<h2 align="center">인스타그램 클론 기반 블로그 프로젝트</h2>

<p align="center">
  인스타그램의 주요 기능을 클론 코딩하여 구현한 웹 블로그 서비스입니다.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-brightgreen" alt="Project Status">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
  <img src="https://img.shields.io/github/languages/top/starbox7/instagram-clone-blog" alt="Top Language">
</p>

---

## 📋 목차

- [💡 프로젝트 소개](#-프로젝트-소개)
- [✨ 주요 기능](#-주요-기능)
- [💻 기술 스택](#-기술-스택)
- [⚙️ 설치 및 실행 방법](#️-설치-및-실행-방법)
- [📱 사용법](#-사용법)
- [🤝 기여 방법](#-기여-방법)
- [📄 라이선스](#-라이선스)

---

## 💡 프로젝트 소개

**Instagram Clone Blog**는 인스타그램의 주요 기능을 클론 코딩하여 개발한 웹 블로그 프로젝트입니다. 사용자들이 사진과 글을 게시하고, 다른 사용자의 게시물에 좋아요와 댓글을 남길 수 있으며,  소셜 네트워킹 경험을 제공합니다. 이 프로젝트는 클론 코딩을 통해 인스타그램의 핵심 기능을 배우고 웹 애플리케이션의 전체 개발 과정을 익히는 것을 목표로 합니다.

---

## ✨ 주요 기능

- **회원 가입 및 로그인**: 사용자는 회원 가입과 로그인을 통해 자신의 계정을 생성하고, 서비스를 이용할 수 있습니다.
- **피드 게시물**: 사진과 글을 게시하여 피드에 표시되도록 하고, 타임라인 형식으로 다른 사용자의 게시물과 함께 표시됩니다.
- **좋아요 및 댓글 기능**: 게시물에 좋아요를 누르거나 댓글을 남길 수 있어, 소통의 기능을 제공합니다.
- **프로필 관리**: 프로필 사진과 사용자 정보를 업데이트하고, 자신의 게시물을 한눈에 볼 수 있습니다.
- **검색 기능**: 사용자를 검색하여 팔로우하거나 프로필을 확인할 수 있습니다.

---

## 💻 기술 스택

- **Frontend**: React, Redux
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **CI/CD**: GitHub

---

## ⚙️ 설치 및 실행 방법

**1. 클론 및 의존성 설치**  
이 저장소를 클론하고, 백엔드와 프론트엔드 각각의 의존성을 설치합니다.

   - 저장소 클론: `git clone https://github.com/starbox7/instagram-clone-blog.git`
   - 백엔드 의존성 설치: `cd backend && npm install`
   - 프론트엔드 의존성 설치: `cd ../frontend && npm install`

**2. 환경 변수 설정**  
`.env` 파일을 생성하고 필요한 환경 변수를 설정합니다.

   - 백엔드 환경 변수 예시:
     - `MONGO_URI=your_mongodb_uri`
     - `PORT=5000`
     - `JWT_SECRET=your_jwt_secret`
     - `AWS_ACCESS_KEY=your_aws_access_key`
     - `AWS_SECRET_KEY=your_aws_secret_key`
     - `S3_BUCKET_NAME=your_s3_bucket_name`
   - 프론트엔드 환경 변수 예시:
     - `REACT_APP_API_URL=http://localhost:5000`

**3. 서버 및 클라이언트 실행**  
백엔드 서버와 프론트엔드 클라이언트를 각각 실행한 후 브라우저에서 `http://localhost:3000`으로 접속합니다.

   - 백엔드 서버 실행: `cd backend && npm start`
   - 프론트엔드 클라이언트 실행: `cd ../frontend && npm start`

---

## 📱 사용법

**회원 가입 및 로그인**  
새 계정을 만들거나 기존 계정으로 로그인하여 서비스를 시작합니다.

**게시물 작성**  
피드에서 사진과 텍스트를 업로드하여 새로운 게시물을 작성할 수 있습니다.

**좋아요와 댓글**  
다른 사용자의 게시물에 좋아요를 누르고 댓글을 작성하여 소통할 수 있습니다.

**프로필 관리**  
프로필 사진과 사용자 정보를 업데이트하고, 본인의 게시물을 관리합니다.

---

## 🤝 기여 방법

**이슈 확인**  
기여할 작업을 선택하기 위해 GitHub 이슈 탭에서 이슈를 확인합니다.

**브랜치 생성**  
기능 추가나 버그 수정을 위해 새로운 브랜치를 생성합니다: `git checkout -b feature/새기능`

**커밋 및 푸시**  
변경 사항을 커밋하고 원격 저장소에 푸시한 후, Pull Request를 생성하여 기여합니다.

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.  

---

<p align="center">
  Made with ❤️ by starbox7
</p>
