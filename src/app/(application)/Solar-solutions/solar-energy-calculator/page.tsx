import InstallationForm from '@/components/solar-calculator/InstallationForm';

export default function SolarCalculatorPage() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Solar Energy Calculator</h1>
      <p className="lead mb-4">
        Use our solar energy calculator to estimate the performance of your solar PV system.
        Enter your details and roof information to get started.
      </p>
      
      <InstallationForm />
    </div>
  );
} 