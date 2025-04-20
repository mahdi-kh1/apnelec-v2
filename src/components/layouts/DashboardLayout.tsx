import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  User, 
  FileText, 
  Home,
  CreditCard
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const isAdmin = session?.user?.isAdmin;
  const isInstaller = false; // You can add logic to check if user is an installer

  const navItems = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
      active: pathname === '/dashboard',
    },
    {
      label: 'Profile',
      href: '/dashboard/profile',
      icon: <User className="h-5 w-5" />,
      active: pathname === '/dashboard/profile',
    },
    {
      label: 'Subscription',
      href: '/dashboard/subscription',
      icon: <CreditCard className="h-5 w-5" />,
      active: pathname?.includes('/dashboard/subscription') || false,
    },
  ];

  // Admin-specific nav items
  const adminNavItems = [
    {
      label: 'Users',
      href: '/dashboard/admin/users',
      icon: <Users className="h-5 w-5" />,
      active: pathname === '/dashboard/admin/users',
    },
    {
      label: 'Subscription Applications',
      href: '/dashboard/admin/subscription-applications',
      icon: <FileText className="h-5 w-5" />,
      active: pathname === '/dashboard/admin/subscription-applications',
    },
    {
      label: 'Settings',
      href: '/dashboard/admin/settings',
      icon: <Settings className="h-5 w-5" />,
      active: pathname === '/dashboard/admin/settings',
    },
  ];

  // Installer-specific nav items
  const installerNavItems = [
    {
      label: 'Customers',
      href: '/dashboard/customers',
      icon: <Users className="h-5 w-5" />,
      active: pathname === '/dashboard/customers',
    },
    {
      label: 'Installations',
      href: '/dashboard/installations',
      icon: <FileText className="h-5 w-5" />,
      active: pathname === '/dashboard/installations',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
          <div className="flex items-center flex-shrink-0 px-4">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">APNElec</span>
            </Link>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    item.active
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              ))}

              {isInstaller && (
                <>
                  <div className="pt-4 pb-2">
                    <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Installer
                    </h3>
                  </div>
                  {installerNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        item.active
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {item.icon}
                      <span className="ml-3">{item.label}</span>
                    </Link>
                  ))}
                </>
              )}

              {isAdmin && (
                <>
                  <div className="pt-4 pb-2">
                    <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Admin
                    </h3>
                  </div>
                  {adminNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        item.active
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {item.icon}
                      <span className="ml-3">{item.label}</span>
                    </Link>
                  ))}
                </>
              )}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <Link
              href="/"
              className="flex-shrink-0 group block"
            >
              <div className="flex items-center">
                <div>
                  <Home className="inline-block h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Back to Home
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 