(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

function generateDraftOrder() {
    const teams = [
        document.getElementById('team1').value,
        document.getElementById('team2').value,
        document.getElementById('team3').value,
        document.getElementById('team4').value
    ];

    if (teams.some(team => team === '')) {
        alert('Please enter all team names.');
        return;
    }

    const shuffledTeams = teams.sort(() => Math.random() - 0.5);
    const draftOrderList = document.getElementById('draft-order');
    draftOrderList.innerHTML = '';

    shuffledTeams.forEach((team, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${team}`;
        listItem.classList.add('list-group-item', 'fade-in');
        draftOrderList.appendChild(listItem);
    });
}
