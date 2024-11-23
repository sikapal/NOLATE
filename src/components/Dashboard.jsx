import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpwardOutlined';
import Chart from 'chart.js/auto';


// Card component with chart
const PerformanceChart = ({ label, data, color }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Ref to store the Chart instance

  useEffect(() => {
    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    // Create a new chart instance and store it in the ref
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label,
            data,
            borderColor: color,
            backgroundColor: `${color}33`, // Add transparency
            borderWidth: 2,
            fill: true,
            tension: 0.4, // Smooth curves
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Hide legend
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.raw} units`; // Custom tooltip
              },
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              callback: function (value) {
                return `${value}%`; // Append % to Y-axis
              },
            },
            grid: {
              borderDash: [4, 4], // Dashed gridlines
            },
          },
        },
      },
    });

    // Cleanup function to destroy the chart when the component unmounts or re-renders
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [label, data, color]); // Rerun the effect if any of these dependencies change

  return <canvas ref={chartRef} className="w-full h-40"></canvas>;
};

// Dashboard component
const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const salesData = [10, 20, 30, 40, 50];
  const clientsData = [5, 10, 15, 20, 30];
  const revenueData = [100, 200, 300, 400, 500];

  return (
    <div className="flex w-full">
      <div className=""><Sidebar open={open} setOpen={setOpen} /></div>
      <div className="w-full">
        <div className="content">
          <Header setOpen={setOpen} />
          <div className="p-2">
            <div className="p-4 bg-gray-100 min-h-screen">
              <div className="flex gap-4 mb-8">
                {/* Card 1 */}
                <div className="flex-1 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-700">Ventes</h2>
                    <div className="flex items-center text-green-500">
                      <ArrowUpwardIcon style={{ fontSize: '24px' }} />
                      <span className="ml-2 font-bold">+12%</span>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-4">Augmentation des ventes ce mois-ci par rapport au mois précédent.</p>
                  <PerformanceChart label="Ventes" data={salesData} color="#34D399" />
                </div>

                {/* Card 2 */}
                <div className="flex-1 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-700">Clients</h2>
                    <div className="flex items-center text-blue-500">
                      <ArrowUpwardIcon style={{ fontSize: '24px' }} />
                      <span className="ml-2 font-bold">+150</span>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-4">Vous avez gagné 150 nouveaux clients cette semaine.</p>
                  <PerformanceChart label="Clients" data={clientsData} color="#60A5FA" />
                </div>

                {/* Card 3 */}
                <div className="flex-1 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-700">Revenu</h2>
                    <div className="flex items-center text-purple-500">
                      <ArrowUpwardIcon style={{ fontSize: '24px' }} />
                      <span className="ml-2 font-bold">2 450 000 FCFA</span>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-4">Votre revenu total ce mois-ci est en hausse.</p>
                  <PerformanceChart label="Revenu" data={revenueData} color="#9333EA" />
                </div>
              </div>

              {/* Row with 2 divs with graphics */}
              <div className="flex gap-4 mb-8">
                <div className="w-3/5 bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-700">Graphique des Ventes</h3>
                  <PerformanceChart label="Ventes" data={salesData} color="#34D399" />
                </div>
                <div className="w-2/5 bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-700">Graphique des Clients</h3>
                  <PerformanceChart label="Clients" data={clientsData} color="#60A5FA" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
