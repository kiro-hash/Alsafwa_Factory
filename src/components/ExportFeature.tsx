import type { ReactNode } from "react";
import "./styles/ExportFeature.css";

interface ExportFeatureProps {
    icon: ReactNode;
    title: string;
}

const ExportFeature = ({ icon, title }:ExportFeatureProps) => {
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