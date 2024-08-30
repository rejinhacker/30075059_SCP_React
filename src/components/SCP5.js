// src/components/SCP5.js
import React from 'react';
import scpData from '../data/scp.json'; // Ensure the path to the data file is correct

const SCPPage5 = () => {
    const scp = scpData[3]; // Access the fifth object (SCP-005) in the array

    return (
        <div className="scp-container"> {/* Use a consistent container for styling */}
            <h1 className="scp-title">{scp.Item}</h1>
            <h2>Object Class: {scp.Object}</h2>
            
            <h3>Special Containment Procedures:</h3>
            <div className="scp-description" dangerouslySetInnerHTML={{ __html: scp.Procedures }} />
            <h3>Description:</h3>
            {scp.Image && ( // Check if the image exists
                <img 
                    src={scp.Image} 
                    alt={`An illustration of ${scp.Item}, showcasing its properties and containment protocols`} // More descriptive alt text
                    style={{ width: '40%', height: 'auto', borderRadius: '8px' }} 
                />
            )}
            <div className="scp-description" dangerouslySetInnerHTML={{ __html: scp.Description }} />
            {scp.Additional && ( // Check if Additional information exists
                <>
                    <h3>Additional Information:</h3>
                    <div className="scp-description" dangerouslySetInnerHTML={{ __html: scp.Additional }} />
                </>
            )}
        </div>
    );
};

export default SCPPage5;
