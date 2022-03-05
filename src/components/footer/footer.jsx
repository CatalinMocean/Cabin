import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="dark" className="text-white text-center text-lg-left">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3"></i> Călățele, sat
              Călățele-Padure, str. Prinicpala, nr. 588
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              cabanalorelin@yahoo.com
            </p>
            <p>
              <i className="fas fa-phone me-3"></i> + 40 751 382 673
            </p>
          </MDBCol>
          <MDBCol className="mb-4 mb-md-0">
            <h5 className="mb-0">Follow Us</h5>
            <div class="container p-4 pb-0">
              <section className="mb-4">
                <a
                  href="https://www.facebook.com/CabanaLorelin/"
                  className="text-light fs-6 font-monospace text-decoration-none badge bg-primary text-wrap"
                  style={{ width: "10rem" }}
                >
                  Facebook
                </a>
                <br />
                <br />
                <a
                  href="https://www.instagram.com/casalorelin/"
                  className="text-light fs-6 font-monospace text-decoration-none badge bg-danger text-wrap"
                  style={{ width: "10rem" }}
                >
                  Instagram
                </a>
              </section>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div
        className="text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()}{" "}
        <a
          className="text-light"
          href="https://www.facebook.com/CabanaLorelin/"
        >
          Cabin Lorelin
        </a>
      </div>
    </MDBFooter>
  );
}
