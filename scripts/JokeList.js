import { getJokes } from "./jokeDataProvider.js";
import { createJokeHTML } from "./JokeHTML.js";

//get the element to insert the HTML representation of the jokes into
const contentElement = document.querySelector(".jokes");

export const listJokes = () => {

    //get the list of dad jokes
    const arrayOfJokeObjects = getJokes();

    for (const joke of arrayOfJokeObjects) {

        const jokeRepresentation = createJokeHTML(joke);
        contentElement.innerHTML += jokeRepresentation;
    }

}