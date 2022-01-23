import { useState, useEffect } from "react";
import MeetupList from "../components/meeetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-meetups-66672-default-rtdb.firebaseio.com/meetups.json')
    .then( response =>{
      return response.json();
    }).then(data => {
      const meetups = [] as any;

      for(const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup);
      }

      console.log(meetups)
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, [])

  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  } else {
    return(
      <section>
          <h1>All Meetups</h1>
          <MeetupList meetups={loadedMeetups}/>
      </section>
  )
  }
}


export default AllMeetupsPage;