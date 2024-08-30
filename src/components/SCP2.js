// src/components/SCP2.js
import React from "react";
import scpData from '../data/scp.json'; // Ensure the path is correct

const SCP2 = () => {
    const scp = scpData[0]; // Access the first object (SCP-002)

    return (
        <div className="scp-container"> {/* Use a consistent container for styling */}
            <h1 className="scp-title">{scp.Item}</h1>
            <h2>Object Class: {scp.Object}</h2>
            {scp.Image && ( // Check if the image exists
                <img src={scp.Image} alt={`${scp.Item}`} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
            )}
            <h3>Special Containment Procedures:</h3>
            <div className="scp-description" dangerouslySetInnerHTML={{ __html: scp.Procedures }} />
            <h3>Description:</h3>
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

export default SCP2;
