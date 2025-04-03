import { useState } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";
import { BASE_URL } from "../config";

interface ApiResponse {
  message: string;
}

function Home() {
  const [data, setData] = useState<ApiResponse | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/hello`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <Button onClick={fetchData}>Fetch Data</Button>
      {data && <p>Data: {data.message}</p>}
    </div>
  );
}

export default Home;
