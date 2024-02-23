' use strict '

// // 1-vazifa 
// const promoadv = document.querySelectorAll('.promo__adv img');

// promoadv.forEach((item,idx)=>{
//     promoadv[idx].remove();
// })

// // 2-vazifa

// const promogenre = document.querySelector('.promo__genre');
// promogenre.innerText = 'Comedy';

// // 3-vazifa 

// const promobg = document.querySelector('.promo__bg');
// promobg.style.background = 'url(../img/1.jpg)';


// // 4-vazifa 

// const names = ['Omar','The Finel Legacy','Ertugrul','Magnificent Century','Great Saljuks Guardians'];
// let prormointer = document.querySelector('.promo__interactive-list');
// for(let i =0 ; i<names.length; i++){
//     prormointer.innerHTML += `
//     <li class="promo__interactive-item">
//     ${i+1}  ${names[i]}
//     <div class="delete"></div>
//   </li>
//     `;
//     console.log(i);
// }

// // 5-vazifa. 4-vazifani ichida


// Haqiqy yechim

const adv = document.querySelectorAll('.promo__adv img'), //massiv qaytaradi
wrapper = document.querySelector('.promo__bg'),
genre = wrapper.querySelector('.promo__genre'),
seriesList = document.querySelector('.promo__interactive-list');

const seriesDB = {
    series:[
        'Omar',
        'The Final Legacy',
        'Ertugrul',
        'Magnificient Century',
        'The Great Seljuks: Guardians ...',
    ],
}
console.log(adv);// return NodeList
// 1-vazifa
adv.forEach((item)=>{
    item.remove();
});

//2-vazifa

genre.textContent = 'Comedy';

// 3- vazifa

wrapper.style.backgroundImage = "url(img/1.jpg)";


// 4- vazifa

console.log(seriesList);

seriesDB.series.forEach((item,idx)=>{
    seriesList.innerHTML += `
    <li class="promo__interactive-item">
    ${idx+1}  ${item}
    <div class="delete"></div>
  </li>
    `
})
