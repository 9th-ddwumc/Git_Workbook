// Todo 항목의 타입을 정의합니다.
interface Todo {
    id: number;      // 고유 ID
    text: string;    // 할 일 내용
    completed: boolean; // 완료 여부
}

// 필요한 HTML 요소들을 선택합니다.
const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;

// 할 일 목록을 저장할 배열 (상태)
let todos: Todo[] = [];

// 할 일 목록을 화면에 렌더링하는 함수
function renderTodos() {
    // 기존 목록을 비웁니다.
    todoList.innerHTML = '';

    // todos 배열을 순회하며 각 항목을 li 태그로 만듭니다.
    todos.forEach(todo => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = todo.text;

        // 완료 상태에 따라 클래스를 추가합니다.
        if (todo.completed) {
            li.classList.add('completed');
        }

        // 버튼들을 담을 div
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        // 완료 버튼
        const completeBtn = document.createElement('button');
        completeBtn.textContent = '완료';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', () => toggleTodo(todo.id));

        // 삭제 버튼 (완료된 항목에만 표시)
        if (todo.completed) {
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '삭제';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
            buttonsDiv.appendChild(deleteBtn);
        } else {
            // 완료되지 않은 항목에는 완료 버튼만 표시
            buttonsDiv.appendChild(completeBtn);
        }

        li.appendChild(span);
        li.appendChild(buttonsDiv);
        todoList.appendChild(li);
    });
}

// 할 일 추가 함수
function addTodo(text: string) {
    const newTodo: Todo = {
        id: Date.now(), // 간단하게 현재 시간을 고유 ID로 사용
        text: text,
        completed: false
    };
    todos.push(newTodo);
    renderTodos(); // 목록을 다시 렌더링
}

// 할 일 완료 상태를 토글하는 함수
function toggleTodo(id: number) {
    todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos(); // 목록을 다시 렌더링
}

// 할 일 삭제 함수
function deleteTodo(id: number) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos(); // 목록을 다시 렌더링
}

// 폼 제출 이벤트 리스너
todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // 폼 제출 시 페이지가 새로고침되는 것을 방지
    const newTodoText = todoInput.value.trim();

    if (newTodoText !== '') {
        addTodo(newTodoText);
        todoInput.value = ''; // 입력창 비우기
    }
});

// 초기 렌더링
renderTodos();
