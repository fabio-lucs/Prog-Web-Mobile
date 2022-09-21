const texto = document.querySelector('input')
const btnInsert = document.querySelector('.divInsert button')
const btnDeleteAll = document.querySelector('.header button')
const ul = document.querySelector('ul')

var tasks = []

btnDeleteAll.onclick = () => {
    tasks = []
    updateList()
}

texto.addEventListener('keypress', e => {
    if (e.key == 'Enter' && texto.value != '') {
        setItemDB()
    }
})

btnInsert.onclick = () => {
    if (texto.value != '') {
        setItemDB()
    }
}

function setItemDB() {
    if (tasks.length >= 20) {
        alert('Limite máximo de 20 itens atingido!')
        return
    }

    tasks.push({ 'item': texto.value, 'status': '' })
    updateList()
}

function updateList() {
    localStorage.setItem('todolist', JSON.stringify(tasks))
    loadItens()
}

function loadItens() {
    ul.innerHTML = "";
    tasks = JSON.parse(localStorage.getItem('todolist')) ?? []
    tasks.forEach((item, i) => {
        insertItemTela(item.item, item.status, i)
    })
}

function insertItemTela(text, status, i) {
    const li = document.createElement('li')

    li.innerHTML = `
    <div class="divLi">
      <input type="checkbox" ${status} data-i=${i} onchange="done(this, ${i});" />
      <span data-si=${i}>${text}</span>
      <button onclick="removeItem(${i})" data-i=${i}><i class='bx bx-trash'></i></button>
    </div>
    `
    ul.appendChild(li)

    if (status) {
        document.querySelector(`[data-si="${i}"]`).classList.add('line-through')
    } else {
        document.querySelector(`[data-si="${i}"]`).classList.remove('line-through')
    }

    texto.value = ''
}

function done(chk, i) {

    if (chk.checked) {
        tasks[i].status = 'checked'
    } else {
        tasks[i].status = ''
    }

    updateList()
}

function removeItem(i) {
    tasks.splice(i, 1)
    updateList()
}

loadItens()