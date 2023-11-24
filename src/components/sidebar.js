import React, { useState, useEffect, lazy, Suspense } from 'react';

// Icons
import { IoPerson } from 'react-icons/io5';
import { FaLaptop, FaBlog, FaLinux } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import { FcLinux } from "react-icons/fc";

// Channels
const AboutMe = lazy(() => import('./channels/about'));
const Blog = lazy(() => import('./channels/blog'));
const Projects = lazy(() => import('./channels/projects'));
const Neofetch = lazy(() => import('./channels/neofetch'));
const Contact = lazy(() => import('./channels/contact'));

function SideBar() {
  const [selectedChannel, setSelectedChannel] = useState('about');

  const handleIconClick = (channel) => {
    setSelectedChannel(channel);
  };

  useEffect(() => {
    // Fetch and handle data when the selected channel changes
    // For example, you might want to fetch content for the selected channel here
    // fetchData(selectedChannel);
  }, [selectedChannel]);

  const renderChannelComponent = () => {
    switch (selectedChannel) {
      case 'about':
        return <AboutMe />;
      case 'blog':
        return <Blog />;
      case 'projects':
        return <Projects />;
      case 'neofetch':
        return <Neofetch />
      case 'contact':
        return <Contact />;
      default:
        return <p>something shit itself</p>;
    }
  };

  return (
    <div className='bg-bg_secondary w-screen h-screen'>
    <div className="flex">
      <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-background text-white shadow-lg">
        <SideBarIcon
          icon={<IoPerson size="28" />}
          text="About Me"
          onClick={() => handleIconClick('about')}
        />
        <SideBarIcon
          icon={<FaBlog size="28" />}
          text="Blog"
          onClick={() => handleIconClick('blog')}
        />
        <SideBarIcon
          icon={<FaLaptop size="28" />}
          text="Projects"
          onClick={() => handleIconClick('projects')}
        />
        <SideBarIcon
          icon={<FaLinux size="28" />}
          text="Neofetches"
          onClick={() => handleIconClick('neofetch')}
        />
        <SideBarIcon
          icon={<MdContactMail size="28" />}
          text="Contact / Socials"
          onClick={() => handleIconClick('contact')}
        />
      </div>

      <div className="flex-grow ml-16 p-4">
        <Suspense fallback={<div>Loading...</div>}>
          {renderChannelComponent()}
        </Suspense>
      </div>
    </div>
    </div>
  );
}

function SideBarIcon({ icon, text = 'tt', onClick }) {
  return (
    <div className="sidebar-icon group" onClick={onClick}>
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}

export default SideBar;
