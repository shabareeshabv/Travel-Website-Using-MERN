// Trip.js
import { Link } from "react-router-dom";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/9.jpg";
import Trip4 from "../assets/10.jpg";
import Trip5 from "../assets/10.jpg";
import Trip6 from "../assets/10.jpg";
import Trip7 from "../assets/10.jpg";
import Trip8 from "../assets/10.jpg";
import Trip9 from "../assets/10.jpg";
import Trip10 from "../assets/10.jpg";
import Trip11 from "../assets/10.jpg";
import Trip12 from "../assets/10.jpg";
import Trip13 from "../assets/10.jpg";
import Trip14 from "../assets/10.jpg";
import Trip15 from "../assets/10.jpg";

/*
  Self-contained: TripData.js and TripStyle.css are no longer needed.
  Routing and the state passed to /Payment and /TripDetails are unchanged.
*/

const trips = [
  { image: Trip1, heading: "Trip to Bali, Indonesia", days: "6 Days 5 Nights", cost: "$1200", description: "Bali is known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs." },
  { image: Trip2, heading: "Trip to Jakarta, Indonesia", days: "6 Days 5 Nights", cost: "$1500", description: "Jakarta offers a mix of modern skyscrapers and cultural heritage sites." },
  { image: Trip3, heading: "Trip to Paris, France", days: "5 Days 4 Nights", cost: "$1800", description: "Explore the romantic city of Paris with its iconic Eiffel Tower and exquisite cuisine." },
  { image: Trip4, heading: "Trip to Tokyo, Japan", days: "7 Days 6 Nights", cost: "$2000", description: "A city where futuristic skyscrapers meet traditional temples and cherry blossoms." },
  { image: Trip5, heading: "Trip to Rome, Italy", days: "6 Days 5 Nights", cost: "$1700", description: "Discover ancient ruins, the Colosseum, and delicious Italian food." },
  { image: Trip6, heading: "Trip to New York, USA", days: "5 Days 4 Nights", cost: "$2200", description: "The city that never sleeps – see Times Square, Broadway, and Central Park." },
  { image: Trip7, heading: "Trip to Dubai, UAE", days: "4 Days 3 Nights", cost: "$1400", description: "Experience the luxury of skyscrapers, desert safaris, and shopping malls." },
  { image: Trip8, heading: "Trip to Sydney, Australia", days: "7 Days 6 Nights", cost: "$2100", description: "Home to the Sydney Opera House, beaches, and vibrant culture." },
  { image: Trip9, heading: "Trip to Cape Town, South Africa", days: "6 Days 5 Nights", cost: "$1600", description: "A city known for Table Mountain, wildlife, and coastal beauty." },
  { image: Trip10, heading: "Trip to Barcelona, Spain", days: "5 Days 4 Nights", cost: "$1750", description: "Known for art, architecture, beaches, and the famous Sagrada Família." },
  { image: Trip11, heading: "Trip to London, UK", days: "6 Days 5 Nights", cost: "$1900", description: "Visit Big Ben, the London Eye, Buckingham Palace, and more." },
  { image: Trip12, heading: "Trip to Bangkok, Thailand", days: "5 Days 4 Nights", cost: "$1300", description: "A vibrant city with street life, temples, and floating markets." },
  { image: Trip13, heading: "Trip to Rio de Janeiro, Brazil", days: "6 Days 5 Nights", cost: "$1850", description: "Known for Carnival, Christ the Redeemer, and Copacabana Beach." },
  { image: Trip14, heading: "Trip to Vancouver, Canada", days: "6 Days 5 Nights", cost: "$2000", description: "Nature lovers’ paradise with mountains, ocean, and multicultural charm." },
  { image: Trip15, heading: "Trip to Cairo, Egypt", days: "7 Days 6 Nights", cost: "$1700", description: "Explore the Pyramids, the Sphinx, and rich ancient history." },
];

// "Trip to Bali, Indonesia" -> { city: "Bali", country: "Indonesia" }
const splitHeading = (h) => {
  const clean = h.replace(/^Trip to\s+/i, "");
  const i = clean.indexOf(",");
  return i === -1
    ? { city: clean, country: "" }
    : { city: clean.slice(0, i), country: clean.slice(i + 1).trim() };
};

function Trip() {
  return (
    <section id="trips" className="tx">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Instrument+Sans:wght@400;500;600&display=swap');

        .tx { --ink:#0B2226; --foam:#F5F1E8; --sun:#FFC46B; --lagoon:#5ED1C0; --pin:#1F6F66;
          background:var(--ink); color:var(--foam); font-family:'Instrument Sans',system-ui,sans-serif;
          padding:clamp(64px,10vw,128px) clamp(24px,5vw,56px); box-sizing:border-box; }
        .tx *, .tx *::before, .tx *::after { box-sizing:border-box; }
        .tx h2, .tx h3, .tx p { margin:0; padding:0; }
        .tx a { text-decoration:none; }

        .tx-inner { max-width:1240px; margin:0 auto; }

        .tx-head { max-width:640px; margin-bottom:clamp(40px,6vw,72px); }
        .tx-head h2 { font-family:'Fraunces',Georgia,serif; font-variation-settings:"opsz" 144; font-weight:700;
          font-size:clamp(34px,5vw,56px); line-height:1.05; letter-spacing:-.02em; color:var(--foam); }
        .tx-head p { margin-top:18px; font-size:clamp(17px,1.6vw,20px); line-height:1.55; color:rgba(245,241,232,.75); }

        .tx-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:28px; }

        .tx-card { display:flex; flex-direction:column; background:var(--foam); color:var(--ink);
          border-radius:20px; overflow:hidden; transition:transform .25s, box-shadow .25s; }
        .tx-card:hover { transform:translateY(-4px); box-shadow:0 24px 40px -20px rgba(0,0,0,.6); }

        .tx-photo { position:relative; aspect-ratio:4/3; overflow:hidden; background:#16393f; }
        .tx-photo img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .6s ease; }
        .tx-card:hover .tx-photo img { transform:scale(1.05); }
        .tx-days { position:absolute; left:14px; top:14px; padding:6px 14px; border-radius:999px;
          background:var(--ink); color:var(--foam); font-size:13px; font-weight:600; }

        .tx-body { display:flex; flex-direction:column; flex:1; padding:22px 22px 24px; }
        .tx-country { color:var(--pin); font-weight:600; font-size:14px; }
        .tx-body h3 { margin-top:4px; font-family:'Fraunces',Georgia,serif; font-variation-settings:"opsz" 144;
          font-weight:700; font-size:28px; line-height:1.1; letter-spacing:-.01em; }
        .tx-desc { margin-top:10px; font-size:15px; line-height:1.6; color:rgba(11,34,38,.72);
          display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }

        .tx-price { margin-top:auto; padding-top:20px; display:flex; align-items:baseline; gap:8px; }
        .tx-price b { font-family:'Fraunces',Georgia,serif; font-weight:700; font-size:30px; line-height:1; }
        .tx-price span { font-size:14px; color:rgba(11,34,38,.6); }

        .tx-actions { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-top:16px; }
        .tx-book { display:inline-flex; align-items:center; justify-content:center; height:46px; padding:0 22px;
          border-radius:999px; background:var(--ink); color:var(--foam); font-weight:600; font-size:15px;
          white-space:nowrap; transition:background .2s, color .2s; }
        .tx-book:hover { background:var(--sun); color:var(--ink); }
        .tx-more { color:var(--ink); font-weight:500; font-size:15px; padding:4px 0; white-space:nowrap;
          border-bottom:2px solid rgba(11,34,38,.25); transition:border-color .2s; }
        .tx-more:hover { border-color:var(--ink); }

        .tx a:focus-visible { outline:2px solid var(--lagoon); outline-offset:3px; }
        .tx-card a:focus-visible { outline-color:var(--pin); }

        @media (prefers-reduced-motion:reduce) {
          .tx-card, .tx-photo img { transition:none; }
          .tx-card:hover { transform:none; }
          .tx-card:hover .tx-photo img { transform:none; }
        }
      `}</style>

      <div className="tx-inner">
        <header className="tx-head">
          <h2>Recent trips</h2>
          <p>You can discover unique destinations using Google Maps.</p>
        </header>

        <div className="tx-grid">
          {trips.map((trip, index) => {
            const { city, country } = splitHeading(trip.heading);
            return (
              <article className="tx-card" key={index}>
                <div className="tx-photo">
                  <img src={trip.image} alt={city} loading="lazy" />
                  <span className="tx-days">{trip.days}</span>
                </div>

                <div className="tx-body">
                  {country && <p className="tx-country">{country}</p>}
                  <h3>{city}</h3>
                  <p className="tx-desc">{trip.description}</p>

                  <div className="tx-price">
                    <b>{trip.cost}</b>
                  </div>

                  <div className="tx-actions">
                    <Link
                      to="/Payment"
                      state={{ name: trip.heading, basePrice: trip.cost }}
                      className="tx-book"
                    >
                      Book your trip
                    </Link>
                    <Link
                      to="/TripDetails"
                      state={{ heading: trip.heading, text: trip.description, cost: trip.cost }}
                      className="tx-more"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Trip;