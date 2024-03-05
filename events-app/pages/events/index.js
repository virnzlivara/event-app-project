// TODO #2: Display all events and it should be revalidated every 60 seconds
// Use SSG Rendering, use this getAllEvents function to get the data
// Clicking Explore events button will navigate to the event details and route to `/events/${year}/${month}`
import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage(props) {
  // const router = useRouter();
  // const { events } = props;

  function findEventsHandler(year, month) {
    // Add navigation function here
    // const fullPath = `/events/${year}/${month}`;
    
    // router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  // return {
  //   props: {
  //     events: events,
  //   },
  //   revalidate: 60
  // };
}

export default AllEventsPage;
