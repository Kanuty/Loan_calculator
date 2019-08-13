document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e){
	console.log("done");
	e.preventDefault();
	const value = document.getElementById('loan_value');
	const years = document.getElementById('loan_years');
	const percentage = document.getElementById('percentage');
	
	const result =  document.getElementById('loan_result_small');
	const totalPayment =  document.getElementById('loan_payment_small');
 	const totalInterest =  document.getElementById('loan_interest_small');

	const principal = parseFloat(value.value)
	const calculatedInterest = parseFloat(percentage.value) / 100 / 12;
	const calculatedPayments = parseFloat(years.value) * 12;

	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal * x * calculatedInterest)/(x-1);


	console.log(principal,calculatedInterest,calculatedPayments);
	console.log(x, monthly);


	if(isFinite(monthly)){
		result.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
	} else {
		showError("Please check your numbers!");
	}
	// e.preventDefault();

}


function showError(error){
	const errorDiv = document.createElement('div');
	
	const form = document.querySelector("#loan-form");
	const card = document.querySelector("#card");


	errorDiv.idName = "error";
	errorDiv.className = "center-align red-text alert";
	errorDiv.appendChild(document.createTextNode(error));
	card.insertBefore(errorDiv, form);
	

	console.error("meh");

	setTimeout(clearError, 2500);
};
	function clearError(){
		document.querySelector('.alert').remove();
	}



