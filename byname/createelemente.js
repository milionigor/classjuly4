let div = document.createElement('div');

div.classList.add('container');
console.log(div);
function createli(){
    return`
<ul>
<li>Arroz</li>
<li>feijão</li>
<li>picanha</li>
<li>cerveja</li>
<li>batata</li>
</ul>
 `
}
document.getElementById('teste').innerHTML = createli();