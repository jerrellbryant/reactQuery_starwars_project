import React, { useState } from 'react'
import Pagination from './Pagination'
import {usePaginatedQuery} from 'react-query'
import Person from "./Person";


const fetchPeople = async (key, page) => {
    const res = await fetch(`http://swapi.dev/api/people/?page=${page}`)
    return res.json()
}

const People = () => {
    const [page, setPage] = useState(1)
    const { resolvedData, latestData, status } = usePaginatedQuery(['people', page], fetchPeople);

    return(
        <>
            <h2>people</h2>
            {status === 'error' && (
                <div>Error Fetching Data!</div>
            )}

            {status === 'loading' && (
                <div>Loading...</div>
            )}
            {status === 'success' && (
                <>
                <div>
                    {resolvedData.results.map( person => <Person key={person.name} person={person} /> )}
                </div>
                    <Pagination setPage={setPage} latestData={latestData} page={page}/>
                </>
            )}

        </>
    )
}

export default People