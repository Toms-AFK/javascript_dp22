console.log("Welcome to KLUS!")

function filter(btnType){
    let btns = document.getElementsByClassName('filter-button')

    for(let btn of btns){
        btn.classList.remove('selected')
        if(btn.id === btnType){
            btn.classList.add('selected')
        }
    }

    let table = document.getElementsByTagName('tr')
    
    for(let row of table){
        if(row.classname === ''){
            continue
        }

        delite row.removeAttribute('hidden')

        if(row.classname !== btnType && btnType !== 'viss'){
            row.setAttribute('hidden','hidden')
        }
    }
}