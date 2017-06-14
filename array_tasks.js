var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2)
	},

	insertAt: function (arr, itemToAdd, index) {
		
		arr.splice(index,0,itemToAdd);
		return arr;
	},

	square: function (arr) {
			return arr.map(function(item){
			 	return item * item;
			})
	},


	sum: function (arr) {
		var total = arr.reduce(add, 0);

		function add(a, b) {
		    return a + b;
		}
		return total;
	},

	findDuplicates: function (arr) {
		newArray = arr.filter(duplicates, 0)

			function duplicates (item, pos) {
					return arr.indexOf(item) == pos;
				}
		 
		return newArray
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = arr.filter(function(item){
			return item !== valueToRemove
		});
		return newArray;
	},

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
