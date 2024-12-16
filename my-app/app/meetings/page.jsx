import Banner from '@components/banner'
import InfoBox from '@components/infobox'
import '@styles/meetings.css'

const Meetings = () => {
  return (
    <section>
      <Banner />
      <h1>Weekly Meetings</h1>
      <div className='meetings'>
        <InfoBox />
        <InfoBox />
        <InfoBox />
      </div>
    </section>
  )
}

export default Meetings