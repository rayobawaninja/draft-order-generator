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
        draftOrderList.appendChild(listItem);
    });
}
