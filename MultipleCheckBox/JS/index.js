console.log('Playing with CheckBox');

let firstId;
let secondId;
function getVal(val){
    if(firstId == undefined)
        firstId = val;
    else if(firstId != undefined){
        secondId = val;
        if(confirm('Do u want to select in between'))
            markAllValues(firstId,secondId);
        else{
            firstId = secondId;
        }
    }

}

function markAllValues(id1,id2){
    let index1 = Number(id1[id1.length - 1]);
    let index2 = Number(id2[id2.length - 1]);
    if(index1 <= index2){
        for(let iter = index1;iter <= index2;iter++){
            let element = document.getElementById(`Word${iter}`);
            element.style.textDecoration = 'line-through';
            document.getElementById(`panel${iter}`).checked = true;
        }
    }
    else{
        for(let iter = index1;iter >= index2;iter-- ){
            let element = document.getElementById(`Word${iter}`);
            element.style.textDecoration = 'line-through';
            document.getElementById(`panel${iter}`).checked = true;
        }
    }
}