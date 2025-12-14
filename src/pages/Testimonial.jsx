import React from "react";

function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      location: "New York, USA",
      image: "assets/img/testimonial-1.jpg",
      message:
        "This service completely exceeded my expectations. The team was professional, responsive, and truly cared about my experience.",
    },
    {
      name: "Sarah Smith",
      location: "London, UK",
      image: "assets/img/testimonial-2.jpg",
      message:
        "Absolutely amazing! The quality and attention to detail were outstanding. I highly recommend them to anyone.",
    },
    {
      name: "Michael Lee",
      location: "Sydney, Australia",
      image: "assets/img/testimonial-3.jpg",
      message:
        "A seamless and enjoyable experience from start to finish. I will definitely be coming back again.",
    },
  ];
  return (
    <div>
      {/* Hero Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white">Testimonial</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-white ">
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Testimonial
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="section-title bg-white text-primary px-3">
              Testimonials
            </h6>
            <h1 className="fw-bold">What Our Clients Say</h1>
          </div>

          <div className="row g-4">
  {testimonials.map((item, index) => (
    <div className="col-lg-4 col-md-6" key={index}>
      <div
        className="p-4 h-100 bg-white rounded shadow"
        style={{
          transition: "all 0.4s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow =
            "0 20px 40px rgba(0, 0, 0, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 10px 25px rgba(0, 0, 0, 0.08)";
        }}
      >
        {/* Header */}
        <div className="d-flex align-items-center mb-3">
          <div className="flex-grow-1">
            <h5 className="mb-0">{item.name}</h5>
            <small className="text-muted">{item.location}</small>
            <div className="text-warning mt-1">★★★★★</div>
          </div>

          <img
            src={item.image}
            alt={item.name}
            className="rounded-circle border border-primary"
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />
        </div>

        {/* Message */}
        <p
          className="fst-italic"
          style={{
            color: "#555",
            lineHeight: "1.7",
          }}
        >
          “{item.message}”
        </p>
      </div>
    </div>
  ))}


          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;