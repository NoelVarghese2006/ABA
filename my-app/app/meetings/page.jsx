import Banner from '@components/banner'
import InfoBox from '@components/infobox'
import '@styles/meetings.css'

const Meetings = () => {
  const sunMeetings = [
    {
      time: '10:00 am - 11:45 am',
      meeting: 'Breaking of Bread & Word Ministry'
    },
    {
      time: '11:45 - 12:15',
      meeting: 'Fellowship & Snacks'
    },
    {
      time: '12:15 - 1:15 pm',
      meeting: 'Sunday School & Bible Study'
    }
  ]

  const satMeetings = [
    {
      time: '7:00 pm - 8:00 pm',
      meeting: 'Bible Study'
    },
    {
      time: '10:00 am, First Sat each Month',
      meeting: 'Outreach'
    }
  ]

  const wedMeetings = [
    {
      time: '7:00 pm - 8:00 pm',
      meeting: 'Prayer Meeting'
    }
  ]

  return (
    <section>
      <Banner />
      <h1>Weekly Meetings</h1>
      <div className='meetings'>
        <InfoBox title={'Sunday'} items={sunMeetings}/>
        <InfoBox title={'Wednesday'} items={wedMeetings}/>
        <InfoBox title={'Saturday'} items={satMeetings}/>
        
      </div>
    </section>
  )
}

export default Meetings