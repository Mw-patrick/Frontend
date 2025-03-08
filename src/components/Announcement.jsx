import { Typewriter } from 'react-simple-typewriter';

const Announcement = () => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#e9acd9",
      color: "white",
      fontSize: "18px",
      fontWeight: "bold",
      height: "30px"
    }}>
      <Typewriter
        words={["Beauty", "Bliss", "Everything", "on", "Discount", "20% off"]}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default Announcement;

