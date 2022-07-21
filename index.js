const textArea = document.querySelector('#input')
const btn = document.querySelector('#btn')


btn.addEventListener('click', visualize)

function visualize() {
    if (!validateFormat()) {
        alert('格式不正确')
        throw 'listbinds 格式不正确'
    }
    let keyBindsArr = textArea.value.split('\n')
    // console.log(keyBindsArr.length)
    let errorBind = [], mouseBind = []
    for (const bind of keyBindsArr) {
        handleBind(bind, errorBind, mouseBind)
    }
    showMouseBind(mouseBind)
    showErrBind(errorBind)
}

/**
 * bind 中必须有且只有一个`=`
 * @param bind 类似 `"mouse1" = "+attack1"`的格式
 * @returns {boolean}
 */
function valideBind(bind) {
    const tempArr = bind.split('=')
    return tempArr.length === 2 && tempArr[0] !== '' && tempArr[1] !== ''
}

function highlightKey(key, bind) {
    // console.count('highlightKey')
    // console.log(key)
    const keyElm = document.querySelector(".key[data-selector='" + key.toLowerCase() + "']")
    keyElm.classList.add('has-bound')
    keyElm.setAttribute('title', bind)
    keyElm.setAttribute('style', "cursor: help;")
}



function handleBind(bind, errorBind, mouseBind) {
    if (!valideBind(bind)) {
        errorBind.push(bind)
    }
    let temp = bind.replaceAll('"', '')
    // console.log(temp)
    let tempArr = temp.split('=')
    tempArr = tempArr.map(each => each.trim())
    const [key, bound] = tempArr
    if (key.toUpperCase().includes('MOUSE')
        || key.toUpperCase().includes('MWHEEL')) {
        mouseBind.push(bind)
        return
    }
    highlightKey(key, bind)
}

/**
 * 内容必须要有换行
 */
function validateFormat() {
    const keyBinds = textArea.value
    return keyBinds.match(/[\r\n]/g)
}

function showMouseBind(mouseBind) {
    const elm = document.querySelector('.mouse-bind')
    elm.innerHTML = ''
    const pElm = document.createElement('h2')
    pElm.innerText = 'mouse binds'
    elm.appendChild(pElm)
    for (const bind of mouseBind) {
        const pElm = document.createElement('p')
        pElm.innerText = bind
        elm.appendChild(pElm)
    }
}

function showErrBind(errorBind) {
    const elm = document.querySelector('.error-bind')
    elm.innerHTML = ''
    const pElm = document.createElement('h2')
    pElm.innerText = 'error binds'
    elm.appendChild(pElm)
    for (const bind of errorBind) {
        const pElm = document.createElement('p')
        pElm.innerText = bind
        elm.appendChild(pElm)
    }
}
