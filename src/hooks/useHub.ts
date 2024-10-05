import { useEffect, useState } from "react";
import axios from "axios";

import { Hub } from "../models/Hub";

export function useHub(hubId: string | undefined) {
  const [hub, setHub] = useState<Hub | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (hubId === undefined) return;
    const fetchHubDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Hub>(
          `http://localhost:5000/api/hubs/${hubId}`
        );
        console.log(response.data);
        setHub(response.data);
      } catch (err) {
        setError(`Error fetching the hub details, ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchHubDetails();
  }, [hubId]);

  return { hub, loading, error };
}
