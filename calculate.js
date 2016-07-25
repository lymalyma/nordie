var nordie = {};

nordie.calculateTotal = function(price, discount, rewards, salestax) {
	return (price-rewards) * (1.0 - discount) * (1.0 + salestax);
};

nordie.getPrice = function() {
	var e = document.getElementById("price");
	return parseFloat(e.value);
};
nordie.getDiscount = function() {
	var e = document.getElementById("discount20");
	if (e.checked) {
		return 0.20;
	} else {
		return 0.33;
	}
};

nordie.getRewards = function() {
	var e = document.getElementById("rewards");
	return parseFloat(e.value);
};
nordie.getSalestax = function() {
	var e = document.getElementById("salestax");
	if (isNumeric(e.value) == true) {
			tax = parseFloat(e.value/100.00); 
			return tax;
	} else {
		window.alert("Please enter a valid sales state tax");
	}

};

nordie.getInputData = function() {
	var data = {};
	data.price = nordie.getPrice();
	data.discount = nordie.getDiscount();
	data.rewards = nordie.getRewards();
	data.salestax = nordie.getSalestax();
	return data;
};

nordie.showTotal = function() {
	var data = nordie.getInputData();
	var total = nordie.calculateTotal(data.price, data.discount,
		data.rewards, data.salestax);
		total.toFixed(2);
	document.getElementById("total").innerHTML = "Total: $ " + total;
};

document.getElementById("calculateBtn").onclick = nordie.showTotal;


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
