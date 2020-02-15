const addButton = document.querySelector('.btn');
const container = document.querySelector('.container');
var input = document.querySelector('.new_task');
var countChecbox = 0;

class item{
    constructor(itemName) {
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        countChecbox++;

        let inputCheckbox = document.createElement('input');
        inputCheckbox.type = 'checkbox';
        inputCheckbox.id = `checkbox${countChecbox}`;
        inputCheckbox.classList.add('checkbox');

        let fakeCheckbox = document.createElement('span');
        fakeCheckbox.classList.add('fakecheckbox');

        let label = document.createElement('label');
        label.htmlFor = `checkbox${countChecbox}`;

        let task_name = document.createElement('input');
        task_name.type = 'text';
        task_name.classList.add('task_name');
        task_name.value = itemName;
        task_name.disabled = true;

        let removeTask = document.createElement('span');
        removeTask.classList.add('removeTask');

        let div = document.createElement('div');
        div.classList.add('item');

        label.append(fakeCheckbox);
        label.prepend(inputCheckbox);

        div.prepend(task_name);
        div.prepend(label);
        div.append(removeTask);

        container.appendChild(div);

        

        removeTask.addEventListener('click', () => this.remove(div));

        inputCheckbox.addEventListener('click', () => this.swapClass(task_name));
    }

    remove(div) {
        container.removeChild(div);
        let count = document.getElementsByClassName('task_name');
        if ( count.length == 0 ) document.querySelector('.container').style = "display: none;"
    }

    swapClass(task_name) {
        task_name.classList.toggle('done');
    }

    
}


function check() {
    if ( input.value != "" ) {
        new item(input.value);
        input.value = "";
        document.querySelector('.container').style = "display: inline-block;"
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => { if (e.keyCode == "13") check()});