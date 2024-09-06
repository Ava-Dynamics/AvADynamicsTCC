import React, { useEffect } from "react";
import Community from "../components/community/Community";
import DashboardContent from "../components/dashboard/DashboardContent";
import Header from "../components/header/Header";
import Journey from "../components/journey/Journey";
import Medals from "../components/medal/Medals";
import News from "../components/news/News";

function DashboardPage() {
  const [newspapers, setNewspaper] = React.useState([]);
  const [medals, setMedal] = React.useState([]);
  const [community, setCommunity] = React.useState([]);
  const [jorneys, setJorneys] = React.useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND + "/newspapers").then((res) => {
      res.json().then((data) => {
        setNewspaper(data);    
      })
    });
    fetch(process.env.REACT_APP_BACKEND + "/posts").then((res) => {
      res.json().then((data) => {
        setCommunity(data);    
      })
    });
    fetch(process.env.REACT_APP_BACKEND + "/users/Medals").then((res) => {
      res.json().then((data) => {
        setMedal(data);    
      })
    });
    fetch(process.env.REACT_APP_BACKEND + "/users/jorney").then((res) => {
      res.json().then((data) => {
        setJorneys(data);    
      })
    });
  }, []);


  return (
    <Header>
      <DashboardContent
        firstTitle="Minha Jornada"
        firstContent={<Journey data={jorneys}/>}
        secondTitle="ÚLTIMAS MEDALHAS"
        secondContent={<Medals data={medals} />}
      />
      <DashboardContent
        firstTitle="Ultimas Notícias"
        firstContent={ newspapers && newspapers.length > 0 &&
          <>
            {newspapers.map((newspaper) => (
              <News
                pageName={JSON.parse(newspaper.source).name}
                title={newspaper.title}
                content={newspaper.content}
                date={new Date(newspaper.publishedAt).toLocaleDateString("pt-BR")}
                image={newspaper.urlToImage}
                link={newspaper.url}
              />
            ))}
          </>
        }
        secondTitle="Comunidade"
        secondContent={ community && community.length > 0 &&
          <>
            {community.map((community) => (
              <Community
                key={community.id}
                username={community.usersRel.name}
                time={new Date(community.publishedAt).toLocaleDateString("pt-BR")}
                content={community.content}
                image={community.usersRel.imageProfile}
              />
            ))}
          </>
        }
      />
    </Header>
  );
}

export default DashboardPage;
