import { useState } from 'react';

const Section3 = () => {

  const [contentVisible, setContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setContentVisible(!contentVisible);
  };

  return (
    <div className="section">

      <div>
        <h2>Section 3</h2>
        <p>This section has additional content that can be expanded.</p>
        <button className="seeMoreButton" onClick={toggleContentVisibility}>
          {contentVisible ? 'Hide Content' : 'Show Content'}
        </button>
        {contentVisible && (
          <div className="hiddenContent">
            <p>Here is some hidden content that you can toggle on and off.</p>
            <p>testsetsetsetset</p> <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p> <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p> <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
            
          </div>
        )}
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>More and more content...</p>
      </div>
    </div>
  );
};

export default Section3;
