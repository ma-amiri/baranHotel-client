import Header from "./Header";
import Location from "./Location";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="homContainer">    
      </div>
      <div style={{ marginTop: "20vh" }}>
        <Location />
      </div>
    </div>
  );
};
export default Home;
