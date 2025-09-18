document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todoList') as HTMLUListElement;
    const doneList = document.getElementById('doneList') as HTMLUListElement;
    const todoInput = document.getElementById('todoInput') as HTMLInputElement;
    const addBtn = document.querySelector('.todo-add-btn') as HTMLButtonElement;

    function addTodo(): void {
        const value = todoInput.value.trim();
        if (!value) return;
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `<span>${value}</span> <button class='complete-btn'>완료</button>`;
        const completeBtn = li.querySelector('.complete-btn') as HTMLButtonElement;
        completeBtn.onclick = () => completeTodo(li);
        todoList.appendChild(li);
        todoInput.value = '';
    }

    function completeTodo(li: HTMLLIElement): void {
        const text = li.querySelector('span')?.textContent || '';
        const doneLi = document.createElement('li');
        doneLi.className = 'todo-item';
        doneLi.innerHTML = `<span>${text}</span> <button class='delete-btn'>삭제</button>`;
        const deleteBtn = doneLi.querySelector('.delete-btn') as HTMLButtonElement;
        deleteBtn.onclick = () => deleteTodo(doneLi);
        doneList.appendChild(doneLi);
        todoList.removeChild(li);
    }

    function deleteTodo(li: HTMLLIElement): void {
        doneList.removeChild(li);
    }

    addBtn.onclick = addTodo;
});