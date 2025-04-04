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

app.post("/test-mcp", async (req, res) => {
  const { installationCode } = req.body;

  if (!installationCode) {
    return res.status(400).json({
      success: false,
      message: "Please provide the installation code.",
    });
  }

  // Extract MCP server name from installation code
  const match = installationCode.match(/install\s+(@[\w-]+\/[\w-]+)/);
  if (!match) {
    return res.status(400).json({
      success: false,
      message: "The installation code format is not valid.",
    });
  }

  const mcpServer = match[1]; // Extracted MCP server name
  const testUrl = `https://smithery.ai/server/${mcpServer}`;

  try {
    // Send a test request to the MCP server
    const response = await axios.get(testUrl);
    res.json({
      success: true,
      message: "The MCP server is reachable!",
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to connect to the MCP server.",
      error: error.message,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
