import Header from '../components/Header'
import Heading from '../components/Heading'
import Video from '../components/Video'


const Illusion = () => {
  return (
    <div className='section'>
      <Header btnText="Read more" />
       <div className='flex flex-col md:flex-row gap-8 w-full max-w-7xl pt-8 items-center'>
          <Heading text1="AiXplore" text2="Illusion" />
          <Video src="\natlink.mp4"/>
        </div>
    </div>
  )
}

export default Illusion