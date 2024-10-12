import React, { useEffect, useState } from "react";
import Community from "../components/community/Community";
import DashboardContent from "../components/dashboard/DashboardContent";
import Header from "../components/header/Header";
import Journey from "../components/journey/Journey";
import Medals from "../components/medal/Medals";
import News from "../components/news/News";
import { newspaperService } from '../services/api/newspapers';
import { postsService } from "../services/api/posts";
import { userService } from '../services/api/users';

function Dashboard() {
  const [newspapers, setNewspaper] = useState([]);
  const [medals, setMedals] = useState([]);
  const [community, setCommunity] = useState([]);
  const [jorney, setJorney] = useState([]);
  const [countNews, setCountNews] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const getNews = async () => {
      const resNews = await newspaperService.getAll();
      if (resNews && resNews.status === 200) {
        setNewspaper(resNews.data);
      }
    }

    const getPosts = async () => {
      const resPosts = await postsService.getAll();
      if (resPosts && resPosts.status === 200) {
        setCommunity(resPosts.data);
      }
    }

    const getMedals = async () => {
      const resMedals = await userService.getMedals();
      if (resMedals && resMedals.status === 200) {
        setMedals(resMedals.data);
      }
    }

    const getJourney = async () => {
      const resJourney = await userService.getJourney();
      if (resJourney && resJourney.status === 200) {
        setJorney(resJourney.data);
      }
    }

    if (isMounted) {
      getNews();
      getPosts();
      getMedals();
      getJourney();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const countNewsRead = () => {
    setCountNews(prev => {
      const newCount = prev + 1;
      if (newCount >= 8) {
        receiveNewMedal();
      }
      return newCount;
    });
  };

  const receiveNewMedal = async () => {
    const medalName = "Leitor ávido";
    if (!medals.some(medal => medal.name === medalName)) {
      const res = await userService.receiveMedal(medalName);
      if (res && res.status === 201) {
        const updatedMedals = [...medals, res.data];
        setMedals(updatedMedals);
        alert(`Você recebeu uma nova medalha: ${medalName}`);
      }
    }
  }

  return (
    <Header>
      <DashboardContent
        firstTitle="Minha Jornada"
        firstContent={<Journey data={jorney}/>}
        secondTitle="ÚLTIMAS MEDALHAS"
        secondContent={<Medals data={medals} />}
      />
      <DashboardContent
        firstTitle="Ultimas Notícias"
        firstContent={ newspapers && newspapers.length > 0 &&
          <>
            {newspapers.map((newspaper) => (
              <News
                key={newspaper.id}
                pageName={JSON.parse(newspaper.source).name}
                title={newspaper.title}
                content={newspaper.content}
                date={new Date(newspaper.publishedAt).toLocaleDateString("pt-BR")}
                image={newspaper.urlToImage}
                link={newspaper.url}
                onClick={countNewsRead}
              />
            ))}
          </>
        }
        secondTitle="Comunidade"
        secondContent={community && community.length > 0 &&
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

export default Dashboard;
