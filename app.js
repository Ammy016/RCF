const element = document.getElementById('reserve');
const btn =  document.getElementById('reserve-click');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    element.scrollIntoView();
});