import "./styles/ExportFeature.css";

const ExportFeature = ({ icon, title }) => {
  return (
    <div className="export-feature">
      <div className="feature-icon">
        {icon}
      </div>

      <p>{title}</p>
    </div>
  );
};

export default ExportFeature;