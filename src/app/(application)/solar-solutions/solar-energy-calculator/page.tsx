'use client';

import { useState } from 'react';
import InstallationForm from '@/components/solar-calculator/InstallationForm';
import SolarCalculator from '@/components/solar-calculator/SolarCalculator';

export default function SolarCalculatorPage() {
  const [postcode, setPostcode] = useState('');
  const [calculationResults, setCalculationResults] = useState(null);
  
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Solar Energy Calculator</h1>
      <p className="lead mb-4">
        Use our solar energy calculator to estimate the performance of your solar PV system.
        Enter your details and roof information to get started.
      </p>
      {/* <SolarCalculator 
        postcode={postcode} 
        onCalculate={(results) => setCalculationResults(results)} 
      /> */}
      <InstallationForm />
      {/* <SolarCalculator /> */}
    </div>
  );
} 