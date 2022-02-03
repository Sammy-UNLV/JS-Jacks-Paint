function configureListeners() {
    var images = document.getElementsByTagName('img');   
     for (var i = 0; i < images.length; i++) {    

        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false) 
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)        
    } 
 
}

function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }    
    console.log(event.target.id)
    getProductInfo(event.target.id); 

}


function removeOpacity(event) {
     if (this.classList.contains('dim')){
        this.classList.remove('dim');
    }

    // let element = document.getElementById('ppg');
    //     element.textContent = '';
        
    // let color = document.getElementById('color');
    //     color.textContent = ''; 
        
    let divNum = event.target.id.replace('pn', 'div');
    document.getElementById(divNum).innerHTML = "";
    event.preventDefault();    
}

function changeImage(elementId) {
    let image = document.getElementById('imgDisplay');
    image.src = elementId.src;
}

function getProductInfo(partNumber) {
    let price;
    let colorName; 
    let divNum = partNumber.replace('pn', 'div');
    switch (partNumber) {
        case 'pn1':           
            price = '$19.99'
            colorName = 'Lime Green'
            updatePrice(colorName, price, divNum)        
            break;           
        case 'pn2':
            price = '$12.99'
            colorName = 'Medium Brown' 
            updatePrice(colorName, price, divNum)     
            break;            
        case 'pn3':
            price = '$11.99'
            colorName = 'Royal Blue'   
            updatePrice(colorName, price, divNum)   
            break;   
        case 'pn4':
            price = '$14.99'
            colorName = 'Bright Red'            
            updatePrice(colorName, price,divNum)   
            break;   
        case 'pn5':
            price = '$9.99'
            colorName = 'Solid White' 
            updatePrice(colorName, price, divNum)              
            break;   
        case 'pn6':
            price = '$15.99'
            colorName = 'Solid Black'   
            updatePrice(colorName, price, divNum)            
            break;   
        case 'pn7':
            price = '$8.99'
            colorName = 'Medium Blue'       
            updatePrice(colorName, price, divNum)        
            break;   
        case 'pn8':
            price = '$16.99'
            colorName = 'Light Purple'      
            updatePrice(colorName, price, divNum)         
            break;   
        case 'pn9':
            price = '$17.99'
            colorName = 'Bright Yellow'                       
            updatePrice(colorName, price, divNum)   
            break;   
          default:              
    }

    function updatePrice(colorName, price, divNum)
    {     
        //commented out so my own script runs.  
        // console.log(`${colorName}: ${price} at ${divNum}`); 
        // let ppg = document.getElementById('ppg');
        // ppg.textContent = price;
        
        // let color = document.getElementById('color');
        // color.textContent = colorName;
        document.getElementById(divNum).innerHTML = `${colorName}: ${price}`;
       
        
    }
    
}
