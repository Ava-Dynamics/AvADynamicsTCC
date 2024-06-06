import React from "react";
import Community from "../components/community/Community";
import DashboardContent from "../components/dashboard/DashboardContent";
import Header from "../components/header/Header";
import Journey from "../components/journey/Journey";
import Medals from "../components/medal/Medals";
import News from "../components/news/News";

function DashboardPage() {
  return (
    <Header>
      <DashboardContent
        firstTitle="Minha Jornada"
        firstContent={<Journey />}
        secondTitle="ÚLTIMAS MEDALHAS"
        secondContent={<Medals />}
      />
      <DashboardContent
        firstTitle="Ultimas Notícias"
        firstContent={
          <>
            <News
              pageName="Poder360"
              title="Fazenda divulga parceria com o Banco Central para aprimorar a supervisão do sistema financeiro"
              content="O Ministério da Economia divulgou nesta quinta-feira (23.set.2021) que a Secretaria de Política Econômica (SPE) e o Banco Central (BC) firmaram um acordo de cooperação técnica para aprimorar a supervisão do sistema financeiro."
              date="23/09/2021"
              image="https://live.staticflickr.com/65535/52832410214_fbd6092c18_c.jpg"
            />
            <News
              pageName="Poder360"
              title="Fazenda divulga parceria com o Banco Central para aprimorar a supervisão do sistema financeiro"
              content="O Ministério da Economia divulgou nesta quinta-feira (23.set.2021) que a Secretaria de Política Econômica (SPE) e o Banco Central (BC) firmaram um acordo de cooperação técnica para aprimorar a supervisão do sistema financeiro."
              date="23/09/2021"
              image="https://live.staticflickr.com/65535/52832410214_fbd6092c18_c.jpg"
            />
            <News
              pageName="Poder360"
              title="Fazenda divulga parceria com o Banco Central para aprimorar a supervisão do sistema financeiro"
              content="O Ministério da Economia divulgou nesta quinta-feira (23.set.2021) que a Secretaria de Política Econômica (SPE) e o Banco Central (BC) firmaram um acordo de cooperação técnica para aprimorar a supervisão do sistema financeiro."
              date="23/09/2021"
              image="https://live.staticflickr.com/65535/52832410214_fbd6092c18_c.jpg"
            />
          </>
        }
        secondTitle="Comunidade"
        secondContent={
          <>
            <Community
              username="@rodrigosantos"
              time="3h"
              content="Aprendi sozinho a investir, assistindo bastante videos no youtube e lendo bastante livros. Recomendo o livro 'Pai Rico, Pai Pobre'. Vale a pena!"
              image="https://avatars.githubusercontent.com/u/62719629?v=4"
            />
            <Community
              username="@gabrielrodrigues"
              time="1h"
              content="Estou começando a investir agora, alguém tem dicas de por onde começar?"
              image="https://avatars.githubusercontent.com/u/38702780?v=4"
            />
            <Community
              username="@fernandosilva"
              time="3h"
              content="Investir em ações é uma ótima opção para quem quer ter uma renda extra. Recomendo começar com ações da Petrobras e Vale. São ações que sempre estão em alta!"
              image="https://avatars.githubusercontent.com/u/108596751?s=48&v=4"
            />
          </>
        }
      />
    </Header>
  );
}

export default DashboardPage;
