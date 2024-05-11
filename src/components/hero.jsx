import React from 'react'
import "../styles/hero.css"
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <div className="hero">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end  me-3">
        <Link className='btn btn-link text-light ' to="/app/gallery"><div className='mt-4 me-4 fs-5'>Image Gallery</div></Link>
        <Link className='btn btn-link text-light' to="/app/mars"><div className='mt-4 me-4 fs-5'>Mars Rover Photos</div></Link>
   
          <a class="btn btn-primary mt-4" href="/ " role="button">Log Out</a>
        </div>

        <div className="hero_text col-8 pt-5">

          <p>
            <span className='display-1 fw-bold pt-5'><span className='cus_color'>Hello</span> User!</span>  <br /><br />
            <span className='display-5 fw-normal'>Welcome to <br /> <span className='cus_color'>NasaAPI.com</span></span> <br />
          </p>
          <p className='fs-5 col-xl-6 col-7'>
          Stay up-to-date on the latest news from NASA–from Earth to the Moon, the Solar System and beyond.
          </p>
          <div className="col-6 col-xl-3">
            <a href='#get_started'>
              <button className="btn start_btn fw-bold">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Home