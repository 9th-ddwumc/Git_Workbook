# CHAPTER 1. 개발을 위한 Git과 Github


## git 사용 목적
파일의 변경사항을 추적하고, 협업 시 공동 작업을 위함.

## 파일 관리 방식 
working directory: 작업 공간
staging area: commit 하기 위한 파일을 add하는 공간
local repository: staging area가 commit 되어 반영된 공간. push를 통해 원격 repo로 반영.

## git의 사용
   ### 원격 레포 생성과 로컬 레포 연결
	git clone (레포지토리 주소)

   ### .gitignore 추적하지 않는 파일 관리
	touch .gitignore

   ### add, commit, push
	> git add (파일 이름 or .(전체))
	> git commit -m (커밋 메시지)
	> git push origin (브랜치 이름)

   ### 파일 상태 확인
	git status

## branch
독립적인 나의 작업 공간
git branch (브랜치 이름)

브랜치 이동
 ~~> git checkout (브랜치 이름)~~
 > git switch (브랜치 이름)
checkout => switch(이동), restore(수정 내용 복원) 으로 기능 분리

브랜치 병합
현재 브랜치에서 다른 브랜치의 병경 사항을 적용할 떄 사용.
git merge (병합할 브랜치)

**충돌의 위험이 있기 떄문에 PR(Pull Request) 작성**

##git 로그 조회
git log
HEAD -> 현재 브랜치의 최신 commit
origin/main -> 원격 저장소의 메인 브랜치

## issue 와 PR 작성
   ### Issue: 목표나 계획 설정
	제목과 내용, Assignees와 Labels, Projects, Milestone, Development 등...
   ### PR: 내 브랜치 메인으로 반영
	제목과 내용, Reviewers, Assignees와 Labels, Projects, Milestone, Development 등...







