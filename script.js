function addTask(time) {
    // Obtém o elemento de entrada de tarefa pelo ID
    var taskInput = document.getElementById(time + 'TaskInput');
    
    // Obtém a lista de tarefas pelo ID
    var taskList = document.getElementById(time + 'Tasks');

    // Cria um novo elemento de lista
    var newTask = document.createElement('li');
    
    // Define o texto do novo elemento com o valor da entrada
    newTask.textContent = taskInput.value;
    
    // Cria um botão de "X" para remover a tarefa
    var removeButton = document.createElement('button');
    removeButton.innerHTML = 'X';
    removeButton.className = 'remove-button'; // Adiciona uma classe para o botão de remoção
    removeButton.onclick = function() {
        taskList.removeChild(newTask);
    };

    // Adiciona o botão de remoção ao novo elemento de lista
    newTask.appendChild(removeButton);
    
    // Adiciona a nova tarefa à lista de tarefas
    taskList.appendChild(newTask);
    
    // Limpa o campo de entrada
    taskInput.value = '';
}
