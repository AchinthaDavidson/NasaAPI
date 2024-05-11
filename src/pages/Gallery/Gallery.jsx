import { useEffect, useState } from "react";
import axios from "axios";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Gallery = () => {
  const [data, setData] = useState([]);
  const [word, setWord] = useState("nasa");

  useEffect(() => {
    function getdata() {
      const url = `https://images-api.nasa.gov/search?q=nasa`;

      axios.get(url).then((res) => {
        console.log(res.data.collection.items);
        setData(res.data.collection.items);
      });
    }
    getdata();
  }, []);
  const findimage = () => {
    const url = `https://images-api.nasa.gov/search?q=${word}`;

    axios.get(url).then((res) => {
      console.log(res.data.collection.items);
      setData(res.data.collection.items);
    });
  };
  return (
    <div>
      <Link to="/app/home">
        <div className="mt-3 ms-5">
          <FaAngleDoubleLeft size={30} />
        </div>
      </Link>

      <p class="h2 text-center mb-5">Image GALLERY</p>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        {data.map((data, index) => (
          <div class="col">
            <div class="card">
              <img src={data.links[0].href} alt="" key={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
