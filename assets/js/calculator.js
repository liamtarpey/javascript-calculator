
// Vars
var result = document.getElementById("result");


// Calculator
var calculator = {

	// Initial result
	total : 0,

	tempNumber : "",

	// Temp result 
	temp : function (val) {

		if(this.total == 0) {

			this.tempNumber += val.toString();
			this.displayResult(this.tempNumber);
			console.log(this.tempNumber);
		}
	},

	// Add number to total
	doSomething : function(type) {

		// Current total equals the temporary number that's been typed in
		this.total = this.tempNumber;

		// Reset tempNumber to empty string
		this.tempNumber = "";

		// Display total amount 
		this.displayResult(this.total);

		if(type == "add") {


		};
	},

	// Resets calculator
	clear : function() {

		this.total = 0;
		this.displayResult(this.total);
	},

	// Function when click on equals button
	equals : function() {

		//return this.total;
		this.displayResult(this.total);
	},

	displayResult : function(val) {

		result.innerHTML = val;
	}
};





