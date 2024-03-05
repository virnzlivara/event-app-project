//TODO #3: Display the Event Details
// Render this page using the Incremental Static Regeneration
// There should be no error when we directly visit this URL: http://localhost:3000/events/e1
// Use event id to retrieve the event details, use getEventById function
// Display Loading text while waiting for the data to fetch
// Display an error message when eventid is not found
import { Fragment } from 'react';

import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage(props) {
  const event = props.selectedEvent;

  // if (!event) {
  //   return (
  //     <div className="center">
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  // const event = await getEventById(eventId);

  // return {
  //   props: {
  //     selectedEvent: event
  //   },
  //   revalidate: 30
  // };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map(event => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    // fallback: true | false | "blocking"
  };
}

export default EventDetailPage;
