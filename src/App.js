import React from 'react';
import Tweet from "./Tweet";

function App(){


  return (
    <div className="app">
      <Tweet name="Stuart" message="just DotA" likes="that 1 other players likes this"/>
      <Tweet name="Stephan" message="BuT iM tHe rEeEeL lUiGi" likes="Stephan liked this"/>
      <Tweet name="Alex" message="Bootstrap is the best I'm the no.1 fan" likes="+50"/>
      <Tweet name="Tommy K" message="2 minute Javascript" likes="Alex disliked this"/>
      <Tweet name="Geo" message="1 mill+ chances" likes="+20 likes"/>

    </div>
  );
};

export default App;