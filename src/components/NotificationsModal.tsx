
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface NotificationsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NotificationsModal({ open, onOpenChange }: NotificationsModalProps) {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    periodReminders: true,
    fertileWindowAlerts: true,
    medicationReminders: false,
    healthTips: true,
    appUpdates: true,
  });

  const handleSwitchChange = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    // Here you would typically save these settings to your backend
    toast({
      title: "Notification settings saved",
      description: "Your notification preferences have been updated.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Notification Settings</DialogTitle>
          <DialogDescription>
            Customize when and how you receive notifications.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <h3 className="font-medium">Cycle Notifications</h3>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="period-reminders">Period Reminders</Label>
                <p className="text-xs text-muted-foreground">
                  Get notified 2 days before your predicted period
                </p>
              </div>
              <Switch 
                id="period-reminders"
                checked={settings.periodReminders}
                onCheckedChange={() => handleSwitchChange('periodReminders')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="fertile-window">Fertile Window Alerts</Label>
                <p className="text-xs text-muted-foreground">
                  Get notified when you enter your fertile window
                </p>
              </div>
              <Switch 
                id="fertile-window"
                checked={settings.fertileWindowAlerts}
                onCheckedChange={() => handleSwitchChange('fertileWindowAlerts')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="medication-reminders">Medication Reminders</Label>
                <p className="text-xs text-muted-foreground">
                  Daily reminders to take medication or supplements
                </p>
              </div>
              <Switch 
                id="medication-reminders"
                checked={settings.medicationReminders}
                onCheckedChange={() => handleSwitchChange('medicationReminders')}
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">Other Notifications</h3>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="health-tips">Health Tips & Articles</Label>
                <p className="text-xs text-muted-foreground">
                  Receive weekly health tips tailored to your cycle
                </p>
              </div>
              <Switch 
                id="health-tips"
                checked={settings.healthTips}
                onCheckedChange={() => handleSwitchChange('healthTips')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-updates">App Updates</Label>
                <p className="text-xs text-muted-foreground">
                  Be notified about new features and improvements
                </p>
              </div>
              <Switch 
                id="app-updates"
                checked={settings.appUpdates}
                onCheckedChange={() => handleSwitchChange('appUpdates')}
              />
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
