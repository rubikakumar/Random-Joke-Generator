document.addEventListener('DOMContentLoaded', function () {
    
    const fetchButton = document.querySelector('.fetch-button');
    const jokeContent = document.getElementById('joke-content');

    fetchButton.addEventListener('click', fetchJoke);

    function fetchJoke() {
        
        const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
               
                displayJoke(data);
            })
            .catch(error => {
                
                console.error('Error fetching joke:', error);
                jokeContent.textContent = 'Sorry, something went wrong. Please try again later.';
            });
    }

    function displayJoke(joke) {
        if (joke.type === 'single') {
            jokeContent.textContent = joke.joke;
        } else if (joke.type === 'twopart') {
            jokeContent.textContent = `${joke.setup} - ${joke.delivery}`;
        }
    }
});
