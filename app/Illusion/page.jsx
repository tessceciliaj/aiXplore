import Header from '../components/Header'
import Heading from '../components/Heading'
import Video from '../components/Video'


const Illusion = () => {
  return (
    <div className='section'>
      <Header btnText="Read more" />
       <div className='flex flex-col md:flex-row gap-8 w-full max-w-7xl items-center justify-center'>
          <Heading text1="AiXplore" text2="Illusion" />
          <Video src="\natlink.mp4"/>
        </div>
<i className='text-lightGray'>Natlink logo made into elements of nature with illuison.</i>
    </div>
  )
}

export default Illusion