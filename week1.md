## Git Week1

```bash

# 1) 원격 레포 클론 & 이동
git clone <레포지토리_주소>
cd <클론된_폴더>

# 2) 파일 생성 (예시)
echo "# Week1 정리" > week1.md
echo "임시 파일" > ignore.md

# 3) .gitignore로 추적 제외
echo "ignore.md" >> .gitignore   # 특정 파일 제외
# echo "*.log"  >> .gitignore   # 확장자 전체 제외 예시
# echo "build/" >> .gitignore   # 폴더 제외 예시

# 이미 추가된 파일을 추적 해제하려면
git rm --cached ignore.md

# 4) 상태 확인 → 스테이징 → 커밋
git status
git add -A
git commit -m "week1: add week1.md, .gitignore, ignore.md"

# 5) 브랜치 생성/전환 & 푸시
git switch -c week1           # 새 브랜치 생성 + 전환 (또는: git checkout -b week1)
git push -u origin week1      # 원격에 브랜치 처음 푸시(업스트림 설정)

# 6) 작업 검증(예시)
git status
git log --oneline --graph     # 커밋 히스토리 요약

# 7) PR 만들기
gh pr create --base main --head week1 --title "Week1 과제 제출" --body "week1.md 추가"

# 8) 자주 쓰는 명령어 요약
git status                    # 현재 상태
git add .                     # 변경 파일 전체 스테이징
git commit -m "msg"           # 커밋
git push origin <브랜치>      # 원격으로 푸시
git pull origin <브랜치>      # 원격 변경 가져오기
git branch                    # 브랜치 목록
git switch <브랜치>           # 브랜치 전환
git switch -c <브랜치>        # 생성 + 전환