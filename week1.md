- 원격 레포 로컬 레포와 연결
```git clone (레포지토리 주소)```

- .gitignore로 파일 추적되지 않게 관리
```touch .gitignore```
gitignore 파일 숨김처리 해제 후 .gitignore 파일 안에 추적해제할 파일을 작성

- add, commit, push로 파일 추적 상태 관리

```git add .```
파일을 staged 상태로 변경

```git commit -m "(커밋 메세지)"```
커밋 메세지 입력

```git push origin (브랜치 이름)```
로컬 레포에 반영된 내용 원격 레포로 전달

```git status```
내 파일 상태 확인

- 브랜치
```git branch (브랜치 이름)```
브랜치 생성

```git switch (브랜치 이름)```
브랜치로 전환

```git merge (병합할 브랜치)```
브랜치 merge하기

