import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar, User, Settings, Heart, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SettingsModal } from '@/components/SettingsModal';

// Componente para enlaces externos que evita la navegación de Clerk
const ExternalLink = ({ 
  href, 
  className, 
  children,
  onClick
}: { 
  href: string; 
  className?: string; 
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick(e);
    window.location.href = href;
  };

  return (
    <a 
      href={href} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  // URL base para todos los enlaces externos
  const baseUrl = 'https://www.period.click/signup';

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
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
                Home
              </Link>
              <a 
                href="https://www.period.click/signup"
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400 flex items-center"
              >
                <Calendar className="h-4 w-4 mr-1" />
                Tracker
              </a>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <ExternalLink 
                      href={baseUrl}
                      className="inline-flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400"
                    >
                      Products
                      <span className="ml-1">▼</span>
                    </ExternalLink>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Tracking cycle</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Track your menstrual cycle and symptoms
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Getting pregnant</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Tools for planning conception
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Pregnancy</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Support through your pregnancy journey
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Help Center</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Get answers to your questions
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Flo for Partners</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Share insights with your partner
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Anonymous Mode</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Enhanced privacy features
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Flo Premium</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Unlock advanced features
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Symptom Checker</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Track and analyze your symptoms</div>
                        </ExternalLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <ExternalLink 
                      href={baseUrl}
                      className="inline-flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400"
                    >
                      Calculators
                      <span className="ml-1">▼</span>
                    </ExternalLink>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Ovulation calculator</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Find your most fertile days
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">hCG calculator</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Calculate hCG levels during pregnancy
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Pregnancy test calculator</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            When to take a pregnancy test
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Menstrual cycle calculator</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Track your menstrual cycle
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Period calculator</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Predict your next period
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Implantation calculator</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Calculate when implantation may occur
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Pregnancy weeks to months</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Convert pregnancy weeks to months
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Pregnancy due date</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Calculate your estimated due date
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">IVF and FET due date</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Calculate due date for IVF pregnancies
                          </p>
                        </ExternalLink>
                        <ExternalLink 
                          href={baseUrl}
                          className="w-full text-left p-3 space-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 block"
                        >
                          <div className="font-medium">Due date by ultrasound</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Adjust due date based on ultrasound
                          </p>
                        </ExternalLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <ExternalLink 
                href={baseUrl}
                className="px-3 py-2 text-sm font-medium text-bloom-600 dark:text-bloom-400 hover:text-bloom-700 dark:hover:text-bloom-300"
              >
                Premium
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400 flex items-center"
              >
                <Calendar className="h-4 w-4 mr-1" />
                Tracker
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400 flex items-center"
              >
                <BookOpen className="h-4 w-4 mr-1" />
                Blog
              </ExternalLink>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {user ? (
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
            <ExternalLink 
              href={baseUrl}
              className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400"
            >
              Home
            </ExternalLink>
            
            <ExternalLink 
              href={baseUrl}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 flex items-center"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Tracker
            </ExternalLink>

            <div className="space-y-1">
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Tracking cycle
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Getting pregnant
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Pregnancy
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Help Center
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Flo for Partners
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Premium
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Anonymous Mode
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Symptom Checker
              </ExternalLink>
            </div>

            <div className="space-y-1">
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Ovulation calculator
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                hCG calculator
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Pregnancy test calculator
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Menstrual cycle calculator
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Period calculator
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Implantation calculator
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Pregnancy weeks to months
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Pregnancy due date
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                IVF and FET due date
              </ExternalLink>
              <ExternalLink 
                href={baseUrl}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 block"
              >
                Due date by ultrasound
              </ExternalLink>
            </div>
            
            <ExternalLink 
              href={baseUrl}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-bloom-600 dark:text-bloom-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-700 dark:hover:text-bloom-300"
            >
              Premium
            </ExternalLink>
            <Link to="/blog" className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              Blog
            </Link>
            
            {user ? (
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
