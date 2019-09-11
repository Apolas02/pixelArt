window.onload = function(){
    let container = document.querySelector('#canvas');
    container.style.display = 'grid';
    container.style.gridTemplate = 'repeat(20, 1fr) / repeat(20, 1fr)'

    
    for (let i = 0; i < 400; i++) {
        let box = document.createElement('span');
        box.style.height = '8px'
        box.style.width = '8px'
        box.style.border = '1px solid black';
        box.style.backgroundColor = 'white';
        box.addEventListener('click', function(event){
            box.style.backgroundColor = activeColor;
        });
        container.appendChild(box);
    }
    let colorPicker = document.querySelector('#colorPicker');
    let activeColor = 'green'
    let colorPallet = ['black', 'brown', 'red', 'orange','yellow', 'green', 'cyan', 'blue', 'purple', 'pink']

    colorPicker.style.margin = 'auto';
    colorPicker.style.display = 'grid';
    colorPicker.style.gridTemplate = 'repeat(1, 1fr) / repeat(20, 1fr)';
    colorPicker.style.border = '1px solid black';
    
    for (i in colorPallet) {
        let box = document.createElement('span');
        box.style.height = '8px'
        box.style.width = '8px'
        box.style.border = '1px solid black';
        box.style.backgroundColor = colorPallet[i];
        box.addEventListener('click', function(event){
            activeColor = box.style.backgroundColor;
        });
        colorPicker.appendChild(box);
    }



    document.body.appendChild(container);
    document.body.appendChild(colorPicker);


}