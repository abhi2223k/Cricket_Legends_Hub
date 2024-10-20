document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Fan Zone form submission
    const fanForm = document.getElementById('fan-form');
    fanForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const story = document.getElementById('story').value;
        alert('Thank you for submitting your story: ' + story);
        fanForm.reset();
    });

    // Voting functionality
    let sachinVotes = 0;
    let pontingVotes = 0;
    let laraVotes = 0;
    let kohliVotes = 0;
    
    document.getElementById('vote-sachin').addEventListener('click', () => {
        sachinVotes++;
        alert('You voted for Sachin Tendulkar. Total votes: ' + sachinVotes);
    });
    
    document.getElementById('vote-ponting').addEventListener('click', () => {
        pontingVotes++;
        alert('You voted for Ricky Ponting. Total votes: ' + pontingVotes);
    });
    
    document.getElementById('vote-lara').addEventListener('click', () => {
        laraVotes++;
        alert('You voted for Brian Lara. Total votes: ' + laraVotes);
    });
    
    document.getElementById('vote-kohli').addEventListener('click', () => {
        kohliVotes++;
        alert('You voted for Virat Kohli. Total votes: ' + kohliVotes);
    });

    // Initialize the map and set view to a global perspective
    const map = L.map('map-container').setView([20, 0], 2); 

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add player locations as markers
    const players = [
        {
            name: "Sachin Tendulkar",
            lat: 19.0760,
            lon: 72.8777,
            hometown: "Mumbai, India"
        },
        {
            name: "Ricky Ponting",
            lat: -41.4332,
            lon: 147.1441,
            hometown: "Launceston, Tasmania"
        },
        {
            name: "Brian Lara",
            lat: 10.6411,
            lon: -61.4983,
            hometown: "Santa Cruz, Trinidad"
        },
        {
            name: "Virat Kohli",
            lat: 28.7041,
            lon: 77.1025,
            hometown: "Delhi, India"
        }
    ];

    // Add markers to the map
    players.forEach(player => {
        L.marker([player.lat, player.lon]).addTo(map)
            .bindPopup(`<b>${player.name}</b><br>${player.hometown}`);
    });
});
