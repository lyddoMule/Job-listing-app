import JobDashboard from "./components/JobDashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Job Opportunities
          </h1>
          <p className="text-gray-500 mt-1">
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <JobDashboard />
      </main>
    </div>
  );
}

export default App;
