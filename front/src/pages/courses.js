import React from "react";
import CourseCard from "../components/course-card/CourseCard";
import Header from "../components/header/Header";

function Courses() {
  const courses = [
    {
      teacher: "Gyovanna Carvalho",
      teacherImage: "https://avatars.githubusercontent.com/u/84048703?v=4",
      title: "Como PARAR de se ENDIVIDAR e pagar TUDO À VISTA!",
      duration: "6min 28seg",
      totalClasses: "6/6",
      progress: 30,
    },
    {
      teacher: "Primo Pobre",
      teacherImage: "https://avatars.githubusercontent.com/u/2892?v=4",
      title: "Novas Regras do Minha Casa Minha Vida",
      duration: "14min 43seg",
      totalClasses: "3/6",
      progress: 50,
    },
    {
      teacher: "Thaisa Fujii",
      teacherImage:
        "https://avatars.githubusercontent.com/u/71739802?v=4&size=40",
      title: "Programa Casa Verde e Amarela",
      duration: "10min 15seg",
      totalClasses: "4/4",
      progress: 100,
    },
    {
      teacher: "João da Silva",
      teacherImage: "https://avatars.githubusercontent.com/u/667063?v=4",
      title: "Investimento em Ações para Iniciantes",
      duration: "6min 28seg",
      totalClasses: "6/6",
      progress: 10,
    },
    {
      teacher: "Rodrigo Santos",
      teacherImage: "https://avatars.githubusercontent.com/u/1134310?s=48&v=4",
      title: "Investimento sem risco: Tesouro Direto e CDBs",
      duration: "6min 28seg",
      totalClasses: "10/16",
      progress: 80,
    },
    {
      teacher: "Gustavo Cerbasi",
      teacherImage: "https://avatars.githubusercontent.com/u/6055227?s=48&v=4",
      title: "Como investir em imóveis",
      duration: "6min 28seg",
      totalClasses: "6/6",
      progress: 100,
    },
  ];

  return (
    <Header>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </Header>
  );
}

export default Courses;
