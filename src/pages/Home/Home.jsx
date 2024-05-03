import { useEffect, useState } from "react";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import axios from "axios";
import React from "react";

function Home() {
  const [image, setImage] = useState();
  const [discription, setDiescription] = useState();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    function getdata() {
      const url =
        "https://api.nasa.gov/planetary/apod?api_key=53fFz0aOLMFwVSVOgkfIpgKRRxK9MJxeKWwQbKq1";
      axios.get(url).then((res) => {
        setImage(res.data.url);
        setDiescription(res.data.explanation);
      });
    }
    getdata();
  }, []);
  useEffect(() => {
    function getdata() {
      const url =
        "https://api.nasa.gov/techtransfer/software/?engine&api_key=53fFz0aOLMFwVSVOgkfIpgKRRxK9MJxeKWwQbKq1";
      axios.get(url).then((res) => {
        setData(res.data.results);
      });
    }
    getdata();
  }, []);
  useEffect(() => {
    function getdata() {
      const url =
        "https://tle.ivanstanojevic.me/api/tle?api_key=53fFz0aOLMFwVSVOgkfIpgKRRxK9MJxeKWwQbKq1";
      axios.get(url).then((res) => {
        setData1(res.data.member);
      });
    }
    getdata();
  }, []);

  return (
    <div>
      <Hero />
      <div>
        <p className="fs-2 m-3">Astronomy Picture of the Day</p>
        <img
          src={image}
          className="img-fluid rounded mx-auto d-block"
          style={{ height: 300 }}
          alt="..."
        ></img>
        <p className="text-center mt-3 ms-5 me-5">{discription}</p>
        <p className="fs-2 m-3">Nasa Software</p>
        <table
          className="table table-dark table-striped table-hover m-5"
          style={{ borderRadius: "10px", maxWidth: "95%" }}
        >
          <thead>
            <tr>
              <th scope="col">Software</th>
              <th scope="col">Description</th>
              <th scope="col">Type</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 15).map((data, index) => (
              <tr key={index}>
                <td scope="row">{data[2].replace(/<\/?span[^>]*>/g, "")}</td>
                <td scope="row">{data[3].replace(/<\/?span[^>]*>/g, "")}</td>
                <td scope="row">{data[6]}</td>
                <td scope="row">{data[8]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p className="fs-2 m-3">Satellite</p>
        <p className="m-3" m-3>
          {" "}
          A two-line element set (TLE) provides up to date NORAD two line
          element sets for number of Earth orbiting satellites.
        </p>
        <table className="ms-5 table">
          {data1.map((data, index) => (
            <>
              <tr key={index}>
                <td>{data.name}</td>
                <td>
                  {data.line1}
                  <br />
                  {data.line2}
                </td>
                <td>{data.date}</td>
              </tr>
              <br />
            </>
          ))}
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
