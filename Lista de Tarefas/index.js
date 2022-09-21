const text = document.querySelector('input')
const btnInsert = document.getElementById('insert-button')
const btnDelete = document.getElementById('delete-button')
const ul = document.querySelector('ul')

let tasks = []

text.addEventListener('keypress', e => {
    if (e.key == 'Enter' && text.value != '') {
        setItemList()
    }
})

btnInsert.onclick = () => {
    if (text.value != '') {
        setItemList()
    }
}

function setItemList() {
    if (tasks.length > 20) {
        alert('Limite de tarefas atingido!')
        return
    }

    tasks.push({ 'item': text.value, 'status': '' })
    updateList()
}

function updateList() {
    localStorage.setItem('to-do-List', JSON.stringify(tasks))
    loadItens()
}

function loadItens() {
    ul.innerHTML = ''
    tasks = JSON.parse(localStorage.getItem('to-do-List')) ?? []
    tasks.forEach((item, i) => {
        insertItemOnScreen(item.item, item.status, i)
    })

}

function insertItemOnScreen(){
    
}