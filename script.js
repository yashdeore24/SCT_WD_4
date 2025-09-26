document.getElementById('todoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const taskVal = document.getElementById('taskInput').value.trim();
  const dateVal = document.getElementById('dateInput').value;
  const timeVal = document.getElementById('timeInput').value;
  if (!taskVal) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>
      <input type="checkbox" class="complete">
      <span class="text">${taskVal} (${dateVal} ${timeVal})</span>
    </span>
    <span class="actions">
      <span class="edit">Edit</span>
      <span class="delete">Delete</span>
    </span>
  `;
  document.getElementById('taskList').appendChild(li);

  li.querySelector('.delete').onclick = function() {
    li.remove();
  };

  li.querySelector('.edit').onclick = function() {
    const newTask = prompt('Edit task', taskVal);
    if (newTask) li.querySelector('.text').textContent = `${newTask} (${dateVal} ${timeVal})`;
  };
  
  li.querySelector('.complete').onchange = function() {
    li.classList.toggle('completed', this.checked);
  };

  document.getElementById('todoForm').reset();
});
