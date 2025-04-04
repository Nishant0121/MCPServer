import { useState } from "react";
import axios from "axios";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { BASE_URL } from "@/config";

function Home() {
  const [installationCode, setInstallationCode] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [responseMessage, setResponseMessage] = useState("");
  const [responseError, setResponseError] = useState(""); // Stores error message

  const handleTest = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");
    setResponseError("");

    try {
      const res = await axios.post(`${BASE_URL}/test-mcp`, {
        installationCode,
      });

      if (res.data.success) {
        setStatus("success");
        setResponseMessage(res.data.message);
      } else {
        setStatus("error");
        setResponseMessage(res.data.message || "Unknown error occurred.");
        setResponseError(res.data.error || "No additional error details.");
      }
    } catch (error) {
      setStatus("error");

      if (axios.isAxiosError(error)) {
        setResponseMessage(
          error.response?.data?.message || "Failed to reach the server."
        );
        setResponseError(
          error.response?.data?.error || "No error details available."
        );
      } else {
        setResponseMessage("An unexpected error occurred.");
        setResponseError("Unknown error.");
      }
    }
  };

  return (
    <main className="min-w-full md:min-w-full lg:min-w-5xl  mx-auto px-1 md:px-4 py-12">
      <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 shadow-2xl shadow-blue-500/10">
        <h2 className="text-3xl font-bold text-white mb-8">
          Test Your MCP Server
        </h2>

        <form onSubmit={handleTest} className="space-y-6">
          <div>
            <label
              htmlFor="installation-code"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Enter MCP Installation Code
            </label>
            <input
              type="text"
              id="installation-code"
              placeholder="npx -y @smithery/cli@latest install @smithery-ai/server-sequential-thinking"
              value={installationCode}
              onChange={(e) => setInstallationCode(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {status === "loading" ? (
              <Loader2 className="animate-spin inline-block mr-2" size={20} />
            ) : null}
            Test Connection
          </button>
        </form>

        {/* Results Display */}
        <div className="mt-8">
          {status === "idle" && (
            <p className="text-gray-400 text-center">
              Enter an MCP installation code and press 'Test Connection'.
            </p>
          )}

          {status === "success" && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center">
              <CheckCircle2 className="text-green-500 mr-3" size={24} />
              <div>
                <p className="text-green-400 font-medium">
                  {responseMessage || "Connection successful!"}
                </p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center">
                <XCircle className="text-red-500 mr-3" size={24} />
                <div>
                  <p className="text-red-400 font-medium">
                    {responseMessage || "Connection failed."}
                  </p>
                </div>
              </div>
              {responseError && (
                <div className="mt-2 p-3 bg-red-700/10 border border-red-500/40 rounded-md text-sm text-red-300">
                  <strong>Error Details:</strong>{" "}
                  {responseError.includes("404")
                    ? "The installation code is not valid. Please check and try again."
                    : ""}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
