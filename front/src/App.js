import Footer from "./components/Footer/Footer"
import About from "./components/about-us/About"
import Contact from "./components/contact/Contact"
import Content from "./components/content/Content"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <div className="h-full px-7 md:px-10 xl:px-28 2xl:px-72">
      <Navbar />
      <Home />
      <About />
      <Content
        title="Acompanhe a evolução do seu Score de Crédito"
        description="Use a Finscore para acompanhar o progresso do seu score de crédito."
        subDescription="Nossa missão é prover de gatilhos de cuidados com o seu financeiro para que o seu score de crédito aumente, afinal: queremos o nosso nome “limpo na praça”."
      />
      <Content
        position="left"
        title="Monitore seus gastos e reservas"
        description="O sistema inteligente da Finscore possibilita que você monitore seus gastos fixos e variáveis afim de entender quais são seu ofensores e como você pode evoluir financeiramente. 
        "
        subDescription="Nossos gráficos e inteligencia artificial permite que seus dados de pagamento cadastrados na plataforma sejam demonstrado de maneira simples e didática, informando e exemplicando boas práticas de melhora de capital."
      />
      <Content
        title="Construa sua carteira de investimentos"
        description="A Finscore traz cursos de como, onde e quando investir seu dinheiro para que você saia das dívidas, tenha uma reseva de emergencia e investa seu dinheiro para planos futuros. 
        "
        subDescription="Além disso você pode usar nossos espaços para conhecer novos investimentos e tendências."
      />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
