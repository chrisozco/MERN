import React, { useState } from "react"
import PersonForm from "../components/PersonForm"
import PersonList from "../components/PersonList"

const Main = () => {
    const [people, setPeople] = useState([])
    const removedFromDB = (id) => {
        setPeople(people.filter(person => person._id !== id))
    }

    return(
        <div>
            <PersonForm people={people} setPeople={setPeople} />
            <hr />
            <PersonList people={people} setPeople={setPeople} removedFromDB={removedFromDB} />
        </div>
    )
}

export default Main