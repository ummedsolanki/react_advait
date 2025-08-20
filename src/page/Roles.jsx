

const JobRoles = () => {
  const roles = [
    {
      title: "Senior Software Developer",
      location: "Ahmedabad, India",
      type: "Full Time",
    },
  ];

  return (
    <div className="job-section">
      {roles.map((role, index) => (
        <div key={index} className="job-card">
          <div>
            <p className="job-label">OPEN ROLE</p>
            <h3 className="job-position">{role.title}</h3>
            <p className="job-info">
              {role.type} • {role.location}
            </p>
          </div>

          <button className="apply-btn">
            <span className="btn-text">Submit Application</span>
            <span className="btn-icon">→</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default JobRoles;
