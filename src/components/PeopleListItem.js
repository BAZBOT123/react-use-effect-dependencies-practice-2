import { useEffect, useState } from "react";

function PeopleListItem(props) {
  const { person } = props;

  const [homeworld, setHomeworld] = useState('');
  

  console.log("person", person)

  useEffect(() => {
    fetch(person.homeworld)
    .then(response => response.json())
      .then(response => {
        // console.log("this is", response.name)
        return setHomeworld(response.name)
      })
  }, [person])  

  // console.log('person', person, person.homeworld)

  return (
    <ul>
      <li>{person.name} - Homeworld: {homeworld}</li>
    </ul>
  );
}

export default PeopleListItem;
