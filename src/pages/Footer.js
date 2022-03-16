import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div>
              <Link to="/"> Home </Link>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/">Contact</Link>
            </div>
            <div>
              <Link to="/">Blog</Link>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr />
            <div>
              <p className="text-white mb-1">DropShippers</p>
            </div>
            <div>
              <p className="text-white mb-1">
                {" "}
                5500 University Parkway San Bernardino, CA 92407
              </p>
            </div>
            <div>
              <p className="text-white mb-1"> +1 (909) 537-5000</p>
            </div>
            <div>
              <p className="text-white mb-1">Dropshippers@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
