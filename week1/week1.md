# Git week01

## Git이란?
파일의 변경 사항을 추적하고 여러 사용자 간에 해당 파일들의 작업들을 조율하기 위한 분산 버전 관리 시스템
- 파일의 변경 사항 추적 : 파일을 언제 수정했는지, 어떤 변화가 있었는지 로그 형식으로 관리
- 여러 사용자 간에 해당 파일들의 작업들을 조율 : 한 파일을 동시에 여러 사용자가 접근
- 분산 버전 관리 시스템 : 여러 명이 한 파일에 접근해 개별적으로 작업하고, 작업 결과를 기록으로 반영하는 시스템

## 파일 관리
repository : 작업하는 파일이 저장되는 폴더, local repository(사용자 컴퓨터) / remote repository(원격)
- working directory : 내가 현재 작업하고 있는 공간, working directory 내의 파일은 변경사항 모두 추적(.gitignore로 처리된 파일 제외)
- staging area : stage된 파일들이 있는 곳
    - unmodified : 변경되지 않은 파일
    - modified : 변경된 파일
    - staged : commit을 위한 준비 단계로, modified된 파일 중 선택적으로 해당 파일을 stage해서 해당 파일만 커밋할 수 있도록 하는 것
        - commit : 변경 사항이 생긴 modified 상태일 때 체크포인트를 만드는 일
        - add : modified된 파일을 stage하는 것
- local repository : commit을 통해 파일의 변경 사항을 기록하는 곳
- 반영하고 싶은 변경 사항을 add를 통해 staged 상태로 만들고, commit을 통해 최종적으로 local repository에 반영

## git 사용방법
1. 원격 레포 생성, 연결
    - github에서 new로 생성
    - 원하는 폴더에서 터미널에 git clone (레포지토리 주소)입력
2. .gitignore
    - 워킹 디렉토리 내에서 추적되지 않아야 하는 파일 목록을 지정하는 파일
    - touch .gitignore로 gitignore파일 생성후 해당 파일에 추적해재하고 싶은 파일명 적기
3. add, commit, push
    - add
        - git add : 모든 파일을 staged 상태로 변경
        - git add (파일 이름) : 특정 파일만 골라서 staged 상태로 변경
    - commit : git commit -m "(커밋 메시지)"
    - push : git push origin (브랜치 이름) 

## branch
동시에 작업하지만 서로에게 영향을 끼치지 않도록 처리해주는 것, 기본적으로 레포를 생성했을 때는 main 브랜치가 기본 브랜치로 설정
- branch 생성/전환
    - 생성 : git branch (브랜치 이름)
    - 전환 : git switch (브랜치 이름)
- branch merge 
    - 현재 브랜치에서 다른 브랜치의 변경사항을 현재 브랜치에 적용시키고 싶을 때 사용하는 명령어
    - 충돌 위험 있기 때문에 merge대신 pull request 사용

## 커밋 기록 확인
- git log
- HEAD : 현재 브랜치의 최신 커밋를 참조하는 값

## Issue와 PR
- Issue : main 브랜치에서 기능 브랜치를 나누기 전 팀원들과 프로젝트의 작업 진행 현황과 기능 구현, 버그 수정, 리팩토링 등을 공유하기 위해 Issue 생성
    - 제목
    - 내용
    - Assignees
    - Projects
    - Milestone
    - Development
- PR : 메인 브랜치에게 Pull을 받아줄 것을 요청(Request)하는 것 
    - 제목
    - 내용
    - Assignees
    - Projects
    - Milestone
    - Development
    - Reviewers