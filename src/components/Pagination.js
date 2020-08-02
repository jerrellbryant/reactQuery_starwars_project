import React from 'react';

const Pagination = ({ setPage, page, latestData }) => {
    return (
        <div className="pagination">
            <button onClick={() => setPage( prev => Math.max(prev - 1, 1))}
                    disabled={ page === 1 }>
                Previous Page</button>
            <span>{ page }</span>
            <button
                onClick={() => setPage(prev => (!latestData || !latestData.next ? prev: prev + 1))}
                disabled={!latestData || !latestData.next}>
                Next Page</button>
        </div>

    )
}

export default Pagination