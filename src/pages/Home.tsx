import { useAppSelector } from "../store/hooks";

import { AuthButtons } from "../components/Auth/AuthButtons";

import { ImagesData, VisionData } from "./PageData";

export function HomePage() {
  const { currentUser } = useAppSelector((state) => state.user);
  return (
    <div className="LandingPage">
      <section className="HeroSection">
        <h1 className="Title">HomeComms</h1>
        <h2 className="Subtitle">
          {!currentUser
            ? "Find your way to an easier house-sharing experience"
            : `Welcome Home ${currentUser.username}!`}
        </h2>
        {!currentUser ? (
          <AuthButtons />
        ) : (
          <a className="SecondaryButton LobbyButton" href="/lobby">
            Enter your Hub
          </a>
        )}
      </section>
      <section className="PresentationSection">
        <ul className="Images">
          {ImagesData.map((image, idx) => {
            return (
              <li key={idx}>
                <img src={image.src} alt={image.alt} />
              </li>
            );
          })}
        </ul>
        <div className="Vision">
          <span className="Title">
            <h3>Our vision</h3>
            <p>How we can help in making your life easier</p>
          </span>
          <ul>
            {VisionData.map((vision, idx) => {
              return (
                <li key={idx}>
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
      </section>
    </div>
  );
}
