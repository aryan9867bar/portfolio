import React from 'react';
import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import BlogsSection from '../components/sections/BlogsSection';
import EducationSection from '../components/sections/EducationSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import JustForFunSection from '../components/sections/JustForFunSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
    return (
        <div className="w-full">
            <section id="home">
                <HomeSection />
            </section>

            <section id="about">
                <AboutSection />
            </section>

            <section id="skills">
                <SkillsSection />
            </section>

            <section id="projects">
                <ProjectsSection />
            </section>

            <section id="experience">
                <ExperienceSection />
            </section>

            <section id="blogs">
                <BlogsSection />
            </section>

            <section id="education">
                <EducationSection />
            </section>

            <section id="certifications">
                <CertificationsSection />
            </section>

            <section id="achievements">
                <AchievementsSection />
            </section>

            <section id="fun">
                <JustForFunSection />
            </section>

            <section id="contact">
                <ContactSection />
            </section>
        </div>
    );
};

export default Home;
