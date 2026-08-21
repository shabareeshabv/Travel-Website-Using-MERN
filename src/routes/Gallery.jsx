import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Gallery() {
  const images = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
  ];

  return (
    <>
      <Navbar />

      <main className="gallery-page">
        <div className="gallery-container">
          <h1>Gallery</h1>
          <p>Explore our gallery</p>

          <div className="gallery-grid">
            {images.map((image, index) => (
              <div className="gallery-item" key={index}>
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Gallery;