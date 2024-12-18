import Banner from '@components/banner'
import { Image } from '@nextui-org/image'

const Home = () => {
  return (
    <html>
        <body>
              <Image
                alt="Intro Image"
                src="/sand.avif"
                className='bg-image'
              />
            <Banner className='title' />
            <div className="greetings">
                <h1>Welcome!</h1>
                <p>We are a group of believers who gather in the name of Jesus Christ according to the New Testament principles.</p>
            </div>
        </body>
    </html>
  )
}

export default Home