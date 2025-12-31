const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition flex flex-col md:flex-row gap-4">
      {/* Logo / Avatar */}
      <img
        src={job.avatar}
        alt={job.company}
        className="w-14 h-14 rounded-full object-cover flex-shrink-0"
      />

      {/* Job Info */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-900">{job.title}</h2>
        <p className="text-sm text-gray-500 mt-1">
          {job.company} • {job.location}
        </p>
        <p className="text-gray-700 text-sm mt-2">{job.description}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {job.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-xs px-2 py-1 rounded-full border ${
                tag.color === "green"
                  ? "bg-green-100 text-green-700 border-green-300"
                  : tag.color === "yellow"
                  ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                  : "bg-purple-100 text-purple-700 border-purple-300"
              }`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
