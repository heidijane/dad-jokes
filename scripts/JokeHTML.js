/*
    Create an HTML representation of a dad joke
*/

export const createJokeHTML = (joke) => {
    return `
        <section class="joke">
            <h4>Q: ${joke.question}</h4>
            <p>A: ${joke.answer}</p>
        </section>
    `
}