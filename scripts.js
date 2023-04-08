let id = 0;

//document accesses the HTML
//getElementById looks in the HTML for the id 'submit' which is attached to a button
//addEventListener listens for an event such as click
document.getElementById('submit').addEventListener('click', () => {
    //finds the parent
    let table = document.getElementById('list');

    //ability to add children to parent (rows to a table)
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);

    //adds submited info using the id's found in the html
    row.insertCell(0).innerHTML = document.getElementById('new-first-name').value;
    row.insertCell(1).innerHTML = document.getElementById('new-last-name').value; 
    row.insertCell(2).innerHTML = document.getElementById('new-pronoun').value;
    
    //Resets the form to be blank/have the original selcetion
    document.getElementById('new-first-name').value = '';
    document.getElementById('new-last-name').value = '';
    document.getElementById('new-first-name').value = 'Pronouns';
});

