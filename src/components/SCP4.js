// src/components/SCP4.js
import React from 'react';
import scpData from '../data/scp.json'; // Ensure the path is correct

const SCPPage4 = () => {
    const scp = scpData[2]; // Access the third object (SCP-004) in the array

    return (
        <div className="scp-container"> {/* Use the consistent SCP style class */}
            <h1 className="scp-title">{scp.Item}</h1>
            <h2>Object Class: {scp.Object}</h2>
            
            <h3>Special Containment Procedures:</h3>
            <div className="scp-description" dangerouslySetInnerHTML={{ __html: scp.Procedures }} />
            <h3>Description:</h3>
            {scp.Image && ( // Optional image display
                <img src={scp.Image} alt={`${scp.Item} image`} style={{ width: '50%', height: 'auto', borderRadius: '8px' }} />
            )}
            <div className="scp-description" dangerouslySetInnerHTML={{ __html: scp.Description }} />
            {scp.Reference && ( // Check if the reference is present
                <>
                    <h3>Reference:</h3>
                    <div className="scp-description" dangerouslySetInnerHTML={{ __html: scp.Reference }} />
                </>
            )}
        </div>
    );
};

export default SCPPage4;
