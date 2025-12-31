import JobCard from "./JobCard";
import jobsData from "../data/jobsData";

const JobDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Opportunities</h1>
        <p className="text-gray-500">
          Showing {jobsData.length} results
        </p>
      </div>

      <div className="flex justify-end mb-4">
        <span className="text-sm text-gray-500">Sort by: </span>
        <select className="ml-2 border border-gray-300 rounded p-1 text-sm">
          <option>Most relevant</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>

      <div className="grid gap-6">
        {jobsData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobDashboard;
