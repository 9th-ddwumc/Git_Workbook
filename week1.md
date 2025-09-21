# Week 1 
Git WorkBook 1주차 기초 정리

# Week 1 — Git 기초 정리(보강)

## 1) Git 한 줄 정의
- Git: 변경 이력을 저장·비교·되돌리고, 여러 명이 동시에 안전하게 협업하도록 돕는 **분산 버전 관리 시스템(Distributed VCS)**

## 2) 작업 흐름 (Working → Staging → Commit → Push)
- **Working Directory**: 파일 수정 공간  
- **Staging Area**: 커밋에 포함할 변경만 선별(`git add`)  
- **Local Repository**: 이력 DB에 저장(`git commit`)  
- **Remote Repository**: 공유/백업(`git push`)

## 3) 필수 명령 치트시트
\`\`\`bash
git status                 # 변경 상태 보기
git add .                  # 전체 스테이징(선택: git add <파일>)
git commit -m "feat: 메시지"
git push -u origin <브랜치> # 최초 1회 -u, 이후 git push
\`\`\`

## 4) .gitignore 핵심
\`\`\`gitignore
ignore.md
node_modules/
dist/
*.log
.env
\`\`\`
- 이미 추적된 파일을 무시 대상으로 바꿀 때:
\`\`\`bash
git rm --cached <파일/폴더>
git commit -m "chore: stop tracking <대상>"
\`\`\`

## 5) 브랜치 & PR
- 네이밍: \`week(주차)-(닉네임)\` → 예: \`week1-bren\`
\`\`\`bash
git switch -c week1-bren    # 생성+이동(이미 있으면 생략)
\`\`\`
- 협업은 **PR**로 리뷰 후 병합(개인 연습은 로컬 merge 가능)

## 6) 자주 겪는 이슈
- \`.gitignore\`에 넣었는데도 계속 잡힘 → 이미 추적됨 → \`git rm --cached\`
- 브랜치 전환 오류 → 변경 커밋 or \`git stash\`로 임시 저장
- 스크립트 권한 오류 → \`chmod +x <스크립트>\`

## 7) 체크리스트
- [x] \`week1.md\` 작성/보강
- [x] \`ignore.md\` + \`.gitignore\` 설정
- [x] \`./week1/validate.sh\` 통과(캡처)
- [x] \`git push origin week1-bren\` & PR 생성

