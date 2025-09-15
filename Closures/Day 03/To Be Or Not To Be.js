// 2704. To Be Or Not To Be

/**
 * @param {string} val
 * @return {Object}
 */
function expect(val) {
	const originalValue = val
	return {
		toBe: function(newVal) {
			if (newVal !== originalValue) {
				throw new Error("Not Equal")
			} else return true },
		notToBe: function(newVal) {
			if (newVal === originalValue) {
				throw new Error("Equal")
			} else return true 
		}
	}
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// objects within functions
// function calc(val){
// 	function add(sum){
// 		return sum + val;
// 	}
// 	function sub(sub){
// 		return sub - val;
// 	}
// 	return {
// 		// add: add,
// 		// sub: 
// 		add,
// 		sub
// 	}

// }

// console.log(calc(10).add(10)); // 20
// console.log(calc(10).sub(10)); // 0




