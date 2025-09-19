current_branch=$(git branch --show-current)
week1_committed=false
ignore_committed=false

if [[ "$current_branch" == week1-* ]]; then
    echo "   ✅ 브랜치 이름이 올바릅니다: $current_branch"
else
    echo -e "   ❌ 브랜치 이름이 잘못되었습니다.\n   현재 브랜치 이름은 $current_branch 이며, week1-닉네임 형식이어야 해요!"
    exit 1
fi

if [ -f "week1.md" ]; then
    echo "   ✅ week1.md 파일이 존재합니다."

    # 파일이 비어있는지 확인
    if [ -s "week1.md" ]; then
        echo "   ✅ week1.md 파일에 내용이 작성되었습니다."
    else
        echo "   ❌ week1.md 파일이 비어 있습니다."
        exit 1
    fi
else
    echo "   ❌ week1.md 파일이 존재하지 않습니다."
    exit 1
fi

if [ -f "ignore.md" ]; then
    echo "   ✅ ignore.md 파일이 존재합니다."
else
    echo "   ❌ ignore.md 파일이 존재하지 않습니다."
    exit 1
fi

if [ -f ".gitignore" ]; then
    echo "   ✅ .gitignore 파일이 존재합니다."

    if grep -q "ignore.md" .gitignore; then
        echo "   ✅ .gitignore 파일에 ignore.md 파일이 제대로 설정되었습니다."
    else
        echo "   ❌ .gitignore 파일에 ignore.md 파일이 설정되지 않았습니다."
        exit 1
    fi
else
    echo "   ❌ .gitignore 파일이 존재하지 않습니다."
    exit 1
fi

if git log --pretty=format:"%H" -- week1.md | grep -q '.'; then
    week1_committed=true
fi

if git log --pretty=format:"%H" -- ignore.md | grep -q '.'; then
    ignore_committed=true
fi

if $week1_committed && ! $ignore_committed; then
    echo "   ✅ week1.md 파일이 커밋되었습니다.\n   ✅ ignore.md 파일이 정상적으로 .gitignore에 추가되었습니다."
else
    if ! $week1_committed; then
        echo "   ❌ week1.md 파일이 커밋되지 않았습니다."
    fi
    if $ignore_committed; then
        echo "   ❌ ignore.md 파일이 커밋되었습니다. ignore.md 파일은 커밋되지 않아야 합니다."
    fi
    exit 1
fi

echo "=================================================================="
echo "✅ 모든 과제가 확인되었습니다!"