
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

interface SettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsModal({ open, onOpenChange }: SettingsModalProps) {
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    birthday: "1990-01-01",
  });
  
  const [preferences, setPreferences] = useState({
    darkMode: false,
    dataSharing: false,
    themeColor: "bloom",
  });
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handlePreferenceToggle = (key: keyof typeof preferences) => {
    if (typeof preferences[key] === 'boolean') {
      setPreferences((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    }
  };
  
  const handleThemeChange = (value: string) => {
    setPreferences((prev) => ({
      ...prev,
      themeColor: value,
    }));
  };
  
  const handleSaveProfile = () => {
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved.",
    });
  };
  
  const handleSavePreferences = () => {
    toast({
      title: "Preferences saved",
      description: "Your app preferences have been updated.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Manage your account settings and preferences.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-4 py-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={profile.name} 
                  onChange={handleProfileChange}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={profile.email} 
                  onChange={handleProfileChange}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="birthday">Birthday</Label>
                <Input 
                  id="birthday" 
                  name="birthday" 
                  type="date" 
                  value={profile.birthday} 
                  onChange={handleProfileChange}
                />
              </div>
              
              <Button onClick={handleSaveProfile}>Save Profile</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="preferences" className="space-y-4 py-4">
            <div className="grid gap-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-xs text-muted-foreground">
                    Use dark theme for the app
                  </p>
                </div>
                <Switch 
                  id="dark-mode"
                  checked={preferences.darkMode}
                  onCheckedChange={() => handlePreferenceToggle('darkMode')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="data-sharing">Anonymous Data Sharing</Label>
                  <p className="text-xs text-muted-foreground">
                    Share anonymized data to improve Bloom (no personal info)
                  </p>
                </div>
                <Switch 
                  id="data-sharing"
                  checked={preferences.dataSharing}
                  onCheckedChange={() => handlePreferenceToggle('dataSharing')}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Theme Color</Label>
                <RadioGroup 
                  value={preferences.themeColor} 
                  onValueChange={handleThemeChange}
                  className="flex flex-wrap gap-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bloom" id="bloom" />
                    <Label htmlFor="bloom" className="cursor-pointer">
                      <span className="inline-block w-4 h-4 bg-bloom-500 rounded-full mr-1"></span>
                      Bloom
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="purple" id="purple" />
                    <Label htmlFor="purple" className="cursor-pointer">
                      <span className="inline-block w-4 h-4 bg-purple-500 rounded-full mr-1"></span>
                      Purple
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="teal" id="teal" />
                    <Label htmlFor="teal" className="cursor-pointer">
                      <span className="inline-block w-4 h-4 bg-teal-500 rounded-full mr-1"></span>
                      Teal
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <Button onClick={handleSavePreferences}>Save Preferences</Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
