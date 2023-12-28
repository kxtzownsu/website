import React, { useState, lazy, Suspense } from 'react';

// Icons
import { IoPerson } from 'react-icons/io5';
import { FaLaptop, FaBlog, FaLinux } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';

// Channels
const AboutMe = lazy(() => import('./components/channels/about'));
const Blog = lazy(() => import('./components/channels/blog'));
const Projects = lazy(() => import('./components/channels/projects'));
const Neofetch = lazy(() => import('./components/channels/neofetch'));
const Contact = lazy(() => import('./components/channels/contact'));



function SideBar() {
  const [selectedChannel, setSelectedChannel] = useState('about');
  const [isContentVisible, setContentVisible] = useState(true);

  const handleIconClick = (channel) => {
    // Start fade out transition
    setContentVisible(false);

    // Set selected channel after a short delay to allow the fade out
    setTimeout(() => {
      setSelectedChannel(channel);
      // Start fade in transition
      setContentVisible(true);
    }, 500);
  };

  // useEffect (unchanged)

  const renderChannelComponent = () => {
    switch (selectedChannel) {
      case 'about':
        return <AboutMe />;
      case 'blog':
        return <Blog />;
      case 'projects':
        return <Projects />;
      case 'neofetch':
        return <Neofetch />;
      case 'contact':
        return <Contact />;
      default:
        return <p>something shit itself</p>;
    }
  };

  return (
    <div className='bg-bg_secondary w-screen h-screen overflow-hidden'>
      <div className="flex">
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-background text-white shadow-lg">
        <SideBarIcon
          icon={<IoPerson size="28" />}
          text="About Me"
          onClick={() => handleIconClick('about')}
        />
        <div className="bg-gray-600 h-0.5 w-8/12 my-2 mx-auto rounded"></div>
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
          {/* Additional SidebarIcon components for other channels */}
        </div>

        <div className="flex-grow ml-16 p-4" style={{ transition: 'opacity 0.5s ease-in-out', opacity: isContentVisible ? 1 : 0 }}>
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
