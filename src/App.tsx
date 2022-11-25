import Timeline from "./components/Timeline";
import { ITimelineItem } from "./models";
import "./App.css";

const data: ITimelineItem[] = [
  {
    id: 1,
    title: "Teste",
    date: "2022-01-05",
    description: "Lorem ipsum dolor sit amet.",
    userAvatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
  },
  {
    id: 2,
    title: "Item Ontem",
    date: "2021-12-11",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, repellat. Corporis, hic natus! Illo, praesentium!",
    userAvatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=EyeRoll&eyebrowType=Default&mouthType=Sad&skinColor=Light",
  },
  {
    id: 3,
    title: "Atualização de Status",
    date: "2022-11-07",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    userAvatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Dizzy&eyebrowType=Default&mouthType=Default&skinColor=Light",
  },
  {
    id: 4,
    title: "Quebra de Segurança",
    date: "2020-08-13",
    description: "Lorem ipsum dolor sit amet.",
    userAvatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Cry&eyebrowType=Default&mouthType=Sad&skinColor=Brown",
  },
  {
    id: 5,
    title: "Atualização de Status",
    date: "2022-09-05",
    description: "Lorem, ipsum dolor.",
    userAvatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=EyeRoll&eyebrowType=Default&mouthType=Sad&skinColor=Light",
  },
  {
    id: 6,
    title: "Avanço de Ticket",
    date: "2023-05-05",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque placeat, assumenda aut itaque fuga amet ullam, repudiandae, ducimus doloribus labore accusamus est quaerat debitis numquam?",
    userAvatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Cry&eyebrowType=Default&mouthType=Sad&skinColor=Brown",
  },
];

function App() {
  return (
    <div className="container">
      <section>
        <div className="section-header">
          <div className="title">Today</div>
          <div className="date">Tuesday, July 12, 2022</div>
        </div>
        <Timeline data={data} />
      </section>
      <section>
        <div className="section-header">
          <div className="title">Yesterday</div>
          <div className="date">Monday, July 11, 2022</div>
        </div>
        <Timeline data={data} />
      </section>
      <section>
        <div className="section-header">
          <div className="title">Last Week</div>
          <div className="date">
            Sunday, July 03, 2022 to Sunday, July 10, 2022
          </div>
        </div>
        <Timeline data={data} />
      </section>
    </div>
  );
}

export default App;
