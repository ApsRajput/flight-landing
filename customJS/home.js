var flight_option_container = document.getElementById('flight_option_container');
var book_ticket_form = document.getElementById('book_ticket_form');
function open_custom_drop_down(field) {

    // remove current active
    let current_Active = flight_option_container.querySelectorAll('.flight_option_dropdown_active');
    if (current_Active.length == 0) { }
    else {
        current_Active.forEach((item) => {
            item.classList.remove('flight_option_dropdown_active')
        })
    }
    // remove current active

    // make field active
    let filed_active = field.nextElementSibling;
    if (filed_active.classList.contains('flight_option_dropdown_active')) {
        filed_active.classList.remove('flight_option_dropdown_active');
    }
    else {
        filed_active.classList.add("flight_option_dropdown_active");
    }
    // make field active

    // remove anything else active
    let current_else_Active = book_ticket_form.querySelectorAll('.form_to_hidden_dropDown_active');
    if (current_else_Active.length == 0) { }
    else {
        current_else_Active.forEach((item) => {
            item.innerHTML = ''
            item.classList.remove('form_to_hidden_dropDown_active')
        })
    }
    // remove anything else active

}





var flight_way = document.getElementById('flight_way');
var return_date = document.getElementById('return_date');
function make_flight_way_active(what) {

    flight_way.innerHTML = what.innerHTML;

    // remove current active
    let current_Active = flight_option_container.querySelectorAll('.flight_option_dropdown_active');
    if (current_Active.length == 0) { }
    else {
        current_Active.forEach((item) => {
            item.classList.remove('flight_option_dropdown_active')
        })
    }
    // remove current active

    if (what.innerHTML.includes('Round')) {
        return_date.style.display = 'flex';
    }
    else {
        return_date.style.display = 'none';
    }
}





function decrease_number(field) {
    let number_field = field.nextElementSibling;
    if (number_field.value == 0) { }
    else {
        number_field.value = number_field.value - 1;
    }
}

function increase_number(field) {
    let number_field = field.previousElementSibling;
    number_field.value = parseInt(number_field.value) + 1;
}

var flight_persons = document.getElementById('flight_persons');
document.getElementById('traveler_form').addEventListener('submit', (event) => {

    event.preventDefault();

    let adult = document.getElementById('traveler_form').elements["adult_number"].value;
    let child = document.getElementById('traveler_form').elements["child_number"].value;
    let infant = document.getElementById('traveler_form').elements["infant_number"].value;

    flight_persons.innerHTML = `${parseInt(adult) + parseInt(child) + parseInt(infant)} Traveler`;

    // remove current active
    let current_Active = flight_option_container.querySelectorAll('.flight_option_dropdown_active');
    if (current_Active.length == 0) { }
    else {
        current_Active.forEach((item) => {
            item.classList.remove('flight_option_dropdown_active')
        })
    }
    // remove current active

})






var flight_type = document.getElementById('flight_type');
function make_flight_type_Active(what) {
    flight_type.innerHTML = what.innerHTML;
    // remove current active
    let current_Active = flight_option_container.querySelectorAll('.flight_option_dropdown_active');
    if (current_Active.length == 0) { }
    else {
        current_Active.forEach((item) => {
            item.classList.remove('flight_option_dropdown_active')
        })
    }
    // remove current active
}


var country_list = []
Func()
function Func() {
    fetch("./data.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => country_list = data);
}



var leaving_from = document.getElementById('leaving_from');
var going_to = document.getElementById('going_to');

var leaving_From_Dropdown = document.getElementById('leaving_From_Dropdown');
var going_to_Dropdown = document.getElementById('going_to_Dropdown');

function show_full_List(what) {

    // remove anything else active
    let current_Active = flight_option_container.querySelectorAll('.flight_option_dropdown_active');
    if (current_Active.length == 0) { }
    else {
        current_Active.forEach((item) => {
            item.classList.remove('flight_option_dropdown_active')
        })
    }
    // remove anything else active

    // remove own active
    let current_else_Active = book_ticket_form.querySelectorAll('.form_to_hidden_dropDown_active');
    if (current_else_Active.length == 0) { }
    else {
        current_else_Active.forEach((item) => {
            item.innerHTML = ''
            item.classList.remove('form_to_hidden_dropDown_active')
        })
    }
    // remove own active

    if (what == 'leave') {
        leaving_From_Dropdown.classList.add('form_to_hidden_dropDown_active')

        let drop_down_text = '';
        country_list.forEach(item => {
            drop_down_text += `<p onclick="leaving_from_Drop_Down('${item.name}')"><b>${item.code}</b> | ${item.name} (${item.country})</p>`
        });
        leaving_From_Dropdown.innerHTML = drop_down_text
    }
    else {
        going_to_Dropdown.classList.add('form_to_hidden_dropDown_active')

        let drop_down_text = '';
        country_list.forEach(item => {
            drop_down_text += `<p onclick="going_to_Drop_Down('${item.name}')"><b>${item.code}</b> | ${item.name} (${item.country})</p>`
        });
        going_to_Dropdown.innerHTML = drop_down_text
    }

}




function filter_leaving_list(field) {
    let filtred_Arr = [];

    let name_tofind = field.value.toLowerCase();
    country_list.forEach(element => {
        let name = element.name.toLowerCase();
        if (name.toLowerCase().includes(name_tofind)) {
            filtred_Arr.push(element)
        }
    });

    leaving_From_Dropdown.innerHTML = '';

    let drop_down_text = '';
    if (filtred_Arr.length == 0) { leaving_From_Dropdown.innerHTML = '<p>No match Found</p>' }
    else {
        filtred_Arr.forEach(item => {
            drop_down_text += `<p onclick="leaving_from_Drop_Down('${item.name}')"><b>${item.code}</b> | ${item.name} (${item.country})</p>`
        });

        leaving_From_Dropdown.innerHTML = drop_down_text;
    }
}

function leaving_from_Drop_Down(name) {
    leaving_from.value = name;
    leaving_From_Dropdown.classList.remove('form_to_hidden_dropDown_active');
    leaving_From_Dropdown.innerHTML = ''
}




function filter_going_list(field) {
    let filtred_Arr = [];

    let name_tofind = field.value.toLowerCase();
    country_list.forEach(element => {
        let name = element.name.toLowerCase();
        if (name.toLowerCase().includes(name_tofind)) {
            filtred_Arr.push(element)
        }
    });

    going_to_Dropdown.innerHTML = '';

    let drop_down_text = '';
    if (filtred_Arr.length == 0) { going_to_Dropdown.innerHTML = '<p>No match Found</p>' }
    else {
        filtred_Arr.forEach(item => {
            drop_down_text += `<p onclick="going_to_Drop_Down('${item.name}')"><b>${item.code}</b> | ${item.name} (${item.country})</p>`
        });

        going_to_Dropdown.innerHTML = drop_down_text;
    }
}

function going_to_Drop_Down(name) {
    going_to.value = name;
    going_to_Dropdown.classList.remove('form_to_hidden_dropDown_active');
    going_to_Dropdown.innerHTML = ''
}