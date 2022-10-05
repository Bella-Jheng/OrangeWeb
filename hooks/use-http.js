import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestData,applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestData.url, {
        method: requestData.method ? requestData.method : "POST",
        headers: requestData.headers ? requestData.headers : {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData.body)
          ? JSON.stringify(requestData.body)
          : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      applyData(data)

    } catch (error) {
      setError(error.message || "Something went wrong!");
    }

    setIsLoading(false);

  }, []);

  return{
      isLoading,
      error,
      sendRequest
  }
};

export default useHttp;
