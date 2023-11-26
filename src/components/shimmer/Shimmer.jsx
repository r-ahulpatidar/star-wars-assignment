import "./shimmer.css";

export const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(6)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="shimmer-card"
          >
            <div className="shimmer"></div>
          </div>
        ))}
    </div>
  );
};

