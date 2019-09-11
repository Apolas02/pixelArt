window.onload = function(){
    let container = document.querySelector('#canvas');
    container.style.height = '200px';
    container.style.width = '200px';
    container.style.display = 'grid';
    container.style.gridTemplate = 'repeat(8, 1f) / repeat(8, 1f)'

    
    for (let i = 0; i < 400; i++) {
        let box = document.createElement('span');
        box.style.border = '1px solid black';
        box.style.backgroundColor = 'white';

        container.appendChild(box);
    }
    document.body.appendChild(container);
}