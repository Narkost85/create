const maindiv = document.createElement('div');
const navmenu = document.createElement('div');
const userlogo = document.createElement('img');
userlogo.src = 'IMG/1.jpg';
userlogo.alt = 'img';
userlogo.style = 'width:150px;'
maindiv.setAttribute('style', 'background: black; position: relative; padding-left: 150px;');
navmenu.setAttribute('style', 'position: fixed; top:0; left:0; height:100vh; width: 150px; background: #222 ');
document.body.appendChild(maindiv);
maindiv.appendChild(navmenu);
navmenu.appendChild(userlogo);
const logodiv = document.createElement('div');
navmenu.appendChild(logodiv);
for(let i = 0; i < 4; i++) {
    const divitem = document.createElement('div');
    divitem.style = 'width:150px; height:120px; padding: 20px 10px; text-align:center; color: white; cursor: pointer;';
    const iteg = document.createElement('i');
    iteg.style = 'font-size:45px;'
    divitem.appendChild(iteg);
    logodiv.appendChild(divitem);
    divitem.className = 'navItem';
    i == 0 ? iteg.className = 'fa fa-home' : i == 1 ? iteg.className = 'fa fa-user' : i == 2 ? iteg.className = 'fa fa-eye' : iteg.className = 'fa fa-envelope';
    const text = document.createElement('p');
    text.style = 'margin-top: 10px; font-size: 18px;';
    divitem.appendChild(text);
    i == 0 ? text.append('HOME') : i == 1 ? text.append('ABOUT') : i == 2 ? text.append('PHOTOS') : text.append('CONTACT');
}

const navItem = document.querySelectorAll('.navItem');
navItem.forEach(item => {
    item.onmouseover = () => {
        item.style.background = '#444';
    };
    item.onmouseleave = () => {
        item.style.background = '#222';
    };
    // item.onclick = () => {
    //     navItem.forEach(allI => allI.style.background = '#222');
    //     item.style.background = 'red';
    // };
});
const header = document.createElement('div');
const headimg = document.createElement('img');
maindiv.appendChild(header);
headimg.src = 'IMG/2.jpg';
header.setAttribute('style', 'width: 100%; text-align: center;');

const vernagir = document.createElement('div');
header.appendChild(vernagir);
header.appendChild(headimg);
const anun = document.createElement('h1');
const text1 = document.createElement('p');
vernagir.appendChild(anun);
vernagir.appendChild(text1);
vernagir.setAttribute('style', 'color:white; font-family: cursive; font-size:30px; text-align:center; padding-top: 80px;');
anun.append("I'm John Doe.");
text1.append('Photographer and Web Designer.');
text1.setAttribute('style', 'font-size:20px; margin-top:35px;');
const section1 = document.createElement('div');
section1.setAttribute('style', 'width: 65%; margin: 0 auto;'); 
header.after(section1);
const text2 = document.createElement('h2');
text2.append('My Name');
section1.appendChild(text2);
text2.setAttribute('style', 'font-size:32px; font-family:cursive; color:white; border-bottom:1px solid white; width: 200px; padding-bottom: 25px; font-weight: normal;');
const text3 = document.createElement('p');
text2.after(text3);
text3.innerText = 'Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
text3.setAttribute('style', 'font-size:17px; font-family:cursive; color:grey; margin-top: 25px; text-align:justify;');
const text4 = document.createElement('h2');
text4.innerText = 'My Skills';
text3.after(text4);
text4.style = 'font-size:32px; font-family:cursive; color:white; width: 200px; padding-bottom: 25px; font-weight: normal; margin-top: 35px;';
let size = 90;
for(let i = 0; i < 3; i++) {
    const section2 = document.createElement('div');
    const text5 = document.createElement('h5');
    section2.appendChild(text5);
    const spa = document.createElement('span');
    i == 1 ? size = 80 : i == 2 ? size = 70 : '';
    spa.style = `width:100%; height: 25px; margin-top: 20px; display:block; background: linear-gradient(to right, grey ${size}%, #fff 10%);`;
    section2.appendChild(spa);
    text5.style = 'font-size:20px; font-family:cursive; color:grey; margin-top: 25px; text-align:justify; letter-spacing:7px';

    section1.appendChild(section2)
    i == 0 ? text5.innerText = 'Photography': i == 1 ? text5.innerText = 'Web Design': text5.innerText = 'Photoshop';
}
const section3 = document.createElement('div');
section1.appendChild(section3);
section3.style = 'background: white; display:flex; margin-top: 40px; justify-content: space-around; padding: 15px 0;';
let wi = 0;
while(wi < 4){
    const info = document.createElement('div');
    info.style = 'height: 100px; display:grid; align-content: center; justify-content:center;text-align:center;';
    section3.appendChild(info);
    const numb = document.createElement('p');
    numb.style = 'font-size: 36px;';
    const text6 = document.createElement('p');
    text6.style = 'font-size: 18px;';

    info.appendChild(numb);
    info.appendChild(text6);
    wi++;
    if(wi == 0) {
        numb.innerText = '11+';
        text6.innerText = 'Partners';
    } else if(wi == 1) {
        numb.innerText = '55+';
        text6.innerText = 'Projects Done';
    } else if(wi == 2) {
        numb.innerText = '89+';
        text6.innerText = 'Happy Clients';
    } else {
        numb.innerText = '150+';
        text6.innerText = 'Meetings';
    }
            
}
const but = document.createElement('button');
section1.appendChild(but);
but.innerHTML = '<i class="fa fa-download"></i>  Download Resume';
but.style = 'border:none; outline:none; padding: 17px 35px; margin-top:30px; cursor:pointer; background: white';
but.onmouseover = () => but.style.background = 'grey';
but.onmouseleave = () => but.style.background = 'white';
const section4 = document.createElement('div');
section4.style = 'margin:0 auto; width:65%; padding-top: 70px;';
section1.after(section4);
const text7 = document.createElement('h2');
section4.appendChild(text7);
text7.prepend('My Price');
text7.style = 'font-size:32px; font-family:cursive; color:white; width: 200px; padding-bottom: 25px; font-weight: normal;';
const infodiv = document.createElement('div');
section4.appendChild(infodiv);
infodiv.style = "width:100%; background-color: black; display:flex; justify-content:space-between;";
let arr1 = ['Web Design', 'Photography', '5GB Storage', 'Mail Support', '<span style="font-size:36px; color:black; font-weight:bold;">$ 10</span> per month'];
let arr2 = ['Web Design', 'Photography', '50GB Storage', 'Endless Support', '<span style="font-size:36px; color:black; font-weight:bold;">$ 50</span> per month'];
for(let i = 0; i < 2; i++) {

    const infoitem = document.createElement('div');
    infodiv.appendChild(infoitem);
    infoitem.style = 'width: 49% ; height:100%; background-color: white; text-align:center; filter:brightness(0.5);';
    infoitem.onmouseover = () => infoitem.style.filter = 'brightness(1)';
    infoitem.onmouseleave = () => infoitem.style.filter = 'brightness(0.5)';
    const headDiv = document.createElement('div');
    headDiv.style = 'background:grey; width:100%; height: 100px; color:white; font-size:24px; font-family:cursive; display:flex; justify-content:center; align-items:center;'
    i == 0 ? headDiv.innerText = 'BASIC' : headDiv.innerText = 'PRO';

    infoitem.appendChild(headDiv);
    const ul = document.createElement('ul');
    infoitem.appendChild(ul);
    const foot = document.createElement('div');
    foot.style = 'padding:25px;'
    infoitem.appendChild(foot);

    for(let j = 0; j < 5; j++) {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.style = 'border-bottom: 1px dotted grey; height:60px; display:grid; justify-content:center; align-items:flex-start; align-content:center; color: grey; font-size:18px;';
        j == 4 ? li.style.height = '100px' : '';
        i == 0 ? li.innerHTML = arr1[j] : li.innerHTML = arr2[j];
 
    
    }
    const but3 = document.createElement('button');
    foot.appendChild(but3);
    but3.innerText = 'Sign up';
    but3.style = 'border:none; outline:none; background:lightgrey; font-size: 18px; color: grey; padding: 15px 25px;';
    but3.onmouseover = () => {
        but3.style.background = 'black';
        but3.style.color = 'white';
    }
    but3.onmouseleave = () => {
        but3.style.background = 'lightgrey';
        but3.style.color = 'grey';
    }
}






const grid = document.createElement('div');
section4.after(grid);
const text8 = document.createElement('h2');
grid.append(text8);
grid.style = 'margin:0 auto; width:65%; padding-top: 70px;';
text8.innerText = 'My Photos';
text8.style = 'font-size:32px; font-family:cursive; color:white; width: 200px; padding-bottom: 25px; font-weight: normal; border-bottom:1px solid white;';
const gridcont = document.createElement('div');
text8.after(gridcont);
gridcont.style = 'display:grid; grid-template-columns:repeat(2, 50%);grid-template-rows:repeat(18,60px); grid-gap: 10px 15px; margin-top: 25px;';
let arr = ['IMG/wedding.jpg', 'IMG/underwater.jpg', 'IMG/rocks.jpg', 'IMG/chef.jpg', 'IMG/wedding(1).jpg', 'IMG/sailboat.jpg', 'IMG/p6.jpg'];
for(let i = 0; i < 7; i++) {
    const nkar = document.createElement('img');
    gridcont.appendChild(nkar);
    nkar.src = arr[i];
    i == 0 ? nkar.style = 'grid-row:span 5' : i == 1 ? nkar.style = 'grid-row:span 8' : i == 2 ? nkar.style = 'grid-row:span 13' : i == 3 || i == 4 ? nkar.style = 'grid-row:span 5' : nkar.style = 'grid-row:span 6';


    nkar.style.width = '100%';
    nkar.style.height = '100%';

}
const section5 = document.createElement('div');
grid.appendChild(section5);
const text9 = document.createElement('h2');
section5.append(text9);
section5.style = 'padding-top:110px';
text9.innerText = 'Contact Me';
text9.style = 'font-size:32px; font-family:cursive; color:white; width: 200px; padding-bottom: 25px; font-weight: normal; border-bottom:1px solid white;';
const ul = document.createElement('h4');
section5.appendChild(ul);
ul.innerHTML = '<i class="fa fa-map-marker"></i> Chicago, US' ;
ul.style = 'color:white; font-size:18px; padding-top: 30px';
const text10 = document.createElement('h4');
section5.append(text10);
text10.innerText = 'Lets get in touch. Send me a message:';
text10.style = 'font-size:18px; font-family:cursive; color:white; padding-top: 50px; padding-bottom: 25px; font-weight: normal; ';
for(let l = 0; l < 4; l++){
    const inp = document.createElement('input');
section5.appendChild(inp);
inp.type = 'text';

inp.style = 'width: 100%; height:60px ; margin-top:25px: font-size:50px; margin-bottom:20px;';
l == 0 ? inp.placeholder = 'Name' : l == 1 ? inp.placeholder = 'Email' : l == 2 ? inp.placeholder = 'Subject' : inp.placeholder = 'Message';
};
const but2 = document.createElement('button');
section5.appendChild(but2);
but2.innerHTML = '<i class="fa fa-paper-plane"></i>  SEND MESSAGE';
but2.style = 'border:none; outline:none; padding: 17px 35px; margin-top:0px; cursor:pointer; background: white';
but2.onmouseover = () => but2.style.background = 'grey';
but2.onmouseleave = () => but2.style.background = 'white';
const footer = document.createElement('h2');
section5.appendChild(footer);
footer.innerHTML = '<i class="fa fa-facebook-square"></i> <i class="fa fa-instagram"></i> <i class="fa fa-pinterest"></i> <i class="fa fa-twitter"></i>';
footer.style = 'color:grey; padding-top: 100px; font-size: 26px; cursor:pointer';


const text11 = document.createElement('p');
section5.appendChild(text11);
text11.innerHTML = 'Powered by <a id="hasce" href="#">W3.css</a>';
text11.style = 'color:grey; font-size:20px; font-style: cursive; padding-top: 30px;padding-bottom: 100px;';
hasce.style = 'color:grey';
hasce.onmouseover = () => hasce.style.color = 'grey';
hasce.onmouseleave = () => hasce.style.color = 'green';

