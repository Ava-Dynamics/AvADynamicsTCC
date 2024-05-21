import "../../index.css"

function Home() {
  return (
    <div className="h-full md:h-[calc(100vh-16rem)] flex flex-col justify-center">
      <div className="flex items-center justify-between">
        <div className="flex flex-col text-5xl">
          <span>você</span>
          <span className="text-finscorePurple blink">financeiramente</span>
          <span>+ saudável</span>
          <div>
            <button
              className="mt-10 bg-gradient-to-r from-purple-400 via-purple-800 to-purple-900 hover:from-purple-400 hover:via-purple-400
 hover:to-purple-400 px-10 py-3 rounded-3xl text-xl transition-all duration-900 hover:fade-in"
            >
              Saiba mais
            </button>
          </div>
        </div>
        <div>
          <img
            className="rounded-3xl"
            src="https://via.placeholder.com/300"
            alt="placeholder"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
