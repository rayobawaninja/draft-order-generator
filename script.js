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

let currentIndex = 0;
let shuffledTeams = [];

function generateDraftOrder() {
    const loadingSpinner = document.getElementById('loading');
    const mainContent = document.getElementById('main-content');
    const body = document.querySelector('body');
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

        shuffledTeams = teams.sort(() => Math.random() - 0.5);
        const draftOrderList = document.getElementById('draft-order');
        draftOrderList.innerHTML = '';

        shuffledTeams.forEach((team, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${index + 1}. ${team}`;
            listItem.classList.add('list-group-item', 'fade-in');
            draftOrderList.appendChild(listItem);
        });

        loadingSpinner.style.display = 'none';
        mainContent.classList.add('hidden');
        body.classList.add('no-bg');
        currentIndex = 0;
        showNextName();
    }, 1000);
}

function showNextName() {
    const floatingNamesContainer = document.getElementById('floating-names');
    const nextButton = document.getElementById('next-button');

    if (currentIndex < shuffledTeams.length) {
        floatingNamesContainer.textContent = `${currentIndex + 1}ST PICK IS ${shuffledTeams[currentIndex]}`;
        floatingNamesContainer.classList.remove('hidden');
        floatingNamesContainer.classList.add('fade-in', 'moveToFront');
        triggerConfetti();
        currentIndex += 1;
        nextButton.style.display = 'block';
    } else {
        floatingNamesContainer.textContent = '';
        nextButton.style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        document.querySelector('body').classList.remove('no-bg');
    }
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0f018c', '#ffffff']
    });
}
