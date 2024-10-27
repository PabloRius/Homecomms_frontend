import { IconType } from "react-icons";

import { IoIosInformationCircleOutline } from "react-icons/io";

export const ImagesData: Array<{ src: string; alt: string }> = [
  { src: "https://picsum.photos/512/350", alt: "Random Placeholder image" },
  { src: "https://picsum.photos/512/350", alt: "Random Placeholder image" },
];

interface Vision {
  icon: IconType;
  title: string;
  content: string;
}

export const VisionData: [Vision, Vision, Vision, Vision, Vision, Vision] = [
  {
    icon: IoIosInformationCircleOutline,
    title: "First move-in",
    content:
      "For those leaving the nest and afraid of having to manage all sort of thing on their own. We can help you!",
  },
  {
    icon: IoIosInformationCircleOutline,
    title: "First move-in",
    content:
      "For those leaving the nest and afraid of having to manage all sort of thing on their own. We can help you!",
  },
  {
    icon: IoIosInformationCircleOutline,
    title: "First move-in",
    content:
      "For those leaving the nest and afraid of having to manage all sort of thing on their own. We can help you!",
  },
  {
    icon: IoIosInformationCircleOutline,
    title: "First move-in",
    content:
      "For those leaving the nest and afraid of having to manage all sort of thing on their own. We can help you!",
  },
  {
    icon: IoIosInformationCircleOutline,
    title: "First move-in",
    content:
      "For those leaving the nest and afraid of having to manage all sort of thing on their own. We can help you!",
  },
  {
    icon: IoIosInformationCircleOutline,
    title: "First move-in",
    content:
      "For those leaving the nest and afraid of having to manage all sort of thing on their own. We can help you!",
  },
];
