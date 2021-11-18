let min = Number.MAX_VALUE
let stack = []


function addElement(elem){
    if (stack.length == 0 || elem < min){
        min = elem
    }
    let pair = [elem, min]
    stack.push(pair)
}

function getLastElement(){
    if (stack.length == 0){
        console.log("Underflow")
        return -1
    }
    else{
        return stack[stack.length - 1][0]
    }
}

function removeLastElement(){
    if (stack.length == 0){
        console.log("Underflow")
    }
    else if (stack.length > 1){
        min = stack[stack.length -2][1]
    }
    else{
        min = Number.MAX_VALUE
    }
    stack.pop()
    console.log("Last Element Was Removed")
}

function getMinimum(){
    return stack[stack.length - 1][1]
}

    addElement(5);
    addElement(7);
    addElement(3);
    console.log("min element :: "+getMinimum() + "</br>");
    removeLastElement();