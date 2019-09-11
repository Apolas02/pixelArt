window.onload = function(){
    let container = document.querySelector('#canvas');
    container.style.display = 'grid';
    container.style.gridTemplate = 'repeat(20, 1f) / repeat(20, 1f)'

    
    for (let i = 0; i < 400; i++) {
        let box = document.createElement('span');
        box.style.height = '8px'
        box.style.width = '8px'
        box.style.border = '1px solid black';
        box.style.backgroundColor = 'white';

        container.appendChild(box);
    }
    document.body.appendChild(container);
}