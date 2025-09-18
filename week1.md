Git과 Github
============


# Git이란?
> 분산 버전 관리 시스템
버전: 파일이 수정되고 기록하는 시점    
여러 명이 한 파일(폴더)을 개별적으로 작업하고 결과를 기록으로써 반영    
    
* 파일의 변경 사항 추적 가능
언제 어떠한 변화가 일어났는지 기록    
    

# Github
* 여러 사용자 간 작업 조율 가능
해당 파일의 기록을 모든 사용자가 동일하게 공유     

- - -

## Repository
> 작업하는 파일들이 저장되는 폴더

* 나만의 작업 공간, Working Directory
    * .gitignore를 활용해 파일이 추적되지 않게 관리 가능
    
* Staging Area
    * 파일의 상태
    1. unmodified
    2. modified
    3. staged: 선택적으로 파일을 커밋하기 위해 준비하는 단계(commit == 체크포인트)
    
* Local Repository
    * 최종적으로 변경 사항 반영
    1. add
    2. commit
    3. push
    
    git clone (레포지토리 주소)

    touch .gitignore <- 파일 생성

    git add . <- 모든 파일 staged

    git commit -m "(커밋메시지)"

    git push origin (브랜치 이름)

    git status
    
## Branch
> 내가 작업하는 독립적인 영역

    git branch (브랜치 이름)

    git switch (브랜치 이름)

    
* git log를 통해 변화와 브랜치의 최신 커밋 등 확인 가능
    

## Issue
> 프로젝트 협업 시 작업 현황, 기능 구현, 버그 수정, 리팩토링 등을 공유

제목, 내용, Assignees, Labels, Projects, Milestone, Development

    
## Pull Request
> 나의 작업을 메인 브랜치에 반영하기 위한 요청
    
        