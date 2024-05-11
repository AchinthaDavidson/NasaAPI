import React, { useState, useEffect } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const MarsRoverPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("2022-6-5");
  const [selectedCamera, setSelectedCamera] = useState("");

  useEffect(() => {
    fetchMarsRoverPhotos();
  }, [selectedDate, selectedCamera]);

  const fetchMarsRoverPhotos = async () => {
    try {
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=mifcXvhfKqTe4i6K3xpUG6QaCdLir07qJoJfffpK`;
      const dateParam = selectedDate ? `&earth_date=${selectedDate}` : "";
      const cameraParam = selectedCamera ? `&camera=${selectedCamera}` : "";
      const response = await fetch(url + dateParam + cameraParam);
      const data = await response.json();
      setPhotos(data.photos);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Mars Rover photos:", error);
      setLoading(false);
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/app/home">
        <div className="mt-3 ms-5">
          <FaAngleDoubleLeft size={30} />
        </div>
      </Link>
      <p class="h2 text-center mb-5">Mars Rover Photos</p>
      <h1 className="text-4xl font-bold text-gray-800 mb-8"></h1>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
          Select Date:
        </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border border-gray-400 p-2 rounded-md mb-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="camera" className="block text-gray-700 font-bold mb-2">
          Select Camera:
        </label>
        <select
          id="camera"
          value={selectedCamera}
          onChange={handleCameraChange}
          className="border border-gray-400 p-2 rounded-md mb-2"
        >
          <option value="">All Cameras</option>
          <option value="FHAZ">Front Hazard Avoidance Camera</option>
          <option value="RHAZ">Rear Hazard Avoidance Camera</option>
          <option value="MAST">Mast Camera</option>
          <option value="CHEMCAM">Chemistry and Camera Complex</option>
          <option value="NAVCAM">Navigation Camera</option>
        </select>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {photos.map((photo) => (
          <div class="col">
            <div class="card">
              <img src={photo.img_src} alt="Mars Rover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarsRoverPhotos;
