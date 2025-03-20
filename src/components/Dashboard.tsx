import React from 'react';
import { title as titleStyle, subtitle as subtitleStyle } from "@/components/primitives";
import Layout from './Layout';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface StatCardProps {
  value: number;
  description: string;
  trend?: 'up' | 'down';
  trendValue?: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, description, trend, trendValue }) => {
  return (
    <div className="p-6 bg-default-50 dark:bg-default-100 rounded-lg shadow-sm">
      <div className="flex flex-col">
        <span className={titleStyle({ size: "lg", class: "mb-2" })}>
          {value.toLocaleString()}
        </span>
        <span className={subtitleStyle({ class: "text-sm text-default-500" })}>
          {description}
        </span>
        {trend && trendValue && (
          <div className={`mt-2 text-sm ${trend === 'up' ? 'text-success' : 'text-danger'}`}>
            {trend === 'up' ? '↑' : '↓'} {trendValue}% from last month
          </div>
        )}
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const stats = [
    { value: 767, description: 'Total offers', trend: 'up' as const, trendValue: 12 },
    { value: 777, description: 'Patients of interest', trend: 'up' as const, trendValue: 8 },
    { value: 523, description: 'Kits delivered', trend: 'up' as const, trendValue: 15 },
    { value: 513, description: 'Kits received', trend: 'down' as const, trendValue: 3 },
    { value: 435, description: 'Reports ready', trend: 'up' as const, trendValue: 5 },
    { value: 217, description: 'Positive results', trend: 'up' as const, trendValue: 7 },
  ];

  const progressData = [
    { month: 'Jan', offers: 300, kits: 200, reports: 150 },
    { month: 'Feb', offers: 400, kits: 320, reports: 280 },
    { month: 'Mar', offers: 500, kits: 420, reports: 350 },
    { month: 'Apr', offers: 580, kits: 480, reports: 400 },
    { month: 'May', offers: 650, kits: 520, reports: 420 },
    { month: 'Jun', offers: 767, kits: 523, reports: 435 },
  ];

  return (
    <Layout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className={titleStyle({ size: "lg", class: "mb-2" })}>
            Genetic Testing Program
          </h1>
          <p className={subtitleStyle({ class: "text-default-500" })}>
            Program statistics and overview
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              description={stat.description}
              trend={stat.trend}
              trendValue={stat.trendValue}
            />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-default-50 dark:bg-default-100 rounded-lg p-6">
            <h2 className={titleStyle({ size: "sm", class: "mb-4" })}>Testing Progress</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={progressData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#888" opacity={0.2} />
                  <XAxis 
                    dataKey="month" 
                    stroke="currentColor" 
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis 
                    stroke="currentColor"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'var(--bg-default-100)',
                      borderColor: 'var(--border-default-200)',
                      borderRadius: '8px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="offers"
                    name="Total Offers"
                    stroke="#0070F3"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="kits"
                    name="Kits Delivered"
                    stroke="#F5A623"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="reports"
                    name="Reports Ready"
                    stroke="#17C964"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-default-50 dark:bg-default-100 rounded-lg p-6">
            <h2 className={titleStyle({ size: "sm", class: "mb-4" })}>Patient Funnel</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-default-500">Total sponsor offers</span>
                <span className="text-sm font-medium">767</span>
                <div className="w-1/2 h-4 bg-default-200 rounded-lg"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-default-500">Kits delivered</span>
                <span className="text-sm font-medium">523</span>
                <div className="w-[40%] h-4 bg-default-200 rounded-lg"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-default-500">Kits received</span>
                <span className="text-sm font-medium">513</span>
                <div className="w-[38%] h-4 bg-default-200 rounded-lg"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-default-500">Reports ready</span>
                <span className="text-sm font-medium">435</span>
                <div className="w-[30%] h-4 bg-default-200 rounded-lg"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-default-500">Positive results</span>
                <span className="text-sm font-medium">217</span>
                <div className="w-[20%] h-4 bg-default-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard; 