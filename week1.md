# 1주차 Git & GitHub 기초


## 1. Git의 개념

* 정의: 파일 변경 사항을 추적하고, 여러 사용자의 작업을 조율하는 **분산 버전 관리 시스템**
* 핵심 기능
  - 변경 내역 기록 (`commit`)
  - 특정 시점으로 되돌리기 가능
  - 협업 시 여러 명이 같은 파일을 나눠 작업 가능

## 2. Git의 핵심 구조

* Working Directory: 실제 작업하는 공간
* Staging Area: 커밋할 파일을 올려두는 준비 공간 (`git add`)
* Local Repository: 내 컴퓨터에 저장된 Git 저장소 (`git commit`)
* Remote Repository: GitHub와 같은 원격 서버 저장소 (`git push`)

## 3. Git 기본 명령어

* `git add .` → 모든 변경 파일 stage
* `git commit -m "메시지"` → 변경 사항 기록
* `git push origin main` → 원격 저장소에 반영
* `git status` → 현재 파일 상태 확인
* `git log` → 커밋 기록 조회

## 4. 협업을 위한 GitHub

* 원격 저장소(Remote Repository) 제공
* 이슈(Issue), 풀 리퀘스트(Pull Request) 기능으로 협업 관리
* `origin` 키워드를 통해 원격 주소(URL) 관리

## 5. Branch(브랜치)

* 독립적인 작업 공간
* 기능 단위로 분리 후 병합(`merge`)
* 전환 명령어:
  - `git switch 브랜치명` (추천)
  - `git checkout 브랜치명` (구버전)

## 6. Issue & Pull Request

* Issue: 작업 단위 목표(기능, 버그 수정 등)를 관리
* Pull Request (PR): 작업 내용을 메인 브랜치에 반영 요청 + 코드 리뷰 진행