# MCP Server Tester

A web app to test **MCP server connectivity and functionality**. Users can input an **MCP installation code**, and the app will verify if the corresponding server is reachable.

## Features

✅ Accepts **MCP server installation code**  
✅ Extracts **MCP server name** from the code  
✅ Sends a request to the MCP server  
✅ Displays **response message and errors** properly

## Tech Stack

### **Frontend:**

- React (Vite) + ShadCn UI ⚡
- Axios (HTTP requests)
- Lucide-React (icons)
- TailwindCSS (styling)

### **Backend:**

- Node.js + Express.js (API)
- Axios (external HTTP requests)
- CORS (cross-origin support)
- dotenv (environment variables)

## Live Demo

🚀 **Frontend (Vercel):** [MCP Server Tester](https://mcp-server-gamma.vercel.app/)  
🔗 **Backend (Render):** [MCP Server API](https://mcpserver-7xge.onrender.com)

---

## 🚀 Setup Instructions (Run Locally)

Follow these steps to **clone, install, and run** the project on your local machine.

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Nishant0121/MCPServer.git
cd MCPServer
```

---

### 2️⃣ Backend Setup (Express.js)

1. Navigate to the backend folder:

   ```sh
   cd backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a **.env** file and define the MCP server base URL (optional):

   ```
   MCP_SERVER_URL=https://smithery.ai/server
   ```

4. Start the backend server:

   ```sh
   npm start
   ```

   The backend should now be running at **`http://localhost:5000`**

---

### 3️⃣ Frontend Setup (React + Vite)

1. Open a new terminal and navigate to the frontend folder:

   ```sh
   cd frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the frontend development server:

   ```sh
   npm run dev
   ```

4. Open your browser and visit:

   ```
   http://localhost:5173
   ```

---

## 🛠 API Endpoint

The frontend sends a **POST** request to:

```
POST https://mcpserver-7xge.onrender.com/test-mcp
```

### **Request Body:**

```json
{
  "installationCode": "npx -y @smithery/cli@latest install @smithery-ai/server-sequential-thinking"
}
```

### **Success Response:**

```json
{
  "success": true,
  "message": "MCP server is reachable!"
}
```

### **Error Response:**

```json
{
  "success": false,
  "message": "Failed to connect to MCP server.",
  "error": "Request failed with status code 404"
}
```

---

## 📜 Explanation of Approach

### **Frontend (React + Vite)**

- Users enter an **MCP installation code**.
- On clicking **"Test Connection"**, a **POST** request is sent to the backend.
- Displays results with different **states**:
  - ✅ **Success**: Green success message
  - ❌ **Error**: Red error message with details

### **Backend (Node.js + Express.js)**

1. **Receives the installation code** from the frontend.
2. **Validates the format** using regex (`install @namespace/server-name`).
3. **Extracts the MCP server name** from the code.
4. **Sends a test request** to the corresponding MCP server.
5. **Responds with success** if reachable, or an **error** otherwise.

---

## 🌍 Deployment

The app is deployed on:

- **Frontend (Vercel):** [MCP Server Tester](https://mcp-server-gamma.vercel.app/)
- **Backend (Render):** [MCP Server API](https://mcpserver-7xge.onrender.com)
