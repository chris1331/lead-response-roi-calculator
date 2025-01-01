import LeadCalculator from "@/components/LeadCalculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-calculator-accent/10 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-calculator-primary font-mono">
            Lead Response ROI Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
            Discover how much revenue you could be losing due to delayed lead responses
          </p>
        </div>
        <LeadCalculator />
      </div>
    </div>
  );
};

export default Index;