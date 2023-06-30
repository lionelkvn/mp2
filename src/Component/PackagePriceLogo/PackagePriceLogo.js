import React, { useState } from 'react';
import './PackagePriceLogo.css';

const PackagePriceLogo = () => {
  const [selectedPackage, setSelectedPackage] = useState('basic');

  const handlePackageClick = (packageType) => {
    setSelectedPackage(packageType);
  };

  return (
    <div className="package-price container">
      <div className='package-option-wrapper'>
        <span
          className={`package-option ${selectedPackage === 'basic' ? 'selected' : ''}`}
          onClick={() => handlePackageClick('basic')}
        >
          Basic
        </span>
        <span
          className={`package-option ${selectedPackage === 'standard' ? 'selected' : ''}`}
          onClick={() => handlePackageClick('standard')}
        >
          Standard
        </span>
        <span
          className={`package-option ${selectedPackage === 'premium' ? 'selected' : ''}`}
          onClick={() => handlePackageClick('premium')}
        >
          Premium
        </span>
      </div>

      {selectedPackage === 'basic' && (
        <div className="package-text">
          <h3>BASIC 1 logo concept (YOU NEED TO HAVE IDEA/CONCEPT HOW YOUR LOGO SHOULD LOOK) ALL FORMAT FILES. 1revision</h3>
          <p>1 concept included</p>
          <p>Logo transparency</p>
          <p>Vector file</p>
          <p>Printable file</p>
          <p>Include source file</p> 
        </div>
      )}

      {selectedPackage === 'standard' && (
        <div className="package-text">
          <h3>STANDARD 2 logo concepts ALL FORMAT FILES. 2 revisions</h3>
          <p>2 concept included</p>
          <p>Logo transparency</p>
          <p>Vector file</p>
          <p>Printable file</p>
          <p>Include source file</p> 
        </div>
      )}

      {selectedPackage === 'premium' && (
        <div className="package-text">
          <h3>PREMIUM UNLIMITED REVISIONS. Work until you are satisfied with logo! ALL FORMAT FILES.</h3>
          <p>1 concept included</p>
          <p>Logo transparency</p>
          <p>Vector file</p>
          <p>Printable file</p>
          <p>Include source file</p> 
        </div>
      )}
    </div>
  );
}

export default PackagePriceLogo;
