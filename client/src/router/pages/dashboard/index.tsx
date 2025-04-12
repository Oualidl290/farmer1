const Dashboard = () => {
  // Sample data
  const farmStats = [
    { name: "Total Crops", value: "24", change: "+12%" },
    { name: "Livestock", value: "48", change: "+5%" },
    { name: "Harvest Yield", value: "85%", change: "+7%" },
    { name: "Water Usage", value: "3200L", change: "-3%" },
  ];

  const recentActivities = [
    { id: 1, activity: "Planted new wheat field", time: "2 hours ago" },
    { id: 2, activity: "Harvested corn in Section B", time: "1 day ago" },
    { id: 3, activity: "Ordered new seeds", time: "2 days ago" },
    { id: 4, activity: "Maintained irrigation system", time: "3 days ago" },
  ];

  const weatherData = {
    temperature: "22°C",
    condition: "Partly Cloudy",
    rainfall: "10% chance",
    humidity: "65%",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-600">
            Farmers Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome back, Farmer John</span>
            <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white">
              JD
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {farmStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                    <div className="h-6 w-6 text-green-600" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div
                        className={`ml-2 flex items-baseline text-sm font-semibold ${
                          stat.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {stat.change}
                      </div>
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <div className="lg:col-span-2 bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Activities
              </h3>
            </div>
            <div className="bg-white overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {recentActivities.map((activity) => (
                  <li key={activity.id} className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          className="h-6 w-6 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.activity}
                        </p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Weather Widget */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Weather Forecast
              </h3>
            </div>
            <div className="px-6 py-8 text-center">
              <div className="flex justify-center">
                <svg
                  className="h-16 w-16 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-bold text-gray-900">
                  {weatherData.temperature}
                </h4>
                <p className="text-lg text-gray-600 mt-1">
                  {weatherData.condition}
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Rainfall</p>
                  <p className="text-lg font-medium text-gray-900">
                    {weatherData.rainfall}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Humidity</p>
                  <p className="text-lg font-medium text-gray-900">
                    {weatherData.humidity}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
