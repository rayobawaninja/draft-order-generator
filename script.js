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
    const loadingSpinner = document.getElementById('loading');
    loadingSpinner.style.display = 'block';

    setTimeout(() => {
        const teams = [
            document.getElementById('team1').value,
            document.getElementById('team2').value,
            document.getElementById('team3').value,
            document.getElementById('team4').value
        ];

        if (teams.some(team => team === '')) {
            alert('Please enter all team names.');
            loadingSpinner.style.display = 'none';
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

        loadingSpinner.style.display = 'none';
        triggerConfetti();
    }, 1000);
}

function triggerConfetti() {
    const confetti = new mojs.Burst({
        radius: { 0: 200 },
        count: 20,
        children: {
            shape: 'circle',
            radius: 20,
            fill: ['#FFD700', '#FF4500', '#00FF00'],
            duration: 2000
        }
    });
    confetti.play();
}
