import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaHome, FaAt, FaPoo } from 'react-icons/fa';

const SideBar = () => {
    return (
      <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                    bg-white dark:bg-gray-900 shadow-lg">
                      
          <a href='./'><SideBarIcon icon={<FaHome size="28" />} text='home' /></a>
          <a href='about'><SideBarIcon icon={<FaAt size="32" />} text='about me'/></a>
          <a href='projects'><SideBarIcon icon={<BsFillLightningFill size="20" />} text='projects' /></a>
          <a href='funny'><SideBarIcon icon={<FaPoo size="20" />} text='funny stuff' /></a>
          <a href='settings'><SideBarIcon icon={<BsGearFill size="22" />} text='settings' /></a>
      </div>
    );
  };

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip scale-0 group-hover:scale-100">
        {text}
      </span>
    </div>
  );

export default SideBar;