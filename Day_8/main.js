const heading = document.getElementById('main-heading');
console.log(heading.textContent);

const paragraph = document.getElementsByClassName('content-paragraph');
console.log(paragraph);

const listIteam = document.getElementsByClassName('li');
console.log(listIteam);

const button = document.querySelector('#click');
button.addEventListener('click', function() {
    heading.textContent = "DOM is FUN"
});