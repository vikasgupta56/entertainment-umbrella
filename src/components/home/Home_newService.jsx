import React from "react";

const Home_newService = () => {
  return (
    <>
      <div className="_services p-small">
        <div className="s-indented-title_wrapper">
          <div className="s-indented-title_cntr">
            <h2>What we do</h2>
            <p className="s-indented-title_cntr_para">
              No event is big or small for us, be it a music concert, bar night,
              brand activation, corporate events, a wedding, or private parties.
            </p>
          </div>
        </div>
        <div className="groups g-table">
          <ul>
            <li>
              <h3>Film & Media:</h3>{" "}
              <ul className="opacity-40">
                <li>Film Production</li>
                <li>Photography and Stills</li>
                <li>Scripting and Storyboarding</li>
                <li>Celebrity Endorsements</li>
                <li>Casting</li>
                <li>Post-Production</li>
                <li>Behind-The-Scenes Content</li>
                <li>Animation and Graphic Design</li>
                <li>Video Marketing Content</li>
                <li>Documentary Filming</li>
                <li>Music Video Production</li>
                {/* <li>Print</li>
                <li>Editorial design</li>
                <li>Type design</li> */}
              </ul>
            </li>
            <li>
              <h3>Event Services:</h3>{" "}
              <ul className="opacity-40">
                <li>Event Design & Conceptualization</li>
                <li>Venue & Logistics Management</li>
                <li>Talent & Artist Coordination</li>
                <li>Guest & VIP Services</li>
                <li>Branding & Event Assets</li>
                <li>Live Production & Coverage</li>
                <li>Corporate & Private Events</li>
                <li>Security & Risk Management</li>
                {/* <li>Digital Publishing</li> */}
              </ul>
            </li>
            <li>
              <h3>Types of Events:</h3>{" "}
              <ul className="opacity-40">
                <li>Music concerts, Bar nights</li>
                <li>Branded Events</li>
                <li>Wedding Planning and Coordination</li>
                <li>Private Parties and Gala Event</li>
                <li>Fashion Shows</li>
                <li>Product Launches</li>
                {/* <li>Video direction</li> */}
                {/* <li>Campaign concept</li> */}
              </ul>
            </li>
            {/* <li>
              <h3>Business Design</h3>{" "}
              <ul className="opacity-40">
                <li>Concept development</li>
                <li>Research and strategy</li>
                <li>Communication strategy</li>
                <li>Design strategy</li>
                <li>Digital and experience strategy</li>
                <li>Business innovation and transformation</li>
                <li>Brand platforms and strategy</li>
                <li>Brand portfolio strategy</li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home_newService;
