import React, { useState } from "react";

const STATUS_COLORS = {
  Applied: "#3b82f6",
  Interview: "#f59e0b",
  Rejected: "#ef4444",
  Offer: "#22c55e",
};

const JobCard = ({ job, onStatusChange, onDelete }) => {
  const [updating, setUpdating] = useState(false);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleStatusChange = async (e) => {
    setUpdating(true);
    await onStatusChange(job._id, e.target.value);
    setUpdating(false);
  };

  return (
    <div className="job-card">
      <div
        className="status-bar"
        style={{ backgroundColor: STATUS_COLORS[job.status] }}
      />

      <div className="card-body">
        <div className="card-header">
          <div>
            <h3 className="company-name">{job.company}</h3>
            <p className="role-name">{job.role}</p>
          </div>

          <span
            className="status-badge"
            style={{
              backgroundColor: STATUS_COLORS[job.status] + "22",
              color: STATUS_COLORS[job.status],
              border: `1px solid ${STATUS_COLORS[job.status]}44`,
            }}
          >
            {job.status}
          </span>
        </div>

        <div className="card-footer">
          <span className="date-applied">
            <span style={{ marginRight: "6px" }}>📅</span>
            {formatDate(job.dateApplied)}
          </span>

          <div className="card-actions">
            <select
              value={job.status}
              onChange={handleStatusChange}
              disabled={updating}
              className="status-select"
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Rejected</option>
              <option>Offer</option>
            </select>

            <button
              onClick={() => onDelete(job._id)}
              className="btn-delete"
              title="Delete application"
            >
              🗑
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
