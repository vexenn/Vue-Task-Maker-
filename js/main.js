// var prints = [
// 	{
// 		img: "img/bear.jpg",
// 		name: "Bear",
// 		price: 25
// 	},
// 	{
// 		img: "img/octopi.jpg",
// 		name: "Octopi",
// 		price: 12
// 	},
// 	{
// 		img: "img/HDM.jpg",
// 		name: "His Dark Materials",
// 		price: 18
// 	}
// ];

var todo = new Vue({

	el: '#todo',
	data: { 
		newTask: '',
		todoList: [] 
		},
	methods: {
	 addTask: function() {
		var task = this.newTask;
		this.todoList.push(task);
	},
	removeTask: function(task) {
		var index = this.todoList.indexOf(task);
		this.todoList.splice(index, 1);
		}
	}
});

