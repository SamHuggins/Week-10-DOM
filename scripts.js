let id = 0;

document.getElementById('submit').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-first-name').value;
    row.insertCell(1).innerHTML = document.getElementById('new-last-name').value; 
    row.insertCell(2).innerHTML = document.getElementById('new-pronoun').value; 
    document.getElementById('new-first-name').value = '';
    document.getElementById('new-last-name').value = '';
    document.getElementById('new-first-name').value = 'Pronouns';
});

