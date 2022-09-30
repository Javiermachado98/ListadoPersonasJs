const persons = [
    new Person('juan', 'perez'),
    new Person('carla', 'lara')
];

function showPeople(){
    console.log('Show Persons....');
    let text = '';
    for(let person of persons){
        console.log(person);
        text += `<li>${person.name} ${person.lastName}</li>`;
    }
    document.getElementById('persons').innerHTML = text;
}

document.getElementById('button').addEventListener('click', addPerson);

function addPerson(){

    const form = document.forms['form'];
    const name = form['name'];
    const lastName = form['lastName'];

    if(name.value != '' && lastName.value != ''){

        const person = new Person (name.value, lastName.value);
        console.log(person);
        persons.push(person);
        showPeople();
    }
    else{
        console.log('No have information to add');
    }

}

document.getElementById('buttons').addEventListener('click', deletePerson);

function deletePerson(){

    const person = '';
    persons.pop(person);
    showPeople();

}

