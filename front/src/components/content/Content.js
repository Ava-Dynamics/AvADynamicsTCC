function Content({ title, description, subDescription, position, image }) {
  return (
    <div id="features" className="h-full md:h-[calc(100vh-10rem)]">
      <div
        className={`flex justify-between
        ${position === "left" ? "flex-row-reverse" : "flex-row"}
      `}
      >
        <div className="md:max-w-md lg:max-w-lg">
          <div>
            <span className="text-finscorePurple md:text-5xl lg:text-6xl">
              {title}
            </span>
          </div>
          <div className="mt-5 flex flex-col gap-5">
            <span className="md:text-md lg:text-xl">{description}</span>
            <span className="md:text-md lg:text-xl">{subDescription}</span>
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

export default Content
