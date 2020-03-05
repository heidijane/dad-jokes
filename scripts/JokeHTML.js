/*
    Create an HTML representation of a dad joke
*/

export const createJokeHTML = (joke) => {
    return `<section id="joke--${joke.id}" class="joke">
            <h4 class="joke__question">Q: ${joke.question}</h4>
            <div class="joke__answer paused hidden">A: ${joke.answer}</div>
        </section>
    `
}