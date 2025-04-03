require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MCP Server URL from environment variables
const MCP_SERVER_URL = process.env.MCP_SERVER_URL;

// Route to fetch data from MCP Server
app.get("/api/hello", async (req, res) => {
  try {
    // const response = await axios.get(`${MCP_SERVER_URL}/your-endpoint`);
    res.json({ message: "Hello from backend" });
  } catch (error) {
    console.error("Error fetching data from MCP server:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Route to send data to MCP Server
app.post("/mcp/send", async (req, res) => {
  try {
    const response = await axios.post(
      `${MCP_SERVER_URL}/your-endpoint`,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error sending data to MCP server:", error.message);
    res.status(500).json({ error: "Failed to send data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
