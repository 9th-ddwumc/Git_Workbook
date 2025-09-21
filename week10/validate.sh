if [ "$(git reflog | grep -c "merge task-ff: Fast-forward")" -eq 0 ]; then
    echo "   ✅ fast-forward merge가 확인되었습니다."
else
    echo -e "   ❌ fast-forward merge가 확인되지 않았습니다."
    exit 1
fi

if [ "$(git reflog | grep -c "commit (merge)")" -eq 0 ]; then
    echo -e "   ❌ 3-way merge가 확인되지 않았습니다."
    exit 1
else
    echo "   ✅ 3-way merge가 확인되었습니다."
fi


if [ "$(git reflog | grep -c "pull")" -eq 0 ]; then
    echo -e "   ❌ pull 내역이 확인되지 않았습니다."
    exit 1
else
    echo "   ✅ pull 내역이 확인되었습니다."
fi

echo "   ========================================="
echo "   ✅ 모든 과제가 확인되었습니다!"
