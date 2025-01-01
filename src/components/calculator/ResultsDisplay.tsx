interface ResultsDisplayProps {
  lostRevenue: number;
}

const ResultsDisplay = ({ lostRevenue }: ResultsDisplayProps) => {
  return (
    <div className="p-4 bg-calculator-accent/10 rounded-lg">
      <h3 className="text-lg font-semibold text-calculator-primary font-mono mb-2">
        Estimated Monthly Revenue Loss
      </h3>
      <div className="text-3xl font-bold text-calculator-secondary font-mono animate-number-increment">
        ${lostRevenue.toLocaleString()}
      </div>
    </div>
  );
};

export default ResultsDisplay;