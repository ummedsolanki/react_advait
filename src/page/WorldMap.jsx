import worldMap from "../assets/Vector.svg";
import locationIcon from "../assets/location.svg"; // your location SVG

const WorldMap = () => {
  const markers = [
    {
      id: 1,
      top: "59%",
      left: "67%",
      tooltip:
        "Plot # 10: Sunshine Industrial Hub – 1, Near Zydus Lifesciences, Near Navapura Railway Crossing, Navapura, Changodar, Ahmedabad 382213. Gujarat. India",
    },
    {
      id: 2,
      top: "50%",
      left: "25.5%",
      tooltip:
        "3500 South Dupont Highway, Dover, County of Kent, DE 19901, USA",
    },
    {
      id: 3,
      top: "39%",
      left: "46%",
      tooltip:
        "46 Hibernia Road, Hounslow Middlesex TW3 3RY, United Kingdom",
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "450px",
          maxWidth: "55%",
        }}
      >
        {/* World Map */}
        <img
          src={worldMap}
          alt="World Map"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.6))",
            display: "block",
          }}
        />

        {/* Markers */}
        {markers.map((marker) => (
          <div
            key={marker.id}
            className="marker" // ✅ added class
            style={{
              position: "absolute",
              top: marker.top,
              left: marker.left,
              transform: "translate(-50%, -100%)",
              cursor: "pointer",
            }}
          >
            {/* Location SVG */}
            <img
              src={locationIcon}
              alt="Location"
              style={{
                width: "10px",
                height: "28px",
              }}
            />

            {/* Tooltip */}
            <div className="tooltip">
              {marker.tooltip}
            </div>
          </div>
        ))}
      </div>

      {/* CSS for hover tooltip */}
      <style>
        {`
          .marker .tooltip {
            position: absolute;
            top: -25px;
            left: 50%;
            transform: translateX(-50%);
            background-color: white;
            color: #333;
            padding: 8px 12px;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            font-size: 8px;
            line-height: 1.0;
            width: 143px;
            text-align: left;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 10;
          }

          .marker:hover .tooltip {
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
};

export default WorldMap;
