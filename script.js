let header = document.createElement('header');
header.className = 'header';
header.style.width = '1440px';
header.style.height = '700px';
header.style.backgroundColor = 'black';
header.style.margin = '0 auto';
header.style.backgroundImage = 'url("Rectangle 2(1).png")';
header.style.backgroundSize = 'cover';
header.style.backgroundPosition = 'center';
document.body.appendChild(header);


let nav = document.createElement('nav');
nav.className = 'nav';
nav.style.width = '100%';
nav.style.height = '100px';
nav.style.backgroundColor = 'black';
nav.style.textAlign = 'center';
nav.style.lineHeight = '100px';
header.appendChild(nav);


let ul = document.createElement('ul');
ul.style.listStyle = 'none';
ul.style.padding = '0';
ul.style.margin = '0 auto';
ul.style.gap = '20px';
ul.style.display = 'flex';
ul.style.justifyContent = 'space-around';
nav.appendChild(ul);


let menuItems = ["static", "relative", "absolute", "fixed", "sticky", "z-index"];

menuItems.forEach(item => {
    let li = document.createElement('li');
    li.style.color = 'white';
    li.style.fontSize = '24px';
    li.style.cursor = 'pointer';
    li.textContent = item;
    ul.appendChild(li);
});


let div1 = document.createElement('div');
div1.style.width = '600px';
div1.style.height = '70px';
div1.style.backgroundColor = 'white';
div1.textContent = 'Position';
div1.style.fontSize = '36px';
div1.style.textAlign = 'center';
div1.style.lineHeight = '70px';
div1.style.margin = '50px auto';
div1.style.borderRadius = '10px';
header.appendChild(div1);


let papa = document.createElement('div');
papa.style.display = 'flex';
papa.style.justifyContent = 'space-around';
papa.style.marginTop = '50px';
header.appendChild(papa);


let mini = document.createElement('div');
mini.style.width = '400px';
mini.style.height = '400px';
mini.style.border = '2px solid white';
mini.style.position = 'relative';
papa.appendChild(mini);

let box1 = document.createElement('div');
box1.style.width = '200px';
box1.style.height = '200px';
box1.style.backgroundColor = 'red';
box1.style.position = 'absolute';
box1.style.top = '100px';
box1.style.left = '100px';
mini.appendChild(box1);

let box2 = document.createElement('div');
box2.style.width = '200px';
box2.style.height = '200px';
box2.style.backgroundColor = 'blue';
box2.style.position = 'absolute';
box2.style.top = '150px';
box2.style.left = '150px';
mini.appendChild(box2);


let mini1 = document.createElement('div');
mini1.style.width = '400px';
mini1.style.height = '400px';
mini1.style.border = '2px solid white';
mini1.style.position = 'relative';
papa.appendChild(mini1);

let box3 = document.createElement('div');
box3.style.width = '250px';
box3.style.height = '200px';
box3.style.backgroundColor = 'red';
box3.style.position = 'relative';
box3.style.top = '100px';
box3.style.left = '100px';
mini1.appendChild(box3);

let box4 = document.createElement('div');
box4.style.width = '200px'; 
box4.style.height = '200px';
box4.style.backgroundColor = 'blue';
box4.style.position = 'relative';
box4.style.top = '150px';
box4.style.left = '150px';
mini1.appendChild(box4);

let mini2 = document.createElement('div');
mini2.style.width = '400px';
mini2.style.height = '400px';
mini2.style.border = '2px solid white';
mini2.style.position = 'relative';
papa.appendChild(mini2);

let box5 = document.createElement('div');
box5.style.width = '200px';
box5.style.height = '200px';
box5.style.backgroundColor = 'red';
box5.style.position = 'relative';
box5.style.top = '100px';
box5.style.left = '100px';
mini2.appendChild(box5);

let box6 = document.createElement('div');
box6.style.width = '200px';
box6.style.height = '200px';
box6.style.backgroundColor = 'blue';
box6.style.position = 'absolute';
box6.style.top = '150px';
box6.style.left = '150px';
mini2.appendChild(box6);

let section = document.createElement('section');
section.style.width = '1440px';
section.style.height = '600px';
section.style.backgroundColor = 'black';
section.style.margin = '0 auto';
document.body.appendChild(section);

let but = document.createElement('button');
but.style.width = '600px';
but.style.height = '70px';
but.style.backgroundColor = 'white';
but.textContent = 'Information';
but.style.fontSize = '36px';
but.style.textAlign = 'center';
but.style.lineHeight = '70px';
but.style.margin = '50px auto';
but.style.borderRadius = '10px';
section.appendChild(but);

let info = document.createElement('div');
info.style.width = '368px';
info.style.height = '300px';
info.style.color = 'white';
info.style.fontSize = '18px';
info.style.display = 'flex';
info.style.flexDirection = 'column';
info.style.alignItems = 'center';
info.style.justifyContent = 'center';
info.style.backgroundColor = 'red';
papa1.appendChild(info);

let stat = document.createElement('div');
stat.style.color = 'white';
stat.style.fontSize = '40px';
stat.textContent = 'static';

let text1 = document.createElement('p');
text1.textContent = 'Position static holatida top, left, right, bottom, z-index ishlamaydi';

info.append(stat, text1);

let info2 = document.createElement('div');
info2.style.width = '368px';
info2.style.height = '300px';
info2.style.color = 'white';
info2.style.fontSize = '18px';
info2.style.display = 'flex';
info2.style.flexDirection = 'column';
info2.style.alignItems = 'center';
info2.style.justifyContent = 'center';
info2.style.backgroundColor = 'red';
papa1.appendChild(info2);

let stat2 = document.createElement('div');
stat2.style.color = 'white';
stat2.style.fontSize = '40px';
stat2.textContent = 'relative';

let text2 = document.createElement('p');
text2.textContent = 'Relative element o’z o’rnidan nisbiy siljiydi';

info2.append(stat2, text2);

let info3 = document.createElement('div');
info3.style.width = '368px';
info3.style.height = '300px';
info3.style.color = 'white';
info3.style.fontSize = '18px';
info3.style.display = 'flex';
info3.style.flexDirection = 'column';
info3.style.alignItems = 'center';
info3.style.justifyContent = 'center';
info3.style.backgroundColor = 'red';
papa1.appendChild(info3);

let stat3 = document.createElement('div');
stat3.style.color = 'white';
stat3.style.fontSize = '40px';
stat3.textContent = 'absolute';

let text3 = document.createElement('p');
text3.textContent = 'Absolute element eng yaqin relative ancestor bo’yicha joylashadi';

info3.append(stat3, text3);