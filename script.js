
const btn = document.querySelectorAll('button');
const homeScore = document.getElementById('homescore');
const awayScore = document.getElementById('awayscore');


btn.forEach((button) => {

    button.addEventListener('click', (e) => {
        console.log(e.target.id)
        switch (e.target.id) {
            case 'home1':
                homeScore.textContent = parseInt(homeScore.textContent) + 1;
                break;
            case 'home2':
                homeScore.textContent = parseInt(homeScore.textContent) + 2;
                break;
            case 'home3':
                homeScore.textContent = parseInt(homeScore.textContent) + 3;
                break;
            case 'away1':
                awayScore.textContent = parseInt(awayScore.textContent) + 1;
                break;
            case 'away2':
                awayScore.textContent = parseInt(awayScore.textContent) + 2;
                break;
            case 'away3':
                awayScore.textContent = parseInt(awayScore.textContent) + 3;
                break;
            case 'reset':
                homeScore.textContent = 0;
                awayScore.textContent = 0;
        }


    })
})


