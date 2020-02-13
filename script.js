let obj = {
    '1':{
        inputs:document.querySelectorAll('div[data-row="1"] input'),
        resultContainer:document.querySelector('.result1'),
        inputContainer:document.querySelector('.inputNumbers1')
    },
    '2':{
        inputs:document.querySelectorAll('div[data-row="2"] input'),
        resultContainer:document.querySelector('.result2'),
        inputContainer:document.querySelector('.inputNumbers2')
    },
    '3':{
        inputs:document.querySelectorAll('div[data-row="3"] input'),
        resultContainer:document.querySelector('.result3'),
        inputContainer:document.querySelector('.inputNumbers3')
    }
}
document.querySelector('.checkBoxs').addEventListener('change', function (e) {
let checkboxRow = e.target.dataset.row
let isChecked = e.target.checked
if(isChecked){
    obj[checkboxRow].inputContainer.style.backgroundColor = '#28a745'
}else{
    obj[checkboxRow].inputContainer.style.backgroundColor = ''
}

    
})

let checkboxes = document.querySelectorAll('#blankCheckbox')


document.getElementById("result").onclick=function () {
    let sumAction = document.querySelector('#radio-sum')
    let checkedRows =  Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.dataset.row)
  
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