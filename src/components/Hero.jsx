import profile from '../assets/STV06872 (1).jpg'

function Hero() {
  return (
    <div className='pb-4 lg:mb-36'>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:p-8'>
                <img src={profile} className='h-80  border border-stone-900 rounded-3xl' alt="Profile"/>
            </div>
        </div>
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start mt-10'>
                <h2 className='pb-2 text-4xl tracking-tight lg:text8x'>Praphusak Tre-Intong</h2>
                <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</span>
                <p className='my-2 max-w-lg py-6 texxt-xl leading-relazed tracking-tighter'>I am a Full Stack Developer with a passion for creating innovative and user-friendly web applications. With a strong understanding of both front-end and back-end technologies, I have my skills in front-end development, including HTML, CSS, JavaScript and React, and my expertise in back-end development, including Node.js, Express.js, and MySQL, and I am committed to delivering high-quality results that meet the needs of my clients.</p>
                <a href="../assets/Praphusak_Resume.pdf" target='_blank' rel='noopener noreferrer' download className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'> Download Resume</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
