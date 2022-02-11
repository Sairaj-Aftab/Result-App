
function sendLocal(key, variable) {
    let strr = JSON.stringify(variable)
    localStorage.setItem(key, strr)
    return true;
}
function getLocal(key) {
    let arr = localStorage.getItem(key)
    return arr ? JSON.parse(arr) : false;
}

// ------Produts Template-----------//

function sendProduct(key, variable) {
    let strr = JSON.stringify(variable);
    localStorage.setItem(key, strr);
    return true;
}
function getProduct(key) {
    let arr = localStorage.getItem(key);
    return arr ? JSON.parse(arr) : false;
}