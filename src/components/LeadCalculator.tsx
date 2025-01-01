import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface CalculatorInputs {
  responseTime: number;
  leadsPerMonth: number;
  customerValue: number;
  conversionRate: number;
}

const LeadCalculator = () => {
  const { toast } = useToast();
  const [inputs, setInputs] = useState<CalculatorInputs>({
    responseTime: 1,
    leadsPerMonth: 100,
    customerValue: 1000,
    conversionRate: 30,
  });
  const [lostRevenue, setLostRevenue] = useState<number>(0);

  const calculateLostRevenue = () => {
    const conversionLoss = Math.max(0, Math.min(100 - inputs.conversionRate, 100)) / 100;
    const revenue = inputs.leadsPerMonth * inputs.customerValue * conversionLoss;
    setLostRevenue(revenue);
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
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-calculator-primary font-mono">
          Lead Response Time Calculator
        </h2>
        <p className="text-muted-foreground font-sans">
          Calculate potential revenue loss from delayed lead responses
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Average Response Time (hours)</Label>
          <div className="flex items-center gap-4">
            <Slider
              value={[inputs.responseTime]}
              onValueChange={([value]) => handleInputChange("responseTime", value)}
              max={24}
              step={0.5}
              className="flex-1"
            />
            <Input
              type="number"
              value={inputs.responseTime}
              onChange={(e) => handleInputChange("responseTime", Number(e.target.value))}
              className="w-20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Leads per Month</Label>
          <div className="flex items-center gap-4">
            <Slider
              value={[inputs.leadsPerMonth]}
              onValueChange={([value]) => handleInputChange("leadsPerMonth", value)}
              max={1000}
              step={10}
              className="flex-1"
            />
            <Input
              type="number"
              value={inputs.leadsPerMonth}
              onChange={(e) => handleInputChange("leadsPerMonth", Number(e.target.value))}
              className="w-20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Average Customer Value ($)</Label>
          <div className="flex items-center gap-4">
            <Slider
              value={[inputs.customerValue]}
              onValueChange={([value]) => handleInputChange("customerValue", value)}
              max={10000}
              step={100}
              className="flex-1"
            />
            <Input
              type="number"
              value={inputs.customerValue}
              onChange={(e) => handleInputChange("customerValue", Number(e.target.value))}
              className="w-20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Expected Conversion Rate (%)</Label>
          <div className="flex items-center gap-4">
            <Slider
              value={[inputs.conversionRate]}
              onValueChange={([value]) => handleInputChange("conversionRate", value)}
              max={100}
              step={1}
              className="flex-1"
            />
            <Input
              type="number"
              value={inputs.conversionRate}
              onChange={(e) => handleInputChange("conversionRate", Number(e.target.value))}
              className="w-20"
            />
          </div>
        </div>
      </div>

      <div className="p-4 bg-calculator-accent/10 rounded-lg">
        <h3 className="text-lg font-semibold text-calculator-primary font-mono mb-2">
          Estimated Monthly Revenue Loss
        </h3>
        <div className="text-3xl font-bold text-calculator-secondary font-mono animate-number-increment">
          ${lostRevenue.toLocaleString()}
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <p className="text-sm text-muted-foreground font-sans">
          Based on industry research, faster response times can significantly improve conversion rates.
        </p>
        <Button
          className="w-full bg-gradient-to-r from-calculator-primary to-calculator-secondary hover:opacity-90 transition-opacity font-sans"
          onClick={() => {
            window.location.href = "https://retaingenius.com/lead-gen-management-form/";
            toast({
              title: "Redirecting",
              description: "Taking you to our lead generation management form.",
            });
          }}
        >
          Schedule a Demo to Reduce Response Time
        </Button>
      </div>
    </Card>
  );
};

export default LeadCalculator;