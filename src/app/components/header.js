import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <div style={{ width: "100vw", height: 80, backgroundColor: "#fbfbfc" }}>
            <div style={{
                margin: "0 auto",
                maxWidth: 1280,
                height: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <Link href="https://www.acuired.com" legacyBehavior>
                        <a>
                            <img src="/acquiredLogo.svg" alt="Logo" style={{ height: 31, width: 140, marginRight: 20 }} />
                        </a>
                    </Link>
                </div>

                {/*<div style={{backgroundColor: "#000", padding: "14px 20px"}}>
                    <button style={ctaButtonStyle}>Book a Call</button>
                </div>*/}

            </div>
        </div>
    );
};

const buttonStyle = {
    marginRight: 10,
    padding: "10px 20px",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
    backgroundColor: "#f9f9fb",
    border: "none",
    color: "#000",
    borderRadius: 5,
    cursor: "pointer"
};

const ctaButtonStyle = {
    backgroundColor: "#000000",
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    border: "none",
    borderRadius: 5,
    cursor: "pointer"
};

export default Header;
