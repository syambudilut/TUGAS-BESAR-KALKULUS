let expr;

function hitungTurunan(){
    const inputFunction = document.getElementById("inputFunction").value;
try{
    expr = math.parse(inputFunction);
    const derivative=math.derivative(expr ,'x').toString();
    document.getElementById("result").textContent = derivative;
} catch (eror){
    alert("error : Masukan fungsi yang valid")
}

}