function Content({ title, description, subDescription, position, image }) {
  return (
    <div id='features' className='h-full md:h-[calc(100vh-10rem)]'>
      <div
        className={`flex flex-col md:flex-row justify-between
        ${position === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'}
      `}
      >
        <div className='md:max-w-md lg:max-w-lg p-4'>
          <div>
            <span className='text-finscorePurple text-3xl md:text-5xl lg:text-6xl'>
              {title}
            </span>
          </div>
          <div className='mt-5 flex flex-col gap-5'>
            <span className='text-sm md:text-md lg:text-xl'>{description}</span>
            <span className='text-sm md:text-md lg:text-xl'>
              {subDescription}
            </span>
          </div>
        </div>
        <div className='mt-5 md:mt-0 md:max-w-[50%] flex justify-center items-center'>
          <img
            className='rounded-3xl w-full h-auto'
            src={image}
            alt='placeholder'
          />
        </div>
      </div>
    </div>
  )
}

export default Content
