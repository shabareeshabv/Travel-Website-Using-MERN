import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/4.jpg";
import Mountain3 from "../assets/9.jpg";
import Mountain4 from "../assets/10.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Explore Stunning Destinations</h1>
      <p>Discover breathtaking landscapes and unique travel experiences.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas, Philippines"
        text="Located in the province of Batangas, Taal Volcano is one of the most iconic landscapes in the Philippines. It is a volcano inside a lake on an island, creating a breathtaking natural wonder. The hike up to the crater is short and beginner-friendly, offering stunning views of the surrounding Taal Lake. Visitors can also enjoy boat tours and local delicacies like 'bulalo' after their adventure."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des"
        heading="Mount Fuji, Japan"
        text="Mount Fuji, Japan's highest peak, is an iconic symbol of the country. Located about 100 kilometers southwest of Tokyo, this active stratovolcano attracts climbers and tourists from around the world. The best views can be enjoyed from the Fuji Five Lakes region or during the cherry blossom season. Hiking the mountain is a popular activity, especially in summer."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des"
        heading="The Swiss Alps, Switzerland"
        text="The Swiss Alps offer some of the most stunning mountain landscapes in the world. With breathtaking peaks, picturesque villages, and world-class ski resorts like Zermatt and St. Moritz, this region is a paradise for nature lovers and adventure seekers. Visitors can enjoy hiking, skiing, and scenic train rides through the mountains."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Machu Picchu, Peru"
        text="Machu Picchu, the famous Incan citadel, is nestled high in the Andes Mountains of Peru. This UNESCO World Heritage Site offers stunning views and a glimpse into ancient history. Visitors can trek the Inca Trail to reach the ruins or take a scenic train ride. The site is surrounded by lush greenery and mist-covered peaks, making it one of the most breathtaking destinations in the world."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
