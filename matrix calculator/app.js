function createMatrices(){
    let size=document.getElementById("size").value;
    createMatrix("matrixA",size);
    createMatrix("matrixB",size);
    let resultdiv=document.getElementById("result");
    if(resultdiv){
        resultdiv.innerHTML="";
    }
    
}

document.getElementById("operator").innerHTML="+";
function setOperator(op){
    document.getElementById("operator").innerText=op;
}
document.addEventListener("DOMContentLoaded",function(){
createMatrices();
});

function createMatrix(id,size){
    let container=document.getElementById(id);
    container.innerHTML=""
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            let input=document.createElement("input");
            input.type="number";
            input.value=0;
            container.appendChild(input);
        }
        container.appendChild(document.createElement("br"));
    }
}

function getMatrix(id,size){
    let inputs=document.getElementById(id).getElementsByTagName("input");
    let matrix=[];
    let index=0;

    for(let i=0;i<size;i++){
        matrix[i]=[];
        for(let j=0;j<size;j++){
            matrix[i][j]=Number(inputs[index++].value);
        }
    }
    return matrix;
}

function displayMatrix(matrix){
    let html= "";
    matrix.forEach(row=>{
        row.forEach(val=>{
            html+=`<input value="${val}" disabled>`;
        });
        html+="<br>"
    });
    document.getElementById("result").innerHTML=html;
}


function add(){
    setOperator("+");
    calculate("add");

}
function subtract(){
    setOperator("-");
    calculate("sub");
}
function multiply(){
    setOperator("*");
    calculate("mul");
}
function calculate(operation){
    let size=Number(document.getElementById("size").value);
    let A=getMatrix("matrixA",size);
    let B=getMatrix("matrixB",size);
    let result=[];
    for(let i=0;i<size;i++){
        result[i]=[];
        for(let j=0;j<size;j++){
            if(operation==="add"){
                result[i][j]=A[i][j]+B[i][j];
            }else if(operation === "sub"){
                result[i][j]=A[i][j]-B[i][j];
            }else{
                result[i][j]=0;
                for(let k=0;k<size;k++){
                    result[i][j]+=A[i][k]*B[k][j];
                }
            }
        }
    }
    displayMatrix(result);
}

