const games = {
    gta: {
        title: "GTA V",
        genre: "Action",
        description: "When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each other. Current players can transfer both GTAV Story Mode progress and GTA Online characters and progression to PlayStation 5 and Xbox Series X|S with a one-time migration. "
    },
    valorant: {
        title: "Valorant",
        genre: "FPS",
        description: "Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games. The game features 5v5 character-based gameplay, where precise gunplay is combined with unique agent abilities. There are currently eighteen agents, each with four unique abilities, including one ultimate ."
    },
    genshin: {
        title: "Genshin Impact",
        genre: "Adventure",
        description: "Genshin Impact is an open-world action RPG where players explore the vast land of Teyvat, battling foes, completing quests, and harnessing elemental powers. In the game, set forth on a journey across a fantasy world called Teyvat. In this vast world, you can explore seven nations, meet a diverse cast of characters with unique personalities and abilities, and fight powerful enemies together with them, all on the way during your quest to find your lost sibling."
    },
    wuthering: {
        title: "Wuthering Waves",
        genre: "Adventure",
        description: "Wuthering Waves is an open-world RPG that offers rich combat mechanics, stunning environments, and a deep story set in a world torn apart by calamity. Wuthering Waves is a story-rich open-world action RPG set in a futuristic post-apocalyptic world after a catastrophe called the Lament wiped out most of humanity. Unknown beings and monsters called Tacet Discords have appeared, and humanity has adapted to the threat and rebuilt civilization. Players take on the role of Rover, joined by a cast of Resonators, on a journey to reclaim lost memories and surmount the Lament "
    },
    farcry: {
        title: "Far Cry 4",
        genre: "Shooting",
        description: "Far Cry 4 is a first-person shooter set in the mountainous region of Kyrat, where players must fight against a tyrannical ruler while navigating a stunning open world.Far Cry 4 is an action-adventure first-person shooter game developed by Ubisoft. Set in the fictional Himalayan region of Kyrat, players assume the role of Ajay Ghale, who returns to his homeland to scatter his mother’s ashes but becomes embroiled in a civil war against the tyrannical rule of Pagan Min. The game features an open-world environment, allowing players to explore, complete quests, engage in combat with various weapons, and utilize vehicles or wildlife. Far Cry 4 offers both single-player and multiplayer modes, with an emphasis on exploration, choice, and dynamic gameplay mechanics."
    },
    minecraft: {
        title: 'Minecraft',
        genre: 'Adventure',
        description:'Minecraft is a game made up of blocks, creatures, and community. You can survive the night or build a work of art – the choice is all yours. But if the thought of exploring a vast new world all on your own feels overwhelming, then fear not! Let’s explore what Minecraft is all about!'
    },
    pubg: {
        title: 'Pubg',
        genre: 'FPS',
        description:'PlayerUnknowns Battlegrounds (PUBG) is a multiplayer battle royale game where up to 100 players parachute onto an island, scavenge for weapons and equipment, and fight to be the last person or team standing. The game features a shrinking play zone that forces players together, intensifying encounters. PUBG is known for its realistic gameplay, large maps, and strategic elements.'
    },
    ml: {
        title: 'Mobile Legends',
        genre: 'FPS',
        description:'Mobile Legends is a mobile multiplayer online battle arena (MOBA) game for iOS and Android devices. Developed and published by Shanghai Moonton Technology, it features a roster of heroes and intense, fast-paced gameplay where players defend their base and aim to obliterate the enemy base.'
    },
    cod: {
        title: 'Call of Duty: Warzone',
        genre: 'FPS',
        description:'Warzone is a free-to-play battle royale game in the Call of Duty franchise1234. It encourages the accumulation of in-game currency called "Cash" and features large environments where players can team up or play solo to be the last squad standing.'
    },
    farlight: {
        title: 'Farlight 84',
        genre: 'FPS',
        description:'Farlight 84 is set in an apocalyptic near-future, making it different from other battle royale games like CoD and PUBG Mobile. Your heroes have a jetpack, which you can use to fly and dash around the battlefield. There are also 14 heroes, each with unique abilities you can choose from and jump into the battlefield..'
    },


};

function showDetails(gameKey) {
    const game = games[gameKey];
    document.getElementById('game-title').innerText = game.title;
    document.getElementById('game-genre').innerText = `Genre: ${game.genre}`;
    document.getElementById('game-description').innerText = game.description;
    document.getElementById('game-details').style.display = 'block';
}

let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');
menu.onclick = () => {
    navbar.classList.toggle('active')
    menu.classList.toggle('move');
    bell.classList.toggle('active');
}

let bell = document.querySelector('.notification');
document.querySelector('#bell-icon').onclick = () =>{
    bell.classList.toggle('active');
}


function closeGameBox(){
    const gameBox = document.querySelector('.game-box');
    gameBox.style.display = 'none';
}

 

let selectedRating = 0;

function selectRating(rating) {
    selectedRating = rating;

    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.src = 'img/star-filled-24.png';  
        } else {
            star.src = 'img/star-regular-24.png'; 
        }
    });
}


function submitReview() {
    const username = document.getElementById('username').value;
    const reviewText = document.getElementById('review-text').value;

    if (username === "" || reviewText === "" || selectedRating === 0) {
        alert("Please fill in all fields and select a rating.");
        return;
    }


  
    const reviewList = document.getElementById('review-list');
    const newReview = document.createElement('div');
    newReview.classList.add('review-item');

    newReview.innerHTML = `
        <h3>${username}</h3>
        <p>Rating: ${selectedRating} stars</p>
        <p>${reviewText}</p>
        <hr>
    `;

    reviewList.appendChild(newReview);

  
    document.getElementById('username').value = '';
    document.getElementById('review-text').value = '';
    selectedRating = 0;
    selectRating(0); 


    alert("Thank you for your review!");
}

