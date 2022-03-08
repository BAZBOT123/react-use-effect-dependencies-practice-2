# Use Effect Practice 2

## Learning Objectives
- Build a component that is passed data via props with an effect hook that watches for changes to a props value

## Instructions
- In `PeopleListItem.js`, implement a `useEffect` hook that runs when the `person` prop changes. The effect should make a `fetch` request to the `homeworld` url property on the person object. The `homeworld` state should be set to the name of the planet returned from the request.
- In `PlanetsListItem.js`, implement a `useEffect` hook that runs when the `planet` prop changes. The effect should make a `fetch` request to the *first* film url in the `films` property on the planet object. The `firstFilm` state should be set to the `title` of the film returned from the request.
- In `StarshipsListItem.js`, implement a `useEffect` hook that runs when the `starship` prop changes. The effect should make a `fetch` request to the *first* pilot url in the `pilots` property on the starship object. The `firstPilot` state should be set to the `name` of the pilot returned from the request. If there are *no* pilots for that ship, "no pilots" should be displayed.

## Extension 1
- In `StarshipsList.js`, update your solution to fetch and display *all* pilots of that ship. Your state should be an array of pilots. Your solution should make multiple fetch requests, one for each pilot, and update the state *only* once all fetch requests have completed.