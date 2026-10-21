import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/4.jpg";
import Mountain3 from "../assets/9.jpg";
import Mountain4 from "../assets/10.jpg";

/*
  Destination section (self-contained: no DestinationData or
  DestinationStyles.css needed, so you can delete those two files).
  Rows alternate sides automatically.
*/

const destinations = [
  {
    heading: "Taal Volcano, Batangas, Philippines",
    text: "Located in the province of Batangas, Taal Volcano is one of the most iconic landscapes in the Philippines. It is a volcano inside a lake on an island, creating a breathtaking natural wonder. The hike up to the crater is short and beginner-friendly, offering stunning views of the surrounding Taal Lake. Visitors can also enjoy boat tours and local delicacies like 'bulalo' after their adventure.",
    img1: Mountain1,
    img2: Mountain2,
  },
  {
    heading: "Mount Fuji, Japan",
    text: "Mount Fuji, Japan's highest peak, is an iconic symbol of the country. Located about 100 kilometers southwest of Tokyo, this active stratovolcano attracts climbers and tourists from around the world. The best views can be enjoyed from the Fuji Five Lakes region or during the cherry blossom season. Hiking the mountain is a popular activity, especially in summer.",
    img1: Mountain1,
    img2: Mountain2,
  },
  {
    heading: "The Swiss Alps, Switzerland",
    text: "The Swiss Alps offer some of the most stunning mountain landscapes in the world. With breathtaking peaks, picturesque villages, and world-class ski resorts like Zermatt and St. Moritz, this region is a paradise for nature lovers and adventure seekers. Visitors can enjoy hiking, skiing, and scenic train rides through the mountains.",
    img1: Mountain1,
    img2: Mountain2,
  },
  {
    heading: "Machu Picchu, Peru",
    text: "Machu Picchu, the famous Incan citadel, is nestled high in the Andes Mountains of Peru. This UNESCO World Heritage Site offers stunning views and a glimpse into ancient history. Visitors can trek the Inca Trail to reach the ruins or take a scenic train ride. The site is surrounded by lush greenery and mist-covered peaks, making it one of the most breathtaking destinations in the world.",
    img1: Mountain3,
    img2: Mountain4,
  },
];

// "Taal Volcano, Batangas, Philippines" -> name + place
const splitHeading = (h) => {
  const i = h.indexOf(",");
  return i === -1 ? { name: h, place: "" } : { name: h.slice(0, i), place: h.slice(i + 1).trim() };
};

function DestinationRow({ heading, text, img1, img2, reverse }) {
  const { name, place } = splitHeading(heading);
  return (
    <article className={`dx-row${reverse ? " dx-reverse" : ""}`}>
      <div className="dx-photos">
        <img className="dx-main" src={img1} alt={name} loading="lazy" />
        <img className="dx-side" src={img2} alt="" loading="lazy" />
      </div>

      <div className="dx-copy">
        {place && (
          <p className="dx-place">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            {place}
          </p>
        )}
        <h3>{name}</h3>
        <p className="dx-text">{text}</p>
      </div>
    </article>
  );
}

const Destination = () => {
  return (
    <section id="destinations" className="dx">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Instrument+Sans:wght@400;500;600&display=swap');

        .dx { --ink:#0B2226; --foam:#F5F1E8; --sun:#FFC46B; --pin:#1F6F66;
          background:var(--foam); color:var(--ink); font-family:'Instrument Sans',system-ui,sans-serif;
          padding:clamp(64px,10vw,128px) clamp(24px,5vw,56px); box-sizing:border-box; }
        .dx *, .dx *::before, .dx *::after { box-sizing:border-box; }
        .dx h2, .dx h3, .dx p { margin:0; padding:0; }

        .dx-inner { max-width:1180px; margin:0 auto; }

        .dx-head { max-width:640px; margin-bottom:clamp(48px,8vw,96px); }
        .dx-head h2 { font-family:'Fraunces',Georgia,serif; font-variation-settings:"opsz" 144; font-weight:700;
          font-size:clamp(34px,5vw,56px); line-height:1.05; letter-spacing:-.02em; }
        .dx-head p { margin-top:18px; font-size:clamp(17px,1.6vw,20px); line-height:1.55; color:rgba(11,34,38,.72); }

        .dx-row { display:grid; grid-template-columns:1.05fr 1fr; gap:clamp(32px,6vw,88px); align-items:center; }
        .dx-row + .dx-row { margin-top:clamp(72px,10vw,128px); }
        .dx-reverse { grid-template-columns:1fr 1.05fr; }
        .dx-reverse .dx-photos { order:2; }

        .dx-photos { position:relative; padding-bottom:12%; }
        .dx-main { display:block; width:80%; aspect-ratio:4/5; object-fit:cover; border-radius:20px;
          box-shadow:0 24px 48px -24px rgba(11,34,38,.45); }
        .dx-side { position:absolute; right:0; bottom:0; width:50%; aspect-ratio:1/1; object-fit:cover;
          border-radius:20px; border:8px solid var(--foam); box-shadow:0 18px 36px -18px rgba(11,34,38,.5); }
        .dx-reverse .dx-main { margin-left:auto; }
        .dx-reverse .dx-side { right:auto; left:0; }

        .dx-place { display:inline-flex; align-items:center; gap:6px; color:var(--pin); font-weight:600; font-size:15px; }
        .dx-copy h3 { margin-top:12px; font-family:'Fraunces',Georgia,serif; font-variation-settings:"opsz" 144;
          font-weight:700; font-size:clamp(30px,4vw,46px); line-height:1.08; letter-spacing:-.015em; }
        .dx-copy h3::after { content:""; display:block; width:56px; height:4px; border-radius:99px; background:var(--sun); margin-top:20px; }
        .dx-text { margin-top:22px; max-width:520px; font-size:17px; line-height:1.7; color:rgba(11,34,38,.8); }

        @media (max-width:860px) {
          .dx-row, .dx-reverse { grid-template-columns:1fr; }
          .dx-reverse .dx-photos { order:0; }
          .dx-main { width:84%; }
        }
      `}</style>

      <div className="dx-inner">
        <header className="dx-head">
          <h2>Explore stunning destinations</h2>
          <p>Discover breathtaking landscapes and unique travel experiences.</p>
        </header>

        {destinations.map((d, i) => (
          <DestinationRow key={d.heading} {...d} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default Destination;