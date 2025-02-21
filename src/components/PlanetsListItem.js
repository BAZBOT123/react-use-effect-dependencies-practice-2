import { useEffect, useState } from "react";

function PlanetsListItem(props) {
  const { planet } = props;

  const [firstFilm, setFirstFilm] = useState('')

  console.log("Planet", planet);

  useEffect(() => {
    fetch(planet.films[0])
      .then(response => response.json())
      .then(response => {
        console.log("this is", response)
        return setFirstFilm(response.title)
      })
  }, [planet])

  return <li>{planet.name} - First Film {firstFilm}</li>;
}

export default PlanetsListItem;
