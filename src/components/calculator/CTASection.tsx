import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const CTASection = () => {
  const { toast } = useToast();
  
  return (
    <div className="space-y-4 pt-4">
      <h3 className="text-lg font-semibold text-calculator-primary font-mono mb-4">
        Want to reduce your response time?
      </h3>
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
        Schedule a FREE Consultation Today!
      </Button>
    </div>
  );
};

export default CTASection;