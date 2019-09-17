window.onload = function(){
    let container = document.querySelector('#canvas');
    container.style.display = 'grid';
    container.style.gridTemplate = 'repeat(100, 1fr) / repeat(100, 1fr)'
    
    

    for (let i = 0; i < 10000; i++) {
        let box = document.createElement('span');
        box.style.height = '5px'
        box.style.width = '5px'
        box.style.border = '0px solid black';
        box.style.backgroundColor = 'white';
        let mouseState = 0

        this.addEventListener('mousedown', function(){
            mouseState = 1;
        });
        this.addEventListener('mouseup', function(){
            mouseState = 0;
        });
        box.addEventListener('mouseover', function(){
            if (mouseState === 1){
            box.style.backgroundColor = activeColor;
            }
        });
        
        container.appendChild(box); 
    }
    

    let colorPicker = document.querySelector('#colorPicker');
    let activeColor = 'green'
    let colorPallet = ['black', 'brown', 'red', 'orange','yellow', 'green', 'cyan', 'blue', 'purple', 'pink', 'white']

    colorPicker.style.margin = 'auto';
    colorPicker.style.display = 'grid';
    colorPicker.style.gridTemplate = 'repeat(20, 1fr) / repeat(20, 1fr)';
    // colorPicker.style.border = '1px solid black';
    
    for (i in colorPallet) {
        let box = document.createElement('span');
        box.style.height = '23px'
        box.style.width = '23px'
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