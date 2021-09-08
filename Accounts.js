var account = []; 

var cart = []; 

var item = []; 

var total = 0; 

function ShowSignup() { 

    document.getElementById("signup").style.display = "block"; 

} 

function validte() { 

    var isName = true; 

    var isEmail = true; 

    var isphn = true; 

    var ispass = true; 

    var isconPass = true; 

    var nme = document.getElementById("name"); 

    if (nme.validity.patternMismatch) { 

        alert('Please recheck your name spelling.'); 

        isName = false; 

    }  

    var eml = document.getElementById("email"); 

    if (eml.validity.patternMismatch) { 

        alert('Please recheck your email.'); 

        isEmail = false; 

    } 

    var phn = document.getElementById("phn"); 

    if (phn.validity.patternMismatch) { 

        alert('Phone Number is not correct.'); 

        isphn = false; 

    }  

    var pass = document.getElementById("paswrd"); 

    if (pass.validity.patternMismatch) { 

        alert('Password should have 8 or more characters.'); 

        ispass = false; 

    }  

    var conpass = document.getElementById("conPswrd").value; 

    if (conpass != pass.value) { 

        alert('password incorrect.'); 

        isconPass = false; 

    }  

    if (isName && isEmail && isphn && ispass && isconPass) { 

        account.push(nme.value, email.value, phn.value, pass.value); 

        alert('Account created'); 

        document.getElementById("signup").style.display = "none"; 

    } else { 

        alert('Please provide correct information.'); 

    } 

} 

function logIn() { 

    var usr = document.getElementById("emailSI").value; 

    var password = document.getElementById("paswrd").value; 

    if (usr == account[1] && password == account[3]) { 

        window.location.href = "OrderList.html"; 

    } else { 

        alert('Wrong credentials.') 

    } 

} 

function selectPriceCFS() { 

    if (document.getElementById("cfsSize").value == "Small") { 

        document.getElementById('prCFS').innerHTML = 410; 

    } else if (document.getElementById("cfsSize").value == "Large") { 

        document.getElementById('prCFS').innerHTML = 1650; 

    } else { 

        document.getElementById('prCFS').innerHTML = 1100; 

    }  

} 

function selectPriceCC() { 

    if (document.getElementById("CCSize").value == "Small") { 

        document.getElementById('prCC').innerHTML = 410; 

    } else if (document.getElementById("CCSize").value == "Large") { 

        document.getElementById('prCC').innerHTML = 1650; 

    } else { 

        document.getElementById('prCC').innerHTML = 1100; 

    } 

} 

function selectPriceCF() { 

    if (document.getElementById("cfSize").value == "Small") { 

        document.getElementById('prCF').innerHTML = 410; 

    } else if (document.getElementById("cfSize").value == "Large") { 

        document.getElementById('prCF').innerHTML = 1650; 

    } else { 

        document.getElementById('prCF').innerHTML = 1100; 

    } 

} 

function selectPriceCF() { 

    if (document.getElementById("cfSize").value == "Small") { 

        document.getElementById('prCF').innerHTML = 410; 

    } else if (document.getElementById("cfSize").value == "Large") { 

        document.getElementById('prCF').innerHTML = 1650; 

    } else { 

        document.getElementById('prCF').innerHTML = 1100; 

    } 

} 

function bill() { 

    if (document.getElementById("cfs").checked) { 

        var qty = parseInt(document.getElementById("qtyCfs").value); 

        var prc = parseInt(document.getElementById("prCFS").innerHTML); 

        total += qty * prc; 

        item.push( document.getElementById("cfs").value,qty * prc); 

        cart.push(item); 

    }  

    if (document.getElementById("CC").checked) { 

        var qty = parseInt(document.getElementById("qtyCC").value); 

        total += qty * prc; 

        var prc = parseInt(document.getElementById("prCC").innerHTML); 

        item.push(document.getElementById("CC").value,qty * prc); 

        cart.push(item); 

    }  

    if (document.getElementById("cf").checked) { 

        var qty = parseInt(document.getElementById("qtyCF").value); 

        var prc = parseInt(document.getElementById("prCF").innerHTML); 

        total += qty * prc; 

        item.push(document.getElementById("cf").value,qty * prc); 

        cart.push(item); 

    }  

    showCart(); 

} 

var total = 0; 

function showCart() { 

    window.alert("Your Order: " + cart[0] +" with total price "+total); 

} 
