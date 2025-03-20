import { useState } from "react";
import { useResponse } from "../context/DataContext";

export default function SpotifyUrlInput() {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { responseMessage,setResponseMessage } = useResponse();

  const SPOTIFY_URL_PATTERN = /^https:\/\/open\.spotify\.com\/user\/.+$/;

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setUrl(inputValue);
    setIsValid(SPOTIFY_URL_PATTERN.test(inputValue));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url }),
      });

      const data = await response.json();
      console.log(data.text)
      setResponseMessage(data);
    } catch (error) {
      setResponseMessage("Failed to submit URL. Try again.");
    } finally {
      setIsLoading(false);
      console.log(responseMessage)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center  p-4">
      <input
        type="text"
        value={url}
        onChange={handleChange}
        placeholder="Enter your Spotify user URL"
        className={`border-2 p-2 rounded-md w-[60%] text-white bg-[#212121] ${isValid ? "border-green-500" : "border-red-500"
          }`}
      />

      <button
        type="submit"
        disabled={!isValid}
        className={`px-4 py-2 rounded-md text-black m-5 ${isValid ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 "
          }`}
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
