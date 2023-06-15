document.addEventListener('click', collapse);

function collapse(event) {

    if (!event.target.classList.contains('collapse-button')) return;

    const atr = event.target.getAttribute ('data-toggle');

    const collapseBody = document.querySelector('#' + atr);

    console.log(collapseBody);

    if (collapseBody) {
        collapseBody.classList.toggle('hide');
    }
}