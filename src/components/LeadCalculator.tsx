import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import CalculatorHeader from "./calculator/CalculatorHeader";
import CalculatorInput from "./calculator/CalculatorInput";
import ResultsDisplay from "./calculator/ResultsDisplay";
import CTASection from "./calculator/CTASection";

interface CalculatorInputs {
  responseTime: number;
  leadsPerMonth: number;
  customerValue: number;
  conversionRate: number;
}

const LeadCalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    responseTime: 1,
    leadsPerMonth: 100,
    customerValue: 1000,
    conversionRate: 30,
  });
  const [lostRevenue, setLostRevenue] = useState<number>(0);

  const calculateLostRevenue = () => {
    // Calculate maximum possible revenue
    const maxRevenue = inputs.leadsPerMonth * inputs.customerValue;
    
    // Calculate base revenue loss using conversion rate
    const conversionLoss = Math.max(0, Math.min(100 - inputs.conversionRate, 100)) / 100;
    const baseRevenue = maxRevenue * conversionLoss;
    
    // Calculate multiplier based on response time (1.5x for each hour)
    const multiplier = 1 + (inputs.responseTime * 1.5);
    
    // Calculate final revenue loss, ensuring it doesn't exceed max revenue
    const calculatedRevenue = Math.min(baseRevenue * multiplier, maxRevenue);
    setLostRevenue(calculatedRevenue);
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    calculateLostRevenue();
  }, [inputs]);

  return (
    <Card className="w-full max-w-2xl p-6 space-y-6">
      <CalculatorHeader />

      <div className="space-y-4">
        <CalculatorInput
          label="Average Response Time (hours)"
          value={inputs.responseTime}
          onChange={(value) => handleInputChange("responseTime", value)}
          max={24}
          step={0.5}
        />

        <CalculatorInput
          label="Leads per Month"
          value={inputs.leadsPerMonth}
          onChange={(value) => handleInputChange("leadsPerMonth", value)}
          max={1000}
          step={10}
        />

        <CalculatorInput
          label="Average Customer Value ($)"
          value={inputs.customerValue}
          onChange={(value) => handleInputChange("customerValue", value)}
          max={10000}
          step={100}
          unit="$"
        />

        <CalculatorInput
          label="Expected Conversion Rate (%)"
          value={inputs.conversionRate}
          onChange={(value) => handleInputChange("conversionRate", value)}
          max={100}
          step={1}
          unit="%"
        />
      </div>

      <ResultsDisplay lostRevenue={lostRevenue} />
      <CTASection />
    </Card>
  );
};

export default LeadCalculator;