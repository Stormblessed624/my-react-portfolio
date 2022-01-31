import React from "react";
import resume from "../../assets/resume/resume.pdf";



const Resume = () => (

  <div>
  <object
    data={resume}
    type="application/pdf"
    width="500"
    height="678"
  >

    <iframe
      src={resume}
      width="500"
      height="678"
    >
    <p>This browser does not support PDF!</p>
    </iframe>
  </object>
</div>
);

export default Resume;