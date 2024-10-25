import { Images } from "./Images/Images";
import { Vision } from "./Vision/Vision";

import "./PresentationSection.css";

export function PresentationSection() {
  return (
    <section className="PresentationSection">
      <Images />
      <Vision />
    </section>
  );
}