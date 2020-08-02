import React, { useState }  from 'react';
import Pagination from './Pagination';
import { usePaginatedQuery } from 'react-query'
import Planet from './Planet'

const fetchPlanets = async (key, page) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`)
    return res.json()
}

const Planets = () => {
    const [page, setPage ] = useState(1)
    const { resolvedData, latestData, status } = usePaginatedQuery(['planets', page], fetchPlanets, {
        staleTime: 5000,
        cacheTime: 10
    });
    // console.log(data)

    return(
        <>
            <h2>planets</h2>

            {status === 'error' && (
                <div>Error Fetching Data!</div>
            )}

            {status === 'loading' && (
                <div>Loading...</div>
            )}
            {status === 'success' && (
                <div>
                    {resolvedData.results.map( planet => <Planet key={planet.name} planet={planet} /> )}
                </div>
            )}
            <Pagination setPage={setPage} latestData={latestData} page={page} />
        </>
    )
}

export default Planets