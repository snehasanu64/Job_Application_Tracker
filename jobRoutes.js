const express = require("express");
const router = express.Router();
const Job = require("./Job");

// GET /api/jobs - Fetch all jobs, newest first
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error: error.message });
  }
});

// POST /api/jobs - Add a new job
router.post("/", async (req, res) => {
  try {
    const { company, role, dateApplied, status } = req.body;
    const newJob = new Job({ company, role, dateApplied, status });
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: "Error creating job", error: error.message });
  }
});

// PUT /api/jobs/:id - Update an existing job's details
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedJob = await Job.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(updatedJob);
  } catch (error) {
    res.status(400).json({ message: "Error updating job", error: error.message });
  }
});

// DELETE /api/jobs/:id - Delete a job by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting job", error: error.message });
  }
});

module.exports = router;
