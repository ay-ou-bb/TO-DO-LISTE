
           // Gestion de la soumission du formulaire
    document.getElementById('todo-form').addEventListener('submit', function (e) {
      e.preventDefault();

      // Récupérer les valeurs du formulaire
      const task = document.getElementById('task').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;

      // Créer un nouvel élément de tâche
      const taskItem = document.createElement('li');
      taskItem.className = 'bg-gray-50 p-3 rounded-lg shadow-sm flex justify-between items-center';
      taskItem.innerHTML = `
        <div>
          <span class="font-medium">${task}</span>
          <span class="text-sm text-gray-500 ml-2">${date} à ${time}</span>
        </div>
        <button onclick="removeTask(this)" class="text-red-600 hover:text-red-800">Supprimer</button>
      `;

      // Ajouter la tâche à la liste
      document.getElementById('todo-list').appendChild(taskItem);

      // Réinitialiser le formulaire
      document.getElementById('todo-form').reset();
    });

    // Fonction pour supprimer une tâche
    function removeTask(button) {
      const taskItem = button.parentElement;
      taskItem.remove();
    }

