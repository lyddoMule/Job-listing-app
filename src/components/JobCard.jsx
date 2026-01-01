const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {job.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
          {job.opportunityType}
        </span>

        {job.location && (
          <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
            {job.location}
          </span>
        )}
      </div>

      <button className="mt-auto text-blue-600 font-medium hover:underline">
        View Details →
      </button>
    </div>
  );
};

export default JobCard;
