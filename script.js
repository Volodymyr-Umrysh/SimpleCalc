let obj = {
    '1':{
        inputs:document.querySelectorAll('div[data-row="1"] input'),
        resultContainer:document.querySelector('.result1')
    },
    '2':{
        inputs:document.querySelectorAll('div[data-row="2"] input'),
        resultContainer:document.querySelector('.result2')
    },
    '3':{
        inputs:document.querySelectorAll('div[data-row="3"] input'),
        resultContainer:document.querySelector('.result3')
    }
}

let checkboxes = document.querySelectorAll('#blankCheckbox')


document.getElementById("result").onclick=function () {
    let sumAction = document.querySelector('#radio-sum')
    let checkedRows =  Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.dataset.row)
    console.log(checkedRows)
    checkedRows.forEach(row => {
        let result = 0
        obj[row].inputs.forEach(input => {
            let value = +input.value
            if(sumAction.checked && value){
                result += value
            }else if(value){
                result =!result?value:result *value
            }
            
        })
        obj[row].resultContainer.innerText = result
    })
}