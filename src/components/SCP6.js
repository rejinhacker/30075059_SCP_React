import React from 'react';
import scpData from '../data/scp.json';

const SCPPage6 = () => {
    const scp = scpData[4]; // Access the fifth object (SCP-006) in the array

    return (
        <div className="scp-container"> {/* Use a consistent container for styling */}
        <h1 className="scp-title">{scp.Item}</h1>
        <h2>Object Class: {scp.Object}</h2>
            <h3>Special Containment Procedures:</h3>
            <div dangerouslySetInnerHTML={{ __html: scp.Procedures }} />
            <h3>Description:</h3>
            <div dangerouslySetInnerHTML={{ __html: scp.Description }} />
            {scp.Additional && (
                <>
                    <h3>Additional Information:</h3>
                    <div dangerouslySetInnerHTML={{ __html: scp.Additional }} />
                </>
            )}
        </div>
    );
};

export default SCPPage6;
