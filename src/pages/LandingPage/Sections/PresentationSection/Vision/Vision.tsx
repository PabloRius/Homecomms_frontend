import "./Vision.css";
import { VisionData } from "./VisionData";

export function Vision() {
  return (
    <div className="Vision">
      <span className="Title">
        <h3>Our vision</h3>
        <p>How we can help in making your life easier</p>
      </span>
      <ul>
        {VisionData.map((vision) => {
          return (
            <li>
              <div className="Icon">
                <vision.icon size="24px" />
              </div>
              <div className="Text">
                <h5>{vision.title}</h5>
                <p>{vision.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
