
let btn = document.querySelector('button');
let surname = document.querySelector('#surname');
let name = document.querySelector('#name');
let patronymic = document.querySelector('#patronymic');


btn.addEventListener('click',()=>{
    let fio = document.querySelector('#fio').value;
    fio = fio.replace(/ +/g, ' ').trim(); 
    let arr = fio.split (' ',3);
    console.log(arr);
    let femalis = arr[0];
    let names = arr[1];
    let patronymics = arr[2];
    femalis=femalis.toLowerCase()
    names=names.toLowerCase()
    patronymics=patronymics.toLowerCase()

    femalis=femalis[0].toUpperCase()+femalis.substr(1,);
    names=names[0].toUpperCase()+names.substr(1,);
    patronymics=patronymics[0].toUpperCase()+patronymics.substr(1,);
   
    surname.value = femalis;
    name.value = names;
    patronymic.value = patronymics;
    

})


