import Header from '../components/Header'
import Heading from '../components/Heading'
import Video from '../components/Video'


const Illusion = () => {
  return (
    <div className='section'>
      <Header btnText="Read more" />
       <div className='flex w-full max-w-7xl justify-between py-28 items-center'>
          <Heading text1="AiXplore" text2="Illusion" />
          <div className='bg-accentPurple w-96 h-52'>Video placeholder</div>
        </div>
    </div>
  )
}

export default Illusion