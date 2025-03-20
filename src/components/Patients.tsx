import React from 'react';
import { title as titleStyle, subtitle as subtitleStyle } from "@/components/primitives";
import Layout from './Layout';

const Patients: React.FC = () => {
  const patients = [
    { id: 'P001', name: 'John Doe', status: 'Kit Delivered', date: '2024-03-20' },
    { id: 'P002', name: 'Jane Smith', status: 'Results Ready', date: '2024-03-19' },
    { id: 'P003', name: 'Mike Johnson', status: 'Kit Received', date: '2024-03-18' },
    { id: 'P004', name: 'Sarah Williams', status: 'Pending', date: '2024-03-17' },
    { id: 'P005', name: 'Robert Brown', status: 'Results Ready', date: '2024-03-16' },
  ];

  return (
    <Layout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className={titleStyle({ size: "lg", class: "mb-2" })}>
            Patients
          </h1>
          <p className={subtitleStyle({ class: "text-default-500" })}>
            Manage and track patient testing status
          </p>
        </div>

        <div className="bg-default-50 dark:bg-default-100 rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-default-200 dark:border-default-100">
                  <th className="text-left p-4 font-medium text-default-600">Patient ID</th>
                  <th className="text-left p-4 font-medium text-default-600">Name</th>
                  <th className="text-left p-4 font-medium text-default-600">Status</th>
                  <th className="text-left p-4 font-medium text-default-600">Date</th>
                  <th className="text-left p-4 font-medium text-default-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr 
                    key={patient.id}
                    className="border-b border-default-200 dark:border-default-100 last:border-0"
                  >
                    <td className="p-4 text-default-600">{patient.id}</td>
                    <td className="p-4 text-default-600">{patient.name}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${patient.status === 'Results Ready' ? 'bg-success/20 text-success' :
                          patient.status === 'Kit Delivered' ? 'bg-warning/20 text-warning' :
                          patient.status === 'Kit Received' ? 'bg-primary/20 text-primary' :
                          'bg-default-200 text-default-600'
                        }`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="p-4 text-default-600">{patient.date}</td>
                    <td className="p-4">
                      <button className="text-primary hover:text-primary-500">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Patients; 