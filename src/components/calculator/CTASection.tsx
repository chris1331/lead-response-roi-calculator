import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const LEAD_GEN_FORM_URL = "https://retaingenius.com/lead-gen-management-form/";

const CTASection = () => {
  const { toast } = useToast();
  
  const handleConsultationClick = () => {
    window.open(LEAD_GEN_FORM_URL, "_blank", "noopener,noreferrer");
    toast({
      title: "Opening new tab",
      description: "Taking you to our lead generation management form.",
    });
  };
  
  return (
    <div className="space-y-4 pt-4">
      <h3 className="text-lg font-semibold text-calculator-primary font-mono mb-4">
        Want to reduce your response time?
      </h3>
      <Button
        className="w-full bg-gradient-to-r from-calculator-primary to-calculator-secondary hover:opacity-90 transition-opacity font-sans"
        onClick={handleConsultationClick}
      >
        Schedule a FREE Consultation Today!
      </Button>
    </div>
  );
};

export default CTASection;