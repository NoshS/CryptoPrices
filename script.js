//Uses this site for free API
//https://min-api.cryptocompare.com/

//Steps to gt API DATA
var request = new XMLHttpRequest();
var url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,CAD"; //Response = {"BTC":{"USD":7438.95,"CAD":10082.23},"ETH":{"USD":463.66,"CAD":628}}
request.responseType = "";
request.open("GET", url, true);
request.send();


//Process
request.onload = function() {
	if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        
    	var busd = document.getElementById('BUSD');
    	var bcad = document.getElementById('BCAD');
    	var eusd = document.getElementById("EUSD");
    	var ecad = document.getElementById("ECAD");
    	busd.textContent = data['BTC']['USD'];
    	bcad.textContent = data['BTC']['CAD'];
    	eusd.textContent = data['ETC']['USD'];
    	ecad.textContent = data['ETC']['USD'];
	    
    }
};
