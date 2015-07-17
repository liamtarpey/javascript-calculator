
// Vars
var resultHTML = document.getElementById("result");

// Calculator
var calculator = {

	// Initial result
	total : "",

	// Temporary number that's been typed in
	tempNumber : "",

	type : "",

	// Temp result 
	temp : function (val) {


		this.tempNumber += val.toString();
		this.displayResult(this.tempNumber);
	},

	// Calculate result
	calculate : function(type) {

		// Set type to current value
		this.type = type;

		// Make tempBumber become total result
		if(this.total == "") {

			this.total = this.tempNumber;
		} 

		// Reset tempNumber to empty string
		this.tempNumber = "";


		// logs
		// console.log("total: ", this.total);
		// console.log("temp: ", this.tempNumber);	

		// Display total amount 
		this.displayResult(this.total);
	},

	// Resets calculator
	clear : function() {

		// Reset all values & strings
		this.total = 0;
		this.tempNumber = "";
		this.type = "";

		// Push zero back to results
		this.displayResult(this.total);
	},

	// Function when click on equals button
	equals : function() {

		switch(this.type) {

			case "add" : this.total = Number(this.total) + Number(this.tempNumber);
				break;
			case "subtract" : this.total = Number(this.total) - Number(this.tempNumber);
				break;
			case "multiply" : this.total = Number(this.total) * Number(this.tempNumber);
				break;
			case "divide" : this.total = Number(this.total) / Number(this.tempNumber);
				break;
		}

		this.displayResult(this.total);
	},

	// Displays final result on the client side
	displayResult : function(val) {

		resultHTML.innerHTML = val;
	}
};





