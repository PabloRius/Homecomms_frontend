import "./Footer.css";
import { NavigationLinkList } from "./Navigation/NavigatonLinkList/NavigationLinkList";
import { SocialList } from "./SocialList/SocialList";

export function Footer() {
  return (
    <footer>
      <SocialList></SocialList>
      <NavigationLinkList list="default" />
    </footer>
  );
}
