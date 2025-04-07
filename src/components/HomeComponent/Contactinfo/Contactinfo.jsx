import React from "react";

const Contactinfo = () => {
  return (
    <div className="bg-white my-5 py-5">
      <div className="container my-4">
        <div className="row g-4">
          <div className="col-12 col-md-4 p-1">
            <div
              className="bg-gray-100 p-4 h-100 rounded"
              style={{ background: "#f2eee8" }}
            >
              <div className="d-flex flex-column align-items-center">
                <div className="text-amber-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h5 className="text-gray-800 text-center font-medium mb-2">
                  Address
                </h5>
                <p className="text-gray-600 text-center m-0">
                  Flat No 1-98/7/1
                </p>
                <p className="text-gray-600 text-center">
                   Indore-452001
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 p-1">
            <div
              className="bg-gray-100 p-4 h-100 rounded"
              style={{ background: "#f2eee8" }}
            >
              <div className="d-flex flex-column align-items-center">
                <div className="text-amber-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="12" y1="18" x2="12" y2="18"></line>
                  </svg>
                </div>
                <h5 className="text-gray-800 text-center font-medium mb-2">
                  Phone
                </h5>
                <p className="text-amber-600 text-center m-0">123456790</p>
                <p className="text-amber-600 text-center">7234234547</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 p-1">
            <div
              className="bg-gray-100 p-4 h-100 rounded"
              style={{ background: "#f2eee8" }}
            >
              <div className="d-flex flex-column align-items-center">
                <div className="text-amber-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <h5 className="text-gray-800 text-center font-medium">
                  e-Mail
                </h5>
                <p className="text-gray-600 text-center">
                  contact@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="container">
          <p className="my-fontFamily2 my-fontcolor">Salon</p>
          <h2 className="my-fontFamily2">Get in touch</h2>
          <p>
            Our Experienced Artists Are Waiting For You To Serve With High-End
            Products And Techniques. Feel free to contact us.
          </p>
        </div>
      </div>

      <div className="map mt-5">
        <div style={{ width: "100%", height: "400px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2960037908197!2d78.38519607572341!3d17.445540983451593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915e2b689d3d%3A0x843389d3a16ec5b5!2sKristane%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1743686321039!5m2!1sen!2sin" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          />

        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
