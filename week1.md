# 1주차 Git 요약

## Git이란?
- 파일 변경 이력 추적 + 다수 사용자 협업을 위한 **분산 버전 관리 시스템(VCS)**

## 왜 쓰나
- 과거 버전으로 **복구/비교** 가능
- **GitHub(원격 저장소)** 로 협업/백업 용이

## 기본 개념
- **Working Directory**: 현재 작업 영역  
- **Staging Area**: 커밋 대상 선별 구역  
- **Local Repo** ↔ **Remote Repo**: 로컬 이력 ↔ 원격(GitHub) 이력

## 핵심 명령
```bash
git status                 # 상태 확인
git add <파일> | .         # 스테이징
git commit -m "메시지"     # 커밋(이력 생성)
git push origin <브랜치>   # 원격 반영


