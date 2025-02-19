function makeRed(){
    document.body.style.backgroundColor = 'red'
}

const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue; 
function makeBlue (){
    document.body.style.backgroundColor = 'blue'
}

const makeButtonPink = document.getElementById('make-pink')
makeButtonPink.addEventListener('click', function makePink(){
    document.body.style.backgroundColor = 'pink'
})

document.getElementById('make-green').addEventListener('click', function (){
    document.body.style.backgroundColor = 'green'
}) 


function handleOnClick(){
    const handleStatus = document.getElementById('handle-status')
    handleStatus.innerText = 'Handled by function'
}

document.getElementById('event-listener').addEventListener('click', function(){
    const handleStatus = document.getElementById('handle-status')
    handleStatus.innerText = 'Text updated by addEventlistener'
})

const updateButton = document.getElementById('btn-update')
updateButton.addEventListener('click', function(){
    const inputField = document.getElementById('input-text')
    inputText = inputField.value;
    const p = document.getElementById('input-text-display')
    p.innerText = inputText;
    inputField.value = ''
})

document.getElementById('post-btn').addEventListener('click', function(){
    const newCommentField = document.getElementById('new-comment')
    const newComment = newCommentField.value;
    const comment = document.getElementById('comment')
    const p = document.createElement('p')
    p.innerText = newComment;
    comment.appendChild(p)
    newCommentField.value = ''
})

document.getElementById('input-secret').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-dlt')
    if(text === 'delete'){
        deleteButton.removeAttribute('disabled')
    }
    else{
        deleteButton.setAttribute('disabled', true);
    }
})
document.getElementById('btn-dlt').addEventListener('click', function(){
    const secretText = document.getElementById('secret-text')
    secretText.style.display = 'none'
})