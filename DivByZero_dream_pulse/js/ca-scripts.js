//let customerName = "Alliance";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {
    let customerName = "Alliance";
    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->

    let header = document.getElementById('tm-header');
    header.textContent = customerName;

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
    let intro = document.getElementById('introheader');
    intro.textContent = customerName;
};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    whiteRect = document.getElementsByClassName('tm-white-rect')
    for(let i = 0; i < whiteRect.length; i++) {
        whiteRect[i].className = 'tm-blue-rect'
    } 
        
};


function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    let social = document.getElementsByClassName('tm-social-links');
    social.hideElement = true;
};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
    let introPara1 = document.getElementById('intropara1');
    introPara1.textContent = 'Founded 1899';
    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
    let introPara2 = document.getElementById('intropara2');
    introPara2.textContent = 'World leader in engineering solutions';
    //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
    let aboutPara1 = document.getElementById('aboutpara1');
    aboutPara1.textContent = 'Our company was founded by Major Thomas Hildebrand in 1899.'
    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
    let aboutPara2 = document.getElementById('aboutpara2');
    aboutPara2.textContent = 'Since then, it has grown to become the world leader in warehouse automation engineering solutions.'
    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
    let addressPara = document.getElementById('addresspara');
    addressPara.textContent = 'PH: 919-555-1212'
    console.log(addressPara.textContent);
}; 



