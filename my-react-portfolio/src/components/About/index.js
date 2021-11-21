import React from 'react';
import me from '../../assets/images/me.jpg'


function About() {
    return (
        <section>
           <div className='section-full page-about'>
                <div className='text-zone' >
                <h1 className="who" id='about'>Who am I?</h1>
                    <p>
                        I'm a Full-Stack Developer located in Utah. I have been interested and involved 
                        in software, web development, and puzzling out solutions for years now.
                    </p>
                    <p>    
                        Problem solver, dedicated, responsive, and attentive to detail. A fan of reading 
                        science-fiction and fantasy, outdoor activities, TV series and anime. 
                    </p>
                    <p>
                        Interested in exploring and learning new technologies and tools for both front 
                        and backend.
                    </p>
                </div>    
                <div className='about-image'>
                    <img src={me} className="my-2" style={{ width: "60%" }} alt="cover" />

                </div>           
            </div> 
        </section>

    )
}

export default About;