import React from 'react';
import Link from 'next/link';

function Navbar() {
    const navStyle = {
        color: 'blue',
        textDecoration: 'underline',
        ontWeight: '500',
        marginRight: '20px',
        fontSize: '18px'
    };

    return (
        <div>
            <Link href="/" style={navStyle}>
                Home
            </Link>
            <Link href="/add-campaign" style={navStyle}>
                Add Campaign
            </Link>
            <Link href="/cart" style={navStyle}>
                Cart
            </Link>
        </div>
    );
}   

export default Navbar; // Navbar bileşenini dışarıdan kullanabilmek için export ediyoruz
