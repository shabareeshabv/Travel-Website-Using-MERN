import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Gallery.css";

const galleryImages = [
  {
    id: 1,
    url: "https://picsum.photos/600/400?random=1",
    title: "Forest Road",
  },
  {
    id: 2,
    url: "https://picsum.photos/600/400?random=2",
    title: "Ocean Waves",
  },
  {
    id: 3,
    url: "https://picsum.photos/600/400?random=3",
    title: "Mountain Peaks",
  },
  {
    id: 4,
    url: "https://picsum.photos/600/400?random=4",
    title: "Mist and Trees",
  },
  {
    id: 5,
    url: "https://picsum.photos/600/400?random=5",
    title: "Laptop on Desk",
  },
  {
    id: 6,
    url: "https://picsum.photos/600/400?random=6",
    title: "City Streets",
  },
];

function Gallery() {
  return (
    <>
      <Navbar />

      <section className="gallery-section">
        <div className="gallery-container">

          {/* Heading */}
          <div className="gallery-heading">
            <h2 className="gallery-title">
              Photo Gallery
            </h2>

            <p className="gallery-subtitle">
              Explore beautiful moments, destinations and unforgettable
              travel experiences.
            </p>

            <div className="gallery-line"></div>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item"
              >
                {/* Image */}
                <img
                  src={image.url}
                  alt={image.title}
                  className="gallery-image"
                />

                {/* Overlay */}
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3 className="gallery-item-title">
                      {image.title}
                    </h3>

                    <p className="gallery-item-description">
                      Explore destination
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Gallery;