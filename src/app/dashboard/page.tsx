import { 
  Users,
  Sun,
  BatteryCharging,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const DashboardPage = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: Users,
      href: "/dashboard/users",
      color: "bg-blue-500",
    },
    {
      title: "Solar Solutions",
      value: "156",
      icon: Sun,
      href: "/dashboard/solar",
      color: "bg-green-500",
    },
    {
      title: "EV Solutions",
      value: "89",
      icon: BatteryCharging,
      href: "/dashboard/ev",
      color: "bg-purple-500",
    },
    {
      title: "Services",
      value: "234",
      icon: Wrench,
      href: "/dashboard/services",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link href={stat.href} key={stat.title}>
            <div className="relative overflow-hidden rounded-lg border border-gray-200  dark:bg-gray-900 p-6 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;