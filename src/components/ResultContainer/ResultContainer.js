import React from 'react';
import './ResultContainer.css'
import NameCard from '../NameCard/NameCard'

const ResultContainer = ({ suggestedName }) => {


    const suggestedNamesJsx = suggestedName.map(name => {
        return <NameCard key={name} suggestedName={name} />;
    });
    return (

        < div className="results-container">

            {suggestedNamesJsx}

        </div >

    )
}
export default ResultContainer;