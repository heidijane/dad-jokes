const reveal = () => {
    // Get a reference to all the div's with a class of "joke"
    const allJokes = document.querySelectorAll(".joke")

    // Add an event listener to each one
    for (const joke of allJokes) {
        joke.addEventListener(
            "click",
            theEvent => {
                //select the div inside of the joke div with the answer
                let jokeElement = document.querySelector(`#${joke.id} div`);

                //toggle the "hidden" class to show/hide when the joke is clicked
                jokeElement.classList.remove('paused');
                jokeElement.classList.toggle('hidden');
                jokeElement.classList.toggle('visible');
                console.log(jokeElement.classList);
            }
        )
    }

}

export default reveal;