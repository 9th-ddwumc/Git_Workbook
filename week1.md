# 1주차 핵심 요약 — Git

## 📌 Git이란?
- 파일 변경 이력을 기록하고, 여러 사람이 함께 작업할 수 있게 해주는 **분산 버전 관리 시스템(DVCS)**
- 왜 필요할까?
  - `최종_최종` 파일 지옥 탈출
  - 언제, 무엇이, 왜 바뀌었는지 추적 가능
  - 협업 & 백업에 유용

---

## 📂 Git의 3 구역
1. **Working Directory** → 지금 작업하는 공간  
2. **Staging Area** → 커밋할 변경을 선택(`git add`)  
3. **Local Repository** → 커밋 기록 저장(`git commit`) → 원격(`git push`)  

> `.gitignore`에 등록된 파일은 추적되지 않음

---

## 🌿 브랜치
- 기능별 **독립 작업 공간**
- 작업 후 **PR(Pull Request)** 로 메인에 병합
- **HEAD**: 현재 브랜치의 최신 커밋을 가리킴

---

## 🛠️ 필수 명령어
```bash
git status
git add .                # 모든 변경 추가
git add <파일>           # 특정 파일만 추가
git commit -m "메시지"
git push origin <브랜치>

git branch <브랜치>
git switch <브랜치>      # (또는 git checkout)
git merge <브랜치>
git log