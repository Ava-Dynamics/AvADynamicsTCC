import Footer from '../Footer/Footer'
import About from '../about-us/About'
import Contact from '../contact/Contact'
import Content from '../content/Content'
import Navbar from '../navbar/Navbar'
import HomepageImage1 from '../../assets/homepage-1.jpg'
import HomepageImage2 from '../../assets/homepage-2.jpg'
import HomepageImage3 from '../../assets/homepage-3.jpg'
import HomepageImage4 from '../../assets/homepage-4.jpg'

function Hero() {
  return (
    <div className='antialiased min-h-screen h-full px-7 md:px-10 xl:px-28 2xl:px-72'>
      <Navbar />
      <div className='h-full md:h-[calc(100vh-16rem)] flex flex-col justify-center'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col text-5xl'>
            <span>você</span>
            <span className='text-finscorePurple blink'>financeiramente</span>
            <span>+ saudável</span>
            <div>
              <button
                className='mt-10 bg-gradient-to-r from-purple-400 via-purple-800 to-purple-900 hover:from-purple-400 hover:via-purple-400
 hover:to-purple-400 px-10 py-3 rounded-3xl text-xl transition-all duration-900 hover:fade-in'
              >
                Saiba mais
              </button>
            </div>
          </div>
          <div>
            <img
              className='rounded-3xl'
              src={HomepageImage1}
              alt='placeholder'
            />
          </div>
        </div>
      </div>
      <About />
      <Content
        title='Acompanhe a evolução do seu Score de Crédito'
        description='Use a Finscore para acompanhar o progresso do seu score de crédito.'
        subDescription='Nossa missão é prover de gatilhos de cuidados com o seu financeiro para que o seu score de crédito aumente, afinal: queremos o nosso nome “limpo na praça”.'
        image={HomepageImage2}
      />
      <Content
        position='left'
        title='Monitore seus gastos e reservas'
        description='O sistema inteligente da Finscore possibilita que você monitore seus gastos fixos e variáveis afim de entender quais são seu ofensores e como você pode evoluir financeiramente.'
        subDescription='Nossos gráficos e inteligencia artificial permite que seus dados de pagamento cadastrados na plataforma sejam demonstrado de maneira simples e didática, informando e exemplicando boas práticas de melhora de capital.'
        image={HomepageImage3}
      />
      <Content
        title='Construa sua carteira de investimentos'
        description='A Finscore traz cursos de como, onde e quando investir seu dinheiro para que você saia das dívidas, tenha uma reseva de emergencia e investa seu dinheiro para planos futuros.'
        subDescription='Além disso você pode usar nossos espaços para conhecer novos investimentos e tendências.'
        image={HomepageImage4}
      />
      <Contact />
      <Footer />
    </div>
  )
}

export default Hero
