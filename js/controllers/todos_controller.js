Todos.TodosController = Ember.ArrayController.extend({
	createTodo: function(){
		var title = this.get('newTitle');
		if(!title.trim()) { return; }

		var todo = Todos.Todo.createRecord({
			title: title,
			isCompleted: false
		});

		this.set('newTitle', '');

		//todo.save();
	}
});