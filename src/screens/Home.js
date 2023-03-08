import React from 'react';
import Heading from '../components/Heading/Heading';
import TopBar from '../components/TopBar/TopBar';
import '../css/Home.css';

// HeroIcons
import { UserCircleIcon , BookOpenIcon , StarIcon , AcademicCapIcon } from '@heroicons/react/24/outline'
import Awards from '../components/Awards/Awards';
import Language from '../components/Language/Language';


function Home() {
    return (
        <div class="home">
            <TopBar />
            <div className="home__main">
                <div className="home__left">
                    <div className="home__info">
                        <Heading icon={<UserCircleIcon />} title="Professional Profile" />
                        <Awards optional="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
                    </div>
                    <div className="home__info">
                        <Heading icon={<BookOpenIcon />} title="Languages" />
                        <Language title="English" fluency="Fluent" />
                        <Language title="French" fluency="Basic" />
                        <Language title="Spanish" fluency="Basic" />
                    </div>
                    <div className="home__info">
                        <Heading icon={<StarIcon />} title="Awards" />
                        <Awards title="Cousera Certification for JS" place="Coursera" year="2019/2020"  />
                        <Awards title="Advanced Git Essentials" place="LinkedIN Learning" year="2019/2020" />
                    </div>
                </div>
                <div className="home__right">
                    <div className="home__info">
                        <Heading icon={<AcademicCapIcon />} title="Education" />
                        <Awards title="Degree Name ( Major )" place="University College Bangalore" year="2019/2020" optional="Random Text" />
                        <Awards title="Degree Name ( Major )" place="University College Bangalore" year="2019/2020" optional="Random Text" />
                        <Awards title="Degree Name ( Major )" place="University College Bangalore" year="2019/2020" optional="Random Text" />
                        <Awards title="Degree Name ( Major )" place="University College Bangalore" year="2019/2020" optional="Random Text" />
                    </div>
                    <div className="home__info">
                        <Heading icon={<AcademicCapIcon />} title="Work Experience" />
                        <Awards title="Degree Name ( Major )" place="University College Bangalore" optional="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
                        <Awards title="Degree Name ( Major )" place="University College Bangalore" optional="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
