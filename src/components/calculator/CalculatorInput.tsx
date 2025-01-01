import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface CalculatorInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  max: number;
  step: number;
  unit?: string;
}

const CalculatorInput = ({
  label,
  value,
  onChange,
  max,
  step,
  unit = "",
}: CalculatorInputProps) => {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex items-center gap-4">
        <Slider
          value={[value]}
          onValueChange={([newValue]) => onChange(newValue)}
          max={max}
          step={step}
          className="flex-1"
        />
        <Input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-20"
        />
        {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
      </div>
    </div>
  );
};

export default CalculatorInput;