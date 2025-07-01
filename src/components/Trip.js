// Trip.js
import "./TripStyle.css";
import { Link } from "react-router-dom";
import TripData from "./TripData";
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

const trips = [
  {
    image: Trip1,
    heading: "Trip to Bali, Indonesia",
    days: "6 Days 5 Nights",
    cost: "$1200",
    description: "Bali is known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs."
  },
  {
    image: Trip2,
    heading: "Trip to Jakarta, Indonesia",
    days: "6 Days 5 Nights",
    cost: "$1500",
    description: "Jakarta offers a mix of modern skyscrapers and cultural heritage sites."
  },
  {
    image: Trip3,
    heading: "Trip to Paris, France",
    days: "5 Days 4 Nights",
    cost: "$1800",
    description: "Explore the romantic city of Paris with its iconic Eiffel Tower and exquisite cuisine."
  },
  {
    image: Trip4,
    heading: "Trip to Tokyo, Japan",
    days: "7 Days 6 Nights",
    cost: "$2000",
    description: "A city where futuristic skyscrapers meet traditional temples and cherry blossoms."
  },
  {
    image: Trip5,
    heading: "Trip to Rome, Italy",
    days: "6 Days 5 Nights",
    cost: "$1700",
    description: "Discover ancient ruins, the Colosseum, and delicious Italian food."
  },
  {
    image: Trip6,
    heading: "Trip to New York, USA",
    days: "5 Days 4 Nights",
    cost: "$2200",
    description: "The city that never sleeps – see Times Square, Broadway, and Central Park."
  },
  {
    image: Trip7,
    heading: "Trip to Dubai, UAE",
    days: "4 Days 3 Nights",
    cost: "$1400",
    description: "Experience the luxury of skyscrapers, desert safaris, and shopping malls."
  },
  {
    image: Trip8,
    heading: "Trip to Sydney, Australia",
    days: "7 Days 6 Nights",
    cost: "$2100",
    description: "Home to the Sydney Opera House, beaches, and vibrant culture."
  },
  {
    image: Trip9,
    heading: "Trip to Cape Town, South Africa",
    days: "6 Days 5 Nights",
    cost: "$1600",
    description: "A city known for Table Mountain, wildlife, and coastal beauty."
  },
  {
    image: Trip10,
    heading: "Trip to Barcelona, Spain",
    days: "5 Days 4 Nights",
    cost: "$1750",
    description: "Known for art, architecture, beaches, and the famous Sagrada Família."
  },
  {
    image: Trip11,
    heading: "Trip to London, UK",
    days: "6 Days 5 Nights",
    cost: "$1900",
    description: "Visit Big Ben, the London Eye, Buckingham Palace, and more."
  },
  {
    image: Trip12,
    heading: "Trip to Bangkok, Thailand",
    days: "5 Days 4 Nights",
    cost: "$1300",
    description: "A vibrant city with street life, temples, and floating markets."
  },
  {
    image: Trip13,
    heading: "Trip to Rio de Janeiro, Brazil",
    days: "6 Days 5 Nights",
    cost: "$1850",
    description: "Known for Carnival, Christ the Redeemer, and Copacabana Beach."
  },
  {
    image: Trip14,
    heading: "Trip to Vancouver, Canada",
    days: "6 Days 5 Nights",
    cost: "$2000",
    description: "Nature lovers’ paradise with mountains, ocean, and multicultural charm."
  },
  {
    image: Trip15,
    heading: "Trip to Cairo, Egypt",
    days: "7 Days 6 Nights",
    cost: "$1700",
    description: "Explore the Pyramids, the Sphinx, and rich ancient history."
  }
];

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>

      <div className="tripcard">
        {trips.map((trip, index) => (
          <TripData
            key={index}
            image={trip.image}
            heading={trip.heading}
            text={trip.days}
          >
            <h5>Cost: {trip.cost}</h5>
            <div className="tripbooking">
              <Link
                to="/Payment"
                state={{
                  name: trip.heading,
                  basePrice: trip.cost
                }}
                className="trip-button"
              >
                Book your trip
              </Link>
              <Link
                to="/TripDetails"
                state={{
                  heading: trip.heading,
                  text: trip.description,
                  cost: trip.cost
                }}
                className="trip-button"
              >
                Click here for more...
              </Link>
            </div>
          </TripData>
        ))}
      </div>
    </div>
  );
}

export default Trip;
