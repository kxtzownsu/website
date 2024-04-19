 // erm... what the preact
import { useState } from 'preact/hooks';
import { Suspense, lazy } from 'preact/compat';

// Icons
import { IoPerson } from 'react-icons/io5';
import { FaLaptop, FaBlog, FaLinux } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';

// Pages / Channels
import { AboutMe } from './channels/AboutMe';
import { Blog } from './channels/Blog';
import { Projects } from './channels/Projects';
import { Neofetch } from './channels/Neofetch';
import { Contact } from './channels/Contact';

// this is the start of the main page, it isn't just the sidebar
export function Website() {
  const [selectedChannel, setSelectedChannel] = useState('about');
  const [isContentVisible, setContentVisible] = useState(true);

  const handleIconClick = (channel) => {
    setContentVisible(false); // fade effect

    setTimeout(() => {
      // Set the channel visible now, just for silly transitions :p
      setSelectedChannel(channel);
      setContentVisible(true);
    }, 500);
  };


  // RAHHHH CASE STATEMENTS GOOO
  const renderChannel = () => {
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
        return <p>something shit itself, reload or contact me on Discord @kxtzownsu OR me@kxtz.dev</p>;
    }
  };

  return (
    <div className='w-screen h-screen overflow-hidden bg-bg_secondary'>
      <div className="flex z-0">
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
        </div>

        <div className="flex-grow ml-16 p-4" style={{ transition: 'opacity 0.5s ease-in-out', opacity: isContentVisible ? 1 : 0 }}>
          <Suspense fallback={<div>Loading...</div>}>
            {renderChannel()}
          </Suspense>
        </div>
      </div>
    </div>
  );

}


// Give me my icon NOW, but with Preact :3
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