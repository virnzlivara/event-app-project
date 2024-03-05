//TODO #1: Display all featured events and it should be revalidated every 1800 seconds.

import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  return (
    <div>
      {/* Display List here */}
      {/* <EventList items={props.events} /> */}
    </div>
  );
}

// export async function getStaticProps() {
//   const featuredEvents = await getFeaturedEvents();

//   return {
//     props: {
//       events: featuredEvents
//     },
//     revalidate: 1800
//   }
// }

export default HomePage;
