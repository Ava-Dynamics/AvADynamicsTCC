function About() {
  return (
    <div
      id="about"
      className="h-full md:h-screen flex items-center justify-center"
    >
      <div className="flex flex-col gap-10 text-center justify-center items-center tracking-widest">
        <div className="md:max-w-xl lg:max-w-5xl">
          <span className="md:text-5xl">
            A{" "}
            <span className="text-finscorePurple cursor-default transition duration-300 hover:opacity-90 hover:text-purple-400">
              FINSCORE
            </span>{" "}
            é uma startup que busca mudar o comportamento financeiro e ensinar
            sobre educação financeira.
          </span>
        </div>
        <div className="">
          <span className="md:text-md lg:text-2xl font-medium text-purple-200">
            O projeto FinScore apresenta uma plataforma web e-learning
            financeira que ajuda os usuários a cuidar da saúde financeira e do
            score de crédito. Com nano-cursos e acompanhamento de evolução, a
            plataforma permite que os usuários melhorem sua situação financeira
            e identifiquem ofensores. A inserção de gastos e rendimentos na
            plataforma ajuda a identificar problemas financeiros e a melhorar a
            situação financeira de forma eficaz.
          </span>
        </div>
      </div>
    </div>
  )
}

export default About
