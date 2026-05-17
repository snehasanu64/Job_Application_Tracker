import React, { useState, useEffect } from "react";
import JobForm from "./JobForm";
import JobCard from "./JobCard";
import StatsBar from "./StatsBar";
import { getJobs, addJob, updateJob, deleteJob } from "./api";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getJobs();
      setJobs(response.data);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddJob = async (formData) => {
    try {
      const response = await addJob(formData);
      setJobs([response.data, ...jobs]);
    } catch (error) {
      console.error("Failed to add job:", error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await updateJob(id, { status: newStatus });
      setJobs(jobs.map((job) => (job._id === id ? response.data : job)));
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) return;
    try {
      await deleteJob(id);
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (error) {
      console.error("Failed to delete job:", error);
    }
  };

  const filteredJobs =
    filterStatus === "All"
      ? jobs
      : jobs.filter((job) => job.status === filterStatus);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div>
            <h1 className="app-title">Job Application Tracker</h1>
            <p className="app-subtitle">Stay on top of every application & pipeline status</p>
          </div>
        </div>
      </header>

      <main className="app-main">
        <StatsBar jobs={jobs} />

        <div className="layout">
          <aside className="sidebar">
            <JobForm onJobAdded={handleAddJob} />
          </aside>

          <section className="job-list-section">
            <div className="filter-tabs">
              {["All", "Applied", "Interview", "Offer", "Rejected"].map((status) => (
                <button
                  key={status}
                  className={`filter-tab ${filterStatus === status ? "active" : ""}`}
                  onClick={() => setFilterStatus(status)}
                >
                  {status}
                </button>
              ))}
            </div>

            {loading ? (
              <p className="loading-text">Loading jobs...</p>
            ) : filteredJobs.length === 0 ? (
              <div className="empty-state">
                <p>No applications yet.</p>
                <small>Add your first job using the form!</small>
              </div>
            ) : (
              <div className="job-list">
                {filteredJobs.map((job) => (
                  <JobCard
                    key={job._id}
                    job={job}
                    onStatusChange={handleStatusChange}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
