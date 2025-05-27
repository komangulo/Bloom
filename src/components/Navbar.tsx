import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar, User, Settings, Heart, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUser, SignInButton, SignUpButton } from '@clerk/clerk-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SettingsModal } from '@/components/SettingsModal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { isSignedIn, user } = useUser();

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 mr-2">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-bloom-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
                  B
                </div>
              </div>
              <span className="font-bold text-xl text-bloom-600 dark:text-bloom-400">Bloom</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">
                Home
              </Link>
              
              <Link to="/tracker" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Tracker
              </Link>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-bloom-600 dark:hover:text-bloom-400 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <Link to="/products/tracking-cycle" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Tracking cycle</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Track your menstrual cycle and symptoms
                          </p>
                        </Link>
                        <Link to="/products/getting-pregnant" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Getting pregnant</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Tools for planning conception
                          </p>
                        </Link>
                        <Link to="/products/pregnancy" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Pregnancy</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Support through your pregnancy journey
                          </p>
                        </Link>
                        <Link to="/products/help-center" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Help Center</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Get answers to your questions
                          </p>
                        </Link>
                        <Link to="/products/flo-for-partners" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Flo for Partners</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Share insights with your partner
                          </p>
                        </Link>
                        <Link to="/products/anonymous-mode" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Anonymous Mode</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Enhanced privacy features
                          </p>
                        </Link>
                        <Link to="/products/premium" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Flo Premium</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Unlock advanced features
                          </p>
                        </Link>
                        <Link to="/products/symptom-checker" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Symptom Checker</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Track and analyze your symptoms</div>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-bloom-600 dark:hover:text-bloom-400 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                      Calculators
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <Link to="/calculators/ovulation" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Ovulation calculator</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Find your most fertile days
                          </p>
                        </Link>
                        <Link to="/calculators/hcg" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">hCG calculator</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Calculate hCG levels during pregnancy
                          </p>
                        </Link>
                        <Link to="/calculators/pregnancy-test" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Pregnancy test calculator</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            When to take a pregnancy test
                          </p>
                        </Link>
                        <Link to="/calculators/menstrual-cycle" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Menstrual cycle calculator</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Track your menstrual cycle
                          </p>
                        </Link>
                        <Link to="/calculators/period" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Period calculator</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Predict your next period
                          </p>
                        </Link>
                        <Link to="/calculators/implantation" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Implantation calculator</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Calculate when implantation may occur
                          </p>
                        </Link>
                        <Link to="/calculators/pregnancy-weeks-to-months" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Pregnancy weeks to months</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Convert pregnancy weeks to months
                          </p>
                        </Link>
                        <Link to="/calculators/pregnancy-due-date" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Pregnancy due date</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Calculate your estimated due date
                          </p>
                        </Link>
                        <Link to="/calculators/ivf-fet-due-date" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">IVF and FET due date</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Calculate due date for IVF pregnancies
                          </p>
                        </Link>
                        <Link to="/calculators/due-date-by-ultrasound" className="block p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                          <div className="font-medium">Due date by ultrasound</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Adjust due date based on ultrasound
                          </p>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <Link to="/premium" className="px-3 py-2 text-sm font-medium text-bloom-600 dark:text-bloom-400 hover:text-bloom-700 dark:hover:text-bloom-300">
                Premium
              </Link>
              <Link to="/blog" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400 flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                Blog
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {isSignedIn ? (
              <>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full"
                  onClick={() => setSettingsOpen(true)}
                >
                  <Settings className="h-5 w-5" />
                </Button>
                <Link to="/dashboard">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button variant="default" className="bg-gradient-to-r from-bloom-500 to-purple-500">
                    Get Started
                  </Button>
                </SignUpButton>
              </>
            )}
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 px-4 pt-2 pb-4 border-b border-border">
          <div className="flex flex-col space-y-2">
            <Link to="/" className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400">
              Home
            </Link>
            
            <Link to="/tracker" className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Tracker
            </Link>

            <div className="collapsible">
              <button 
                onClick={() => {
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 flex justify-between items-center"
              >
                Products
                <span></span>
              </button>
              {false && (
                <div className="pl-6 space-y-1">
                  <Link to="/products/tracking-cycle" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Tracking cycle</Link>
                  <Link to="/products/getting-pregnant" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Getting pregnant</Link>
                  <Link to="/products/pregnancy" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Pregnancy</Link>
                  <Link to="/products/help-center" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Help Center</Link>
                  <Link to="/products/flo-for-partners" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Flo for Partners</Link>
                  <Link to="/products/anonymous-mode" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Anonymous Mode</Link>
                  <Link to="/products/premium" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Flo Premium</Link>
                  <Link to="/products/symptom-checker" className="flex px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">
                    Symptom Checker
                  </Link>
                </div>
              )}
            </div>

            <div className="collapsible">
              <button 
                onClick={() => {
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 flex justify-between items-center"
              >
                Calculators
                <span></span>
              </button>
              {false && (
                <div className="pl-6 space-y-1">
                  <Link to="/calculators/ovulation" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Ovulation calculator</Link>
                  <Link to="/calculators/hcg" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">hCG calculator</Link>
                  <Link to="/calculators/pregnancy-test" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Pregnancy test calculator</Link>
                  <Link to="/calculators/menstrual-cycle" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Menstrual cycle calculator</Link>
                  <Link to="/calculators/period" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Period calculator</Link>
                  <Link to="/calculators/implantation" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Implantation calculator</Link>
                  <Link to="/calculators/pregnancy-weeks-to-months" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Pregnancy weeks to months</Link>
                  <Link to="/calculators/pregnancy-due-date" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Pregnancy due date</Link>
                  <Link to="/calculators/ivf-fet-due-date" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">IVF and FET due date</Link>
                  <Link to="/calculators/due-date-by-ultrasound" className="block px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">Due date by ultrasound</Link>
                </div>
              )}
            </div>
            
            <Link to="/premium" className="px-3 py-2 rounded-md text-base font-medium text-bloom-600 dark:text-bloom-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-700 dark:hover:text-bloom-300">
              Premium
            </Link>
            <Link to="/blog" className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              Blog
            </Link>
            
            {isSignedIn ? (
              <div className="pt-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
                <Link to="/settings">
                  <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </Link>
                <div className="w-4"></div>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="pt-4 flex flex-col gap-2 border-t border-gray-200 dark:border-gray-700">
                <SignInButton mode="modal">
                  <Button variant="outline" className="w-full">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="w-full bg-gradient-to-r from-bloom-500 to-purple-500">
                    Get Started
                  </Button>
                </SignUpButton>
              </div>
            )}
          </div>
        </div>
      )}

      <SettingsModal open={settingsOpen} onOpenChange={setSettingsOpen} />
    </nav>
  );
}
