import React from 'react'

 const  Navbar = ({ setPage }) => {
    return(
        <nav>
            <button className="planets" onClick={() => setPage('planets')}>Planets</button>
            <button className="people"  onClick={() => setPage('people')}>People</button>
        </nav>
    )
}

export default Navbar