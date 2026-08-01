function outer(){
    let username = "lekhraj"
    function inner(){
        console.log("inner", username);
    }
    inner()
}

outer()
// console.log("TOO OUTER", username);