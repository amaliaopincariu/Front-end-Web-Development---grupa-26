import dayjs from 'dayjs';
import './HomePage.css'

const HomePage = () => {
  const today = dayjs().startOf('month').format('DD/MM/YYYY');
  console.log(today);
  return (
    <>
      <h2 className="home-title">Home page</h2>
      {today}
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </>
  )

}
// <> sau <React.Fragment> ii un element fantoma pentru DOM

export default HomePage;