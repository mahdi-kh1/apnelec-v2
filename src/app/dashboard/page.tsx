"use client";

import { useState } from "react";
import { 
  Users,
  Sun,
  BatteryCharging,
  Wrench,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Activity,
  MessageSquare,
  Calendar,
  Clock,
  MoreHorizontal,
  RefreshCw,
  TrendingUp,
  Info,
  XCircle
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardPage = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12%",
      trend: "up",
      icon: Users,
      href: "/dashboard/users",
      color: "from-blue-500 to-blue-600",
      lightColor: "rgba(59, 130, 246, 0.1)",
    },
    {
      title: "Solar Installations",
      value: "156",
      change: "+8%",
      trend: "up",
      icon: Sun,
      href: "/dashboard/solar",
      color: "from-green-500 to-green-600",
      lightColor: "rgba(16, 185, 129, 0.1)",
    },
    {
      title: "EV Chargers",
      value: "89",
      change: "-3%",
      trend: "down",
      icon: BatteryCharging,
      href: "/dashboard/ev",
      color: "from-purple-500 to-purple-600",
      lightColor: "rgba(168, 85, 247, 0.1)",
    },
    {
      title: "Service Requests",
      value: "234",
      change: "+5%",
      trend: "up",
      icon: Wrench,
      href: "/dashboard/services",
      color: "from-orange-500 to-orange-600",
      lightColor: "rgba(249, 115, 22, 0.1)",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "user",
      title: "New User Registered",
      description: "John Smith created a new account",
      time: "10 minutes ago",
      icon: Users,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      id: 2,
      type: "solar",
      title: "Solar Installation Scheduled",
      description: "Installation #S-1234 for Sarah Johnson",
      time: "2 hours ago",
      icon: Sun,
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      id: 3,
      type: "message",
      title: "New Support Request",
      description: "EV charger issue reported by David Wilson",
      time: "4 hours ago",
      icon: MessageSquare,
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
      id: 4,
      type: "service",
      title: "Service Completed",
      description: "Electrical maintenance at 123 Main St",
      time: "Yesterday, 15:30",
      icon: Wrench,
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      title: "Solar Panel Inspection",
      customer: "Emily Parker",
      address: "42 Sunshine Avenue",
      date: "Today, 14:00",
      status: "Confirmed",
      statusColor: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      id: 2,
      title: "EV Charger Installation",
      customer: "Michael Brown",
      address: "78 Electric Drive",
      date: "Tomorrow, 10:30",
      status: "Pending",
      statusColor: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
    },
    {
      id: 3,
      title: "Electrical System Upgrade",
      customer: "Sophie Taylor",
      address: "15 Power Road",
      date: "Jan 25, 09:00",
      status: "Confirmed",
      statusColor: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
  ];

  // Container animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  // Item animation variants
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back to your dashboard</p>
        </div>
        <button 
          onClick={refreshData}
          className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary font-medium transition-colors self-start"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
          <span>Refresh Data</span>
        </button>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat) => (
          <motion.div key={stat.title} variants={item}>
            <Link href={stat.href} className="block">
              <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl bg-${stat.lightColor}`}
                    style={{ backgroundColor: stat.lightColor }}
                  >
                    <stat.icon className="w-6 h-6 text-gray-800 dark:text-white" />
                  </div>
                  <div className={`text-sm font-medium flex items-center gap-1 ${
                    stat.trend === "up" 
                      ? "text-green-600 dark:text-green-400" 
                      : "text-red-600 dark:text-red-400"
                  }`}>
                    {stat.trend === "up" ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    {stat.change}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{stat.title}</p>
                </div>
                <div 
                  className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${stat.color}`}
                ></div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <motion.div 
          variants={item}
          initial="hidden"
          animate="show"
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-lg font-medium">Performance Overview</CardTitle>
                <CardDescription>Energy production and consumption metrics</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Info className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center bg-muted/20 rounded-md mb-2">
                <div className="flex flex-col items-center text-muted-foreground">
                  <BarChart3 className="w-10 h-10 mb-2" />
                  <p>Performance chart will be displayed here</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {["Energy Production", "Consumption", "Savings", "Efficiency"].map((metric, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-sm text-muted-foreground">{metric}</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-lg font-semibold">
                        {i === 0 && "45.2 kWh"}
                        {i === 1 && "32.8 kWh"}
                        {i === 2 && "£12.40"}
                        {i === 3 && "92%"}
                      </span>
                      {i !== 3 && <TrendingUp className="w-4 h-4 text-green-500" />}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div 
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
              <button className="text-sm text-primary hover:underline">View all</button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex gap-3">
                    <div className={`p-2 rounded-full ${activity.color} flex-shrink-0`}>
                      <activity.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{activity.description}</p>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Upcoming Appointments */}
      <motion.div 
        variants={item}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg font-medium">Upcoming Appointments</CardTitle>
              <CardDescription>Your scheduled services and consultations</CardDescription>
            </div>
            <Link href="/dashboard/services" className="text-sm text-primary hover:underline">
              View calendar
            </Link>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-muted-foreground border-b dark:border-gray-700">
                    <th className="text-left font-medium py-3 pl-4">Service</th>
                    <th className="text-left font-medium py-3">Customer</th>
                    <th className="text-left font-medium py-3">Date & Time</th>
                    <th className="text-left font-medium py-3 pr-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingAppointments.map((appointment) => (
                    <tr key={appointment.id} className="border-b last:border-b-0 dark:border-gray-700 hover:bg-muted/20">
                      <td className="py-3 pl-4">
                        <div className="flex flex-col">
                          <span className="font-medium">{appointment.title}</span>
                          <span className="text-xs text-muted-foreground">{appointment.address}</span>
                        </div>
                      </td>
                      <td className="py-3">{appointment.customer}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-muted-foreground" />
                          <span>{appointment.date}</span>
                        </div>
                      </td>
                      <td className="py-3 pr-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${appointment.statusColor}`}>
                          {appointment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* System Status */}
      <motion.div 
        variants={item}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">All systems operational</span>
              <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                Online
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BatteryCharging className="w-4 h-4 text-primary" />
              Battery Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Energy Storage</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{width: "75%"}}></div>
                </div>
                <span className="text-xs font-medium">75%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <XCircle className="w-4 h-4 text-primary" />
              Active Alarms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">No active alarms</span>
              <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                0
              </span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default DashboardPage;