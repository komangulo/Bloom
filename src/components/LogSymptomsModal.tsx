
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

const symptoms = [
  { id: "cramps", label: "Cramps" },
  { id: "headache", label: "Headache" },
  { id: "bloating", label: "Bloating" },
  { id: "backPain", label: "Back Pain" },
  { id: "fatigue", label: "Fatigue" },
  { id: "breastTenderness", label: "Breast Tenderness" },
  { id: "moodSwings", label: "Mood Swings" },
  { id: "acne", label: "Acne" },
];

interface LogSymptomsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LogSymptomsModal({ open, onOpenChange }: LogSymptomsModalProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms((current) => {
      if (current.includes(symptomId)) {
        return current.filter((id) => id !== symptomId);
      } else {
        return [...current, symptomId];
      }
    });
  };

  const handleSubmit = () => {
    if (selectedSymptoms.length === 0) {
      toast({
        title: "No symptoms selected",
        description: "Please select at least one symptom to log",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically save this data to your backend
    // For now we'll just show a success toast
    const selectedLabels = symptoms
      .filter(symptom => selectedSymptoms.includes(symptom.id))
      .map(symptom => symptom.label);

    toast({
      title: "Symptoms logged successfully",
      description: `You've logged: ${selectedLabels.join(", ")}`,
    });

    // Reset and close
    setSelectedSymptoms([]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Log Symptoms</DialogTitle>
          <DialogDescription>
            Select the symptoms you're experiencing today.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {symptoms.map((symptom) => (
            <div key={symptom.id} className="flex items-center space-x-2">
              <Checkbox
                id={symptom.id}
                checked={selectedSymptoms.includes(symptom.id)}
                onCheckedChange={() => handleSymptomToggle(symptom.id)}
              />
              <label
                htmlFor={symptom.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {symptom.label}
              </label>
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
