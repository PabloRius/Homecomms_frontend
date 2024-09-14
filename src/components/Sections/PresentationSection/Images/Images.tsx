import "./Images.css";
import { ImagesData } from "./ImagesData";

export function Images() {
  return (
    <ul className="Images">
      {ImagesData.map((image) => {
        return (
          <li>
            <img src={image.src} alt={image.alt} />
          </li>
        );
      })}
    </ul>
  );
}
