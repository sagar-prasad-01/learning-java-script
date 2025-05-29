let head = document.getElementById('head1')
console.log(head);
head.textContent = "changed html h1"
head.style.backgroundColor="yellow"
head.style.padding="25px"

let head22 = document.getElementById('head2')
head22.innerHTML = " <i> tea pioo</i>"

let list = document.getElementsByTagName('li')
//getelementsbytagname return node list in array format
list[2].textContent ="changed list"