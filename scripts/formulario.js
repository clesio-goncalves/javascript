document.querySelector('#form-busca').onsubmit = function() {
    if (document.querySelector('#q').value == '') {
        alert('Não podia ter deixado em branco a busca!');
        return false;
    }
};

/*function validaBusca() {
    if (document.querySelector('#q').value == '') {
        alert('Não podia ter deixado em branco a busca!');
        return false;
    }
}

document.querySelector('#form-busca').onsubmit = validaBusca;*/