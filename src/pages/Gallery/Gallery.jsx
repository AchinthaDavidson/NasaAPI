import { useEffect, useState } from "react";
import axios from "axios";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Gallery = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    function getdata() {
      const url = "https://images-api.nasa.gov/search?q=nasa";

      axios.get(url).then((res) => {
        console.log(res.data.collection.items);
        setData(res.data.collection.items);
      });
    }
    getdata();
  }, []);
  return (
    <div>
      <Link to="/home">
        <div className="mt-3 ms-5">
         <FaAngleDoubleLeft size={30} />
        </div>
      </Link>

      <p class="h2 text-center mb-5">Image GALLERY</p>
      <center>
        {data.map((data, index) => (
          <img src={data.links[0].href} alt="" key={index} />
        ))}
      </center>
    </div>
  );
};
