import './home.css'
import dayjs from 'dayjs';

const getHomePage = () => {
  const today = dayjs().startOf('month').format('DD/MM/YYYY');
  console.log(today);
  return `
      <h2 class="home-title">Home page</h2>
      ${today}
    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  `
  
}

export default getHomePage;

/*
import dayjs from 'dayjs'

console.log(dayjs().format('DD/MM/YYYY'))

*/