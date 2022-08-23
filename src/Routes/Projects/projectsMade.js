import instagram from "../../assets/projectImages/instagram.jpg";
import resume from "../../assets/projectImages/resume.jpg";
import signUpForm from "../../assets/projectImages/signUpForm.jpg";
import weather from "../../assets/projectImages/weather.jpg";

const projectsMade = [
  {
    projectName: "Instagram Clone",
    key: "p1",
    src: instagram,
    alt: "instagram clone",
    description:
      "This is an Instagram clone I built using ReactJs, ReactRouter v6, and Firebase Hosting. This presented many challenges as a lot of the guides on how to implement things were deprecated. This forced me to grow considerably since I had to infer and apply a lot of information from the firebase docs.",
  },
  {
    projectName: "Resume App",
    key: "p2",
    src: resume,
    alt: "resume application",
    description:
      "This is a Resume app I built using ReactJs, Redux, and basic javascript. It was one of the first applications that I tried to make responsive through grid auto-fit and media queries. I used the react testing library extensively in this application due to all the inputs that output information.",
  },
  {
    projectName: "Sign Up Form",
    key: "p3",
    src: signUpForm,
    alt: "dummy sign up form",
    description:
      "This is a Sign Up Form I built using basic javascript and ReactJs. I've styled the whole website to be responsive at nearly all resolutions. In addition, there is active form validation upon submission. I learned to be extra vigilant in monitoring inherited css styles with this project.",
  },
  {
    projectName: "Weather App",
    key: "p4",
    src: weather,
    alt: "weather application",
    description:
      "This is a Weather App I built using basic javascript and ReactJs. I've styled the whole website to be responsive at nearly all resolutions. It utilizes the openweather Api in order to fetch live weather information.",
  },
];

export default projectsMade;
