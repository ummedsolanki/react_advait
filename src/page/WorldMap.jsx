import worldMap from "../assets/Vector.svg";
import locationIcon from "../assets/location.svg"; // your location SVG
import { markers } from "../data/staticData";

const WorldMap = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "1200px",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <div
        className="world-map-container"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {/* World Map */}
        <img
          src={worldMap}
          alt="World Map"
          style={{
            width: "100%",
            height: "10%",
            borderRadius: "8px",
            filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.6))",
            display: "block",
          }}
        />

        {/* Markers */}
        {markers.map((marker) => (
          <div
            key={marker.id}
            className="marker"
            style={{
              position: "absolute",
              top: marker.top,
              left: marker.left,
              transform: "translate(-50%, -100%)",
              cursor: "pointer",
            }}
          >
            {/* Location Icon */}
            <img
              src={locationIcon}
              alt="Location"
              className="marker-icon"
              style={{
                width: "10px",
                height: "28px",
              }}
            />

            {/* Tooltip */}
            <div className="tooltip">{marker.tooltip}</div>
          </div>
        ))}
      </div>

      {/* Responsive CSS */}
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
          line-height: 1.2;
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

      @media (max-width: 1024px) {
          .world-map-container {
            width: 70%;
          }
          .marker .tooltip {
            font-size: 9px;
            width: 130px;
          }
          .marker-icon {
            width: 9px;
            height: 24px;
          }
        }

        @media (max-width: 768px) {
          .world-map-container { width: 85%; }
          .marker .tooltip { font-size: 9px; width: 120px; top: -20px; }
          .marker-icon { width: 8px; height: 22px; }
        }

        @media (max-width: 480px) {
          .world-map-container img { margin-top: 20px; }
          .world-map-container {
            width: 95%;
          }
          .marker .tooltip { font-size: 8px; width: 110px; padding: 6px 8px; top: -18px; }
          .marker-icon { width: 7px; height: 20px; }
              }

    `}
      </style>
    </section>
  );
};

export default WorldMap;
