// src/components/SCP3.js
import React from 'react';
import scpData from '../data/scp.json'; // Ensure the path to the data file is correct

const SCP3 = () => {
    const scp = scpData[1]; // Access the second object (SCP-003) in the array

    return (
        <div className="scp-container"> {/* Use a consistent container for styling */}
            <h1 className="scp-title">{scp.Item}</h1>
            <h2>Object Class: {scp.Object}</h2>
            {scp.Image && ( // Check if the image is not null or undefined
                <img src={scp.Image} alt={`${scp.Item} image`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            )}
            <h3>Special Containment Procedures:</h3>
            <div className="scp-description" dangerouslySetInnerHTML={{ __html: scp.Procedures }} />
            <h3>Description:</h3>
            <div className="scp-description" dangerouslySetInnerHTML={{ __html: scp.Description }} />
            {scp.Reference && ( // Check if reference content exists
                <>
                    <h3>Reference:</h3>
                    <div className="scp-description" dangerouslySetInnerHTML={{ __html: scp.Reference }} />
                </>
            )}
        </div>
    );
};

export default SCP3;
