import React from 'react';

function Accuracy({text, countError}) {
    let countAccuracy = (text.length / 100) * countError;

    return (
        <div>
            {(100 - countAccuracy).toFixed(1)};
        </div>
    );
}

export default Accuracy;