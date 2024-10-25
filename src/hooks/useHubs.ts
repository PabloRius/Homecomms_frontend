// import { useState, useEffect } from "react";
// import axios from "axios";

// import { Hub } from "../models/Hub";
// import { UserInfo } from "../models/UserInfo";
// import { useAuth } from "./useAuth";

// export function useHubs(n_loaded?: number) {
//   const { user, token } = useAuth();
//   const [hubs, setHubs] = useState<Hub[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     return;
//     if (!user || !token) return;

//     console.log(user, token);

//     const fetchUserHubs = async () => {
//       try {
//         setLoading(true);

//         const userInfoResponse = await axios.get<UserInfo>(
//           `http://localhost:5000/api/users/${userId}`
//         );
//         const userHubsIds = userInfoResponse.data.hubs;

//         setHubs([]);

//         const hubsToLoad = n_loaded
//           ? userHubsIds.slice(0, n_loaded)
//           : userHubsIds;
//         const hubPromises = hubsToLoad.map((hubId) =>
//           axios.get<Hub>(`http://localhost:5000/api/hubs/${hubId}`)
//         );

//         const hubsResponses = await Promise.all(hubPromises);
//         const hubsData = hubsResponses.map((response) => response.data);

//         setHubs(hubsData);
//       } catch (err) {
//         setError(`Error fetching hubs ${err}`);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUserHubs();
//     }, [user, token]);

//   return { hubs, total: hubs.length, loading, error };
// }
