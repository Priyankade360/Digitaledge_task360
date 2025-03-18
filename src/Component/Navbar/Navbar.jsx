import React, { useState, useRef, useEffect } from "react";
import "./Navbar.scss";

import vectorIcon from "../../assets/Vector.svg";
import vectorIcon2 from "../../assets/Vector_unread.svg";
import add1 from "../../assets/add (1).svg";
import openArrowIcon from "../../assets/down_arrow.svg";
import closedArrowIcon from "../../assets/side-arrow.svg";
import avijeet from "../../assets/avijeet.png";
import jayanta from "../../assets/jayanta.png";
import sucharita from "../../assets/sucharita.png";
import sucharitaprofile from "../../assets/sucharita1.png";
// Projects
import apple from "../../assets/Apple.png";
import adidas from "../../assets/Adidas.png";
import starbucks from "../../assets/Starbucks.png";
import crocs from "../../assets/Crocs.png";
import chanel from "../../assets/Chanel.png";
import pizzahut from "../../assets/PizzaHut.png";
// teams
import teams from "../../assets/teams.svg";
import teamsitem from "../../assets/teams.svg";
// channels
import lock from "../../assets/Lock.svg";
import hash from "../../assets/Hash.svg";
// plusicon
import plusIcon from "../../assets/add.svg";
// companyLogo
import companyLogo from "../../assets/360tasklogo.svg";
// profile-avatar
import profileavatar from "../../assets/image.svg";
// profilenameArrow
import profilenameArrow from "../../assets/profile-add.png";
import { useNavigate } from "react-router-dom";

const initialUsers = [
  { name: "Abhijeet Das", avatar: avijeet, status: "online", unread: true },
  { name: "Jayanta Mahato", avatar: jayanta, status: "online", unread: true },
  {
    name: "Sucharita Paul",
    avatar: sucharita,
    status: "online",
    unread: false,
  },
  { name: "Abhijeet Das", avatar: avijeet, status: "online", unread: true },
  { name: "Jayanta Mahato", avatar: jayanta, status: "online", unread: true },
  {
    name: "Sucharita Paul",
    avatar: sucharita,
    status: "online",
    unread: false,
  },
];
// Initial project data
const initialProjects = [
  { name: "Pizza Hut", icon: pizzahut },
  { name: "Chanel", icon: chanel },
  { name: "Starbucks", icon: starbucks },
];

// Initial teams data
const initialTeams = [
  { name: "App-Development", icon: teams },
  { name: "General", icon: teams },
  { name: "Development", icon: teams },
];

// Initial channels data
const initialChannels = [
  { name: "App-DeActivevelopment", locked: true },
  { name: "General", locked: false },
  { name: "Development", locked: true },
];

const Navbar = ({
  onTaskClick,
  onProjectClick,
  onchatClick,
  onScreenSelect,
}) => {
  //     <Navbar
  //     onTaskClick={() => navigate("/task")}
  //     onProjectClick={() => navigate("/project")}
  //     onchatClick={() => navigate("/ChatBoard")}
  //   />
  // Toggle states for each section
  const navigate = useNavigate();
  const [isMessageOpen, setIsMessageOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [isTeamsOpen, setIsTeamsOpen] = useState(true);
  const [isChannelsOpen, setIsChannelsOpen] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  const [isProEditing, setIsProEditing] = useState(false);
  const [isTeamEditing, setIsTeamEditing] = useState(false);

  const inputRef = useRef(null);
  const inputproRef = useRef(null);
  const inputteamRef = useRef(null);

  // State variables for dynamic lists
  const [directMessages, setDirectMessages] = useState(initialUsers);
  const [projects, setProjects] = useState(initialProjects);
  const [teams, setTeams] = useState(initialTeams);
  const [channels, setChannels] = useState(initialChannels);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [prosearchQuery, setproSearchQuery] = useState("");
  const [teamsearchQuery, setTeamSearchQuery] = useState("");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllTeams, setShowAllTeams] = useState(false);
  const [showAllChannels, setShowAllChannels] = useState(false);

  const [isprofileOpen, setIsprofileOpen] = useState(false);

  const [activeItem, setActiveItem] = useState(null);
  // Define state in Navbar
  const openChat = (user) => {
    setSelectedChat(user);
    // console.log(user);
  };

  const closeOtherSections = (section) => {
    if (section !== "messages") {
      setIsMessageOpen(false);
    }
  };

  //   const onSelect = (screenName) => {
  //     // onScreenSelect(screenName);
  //   };

  // Toggle functions for each section that close the other sections when opening one
  const handleToggleMessage = () => {
    if (!isMessageOpen) {
      closeOtherSections("messages");
    }
    setIsMessageOpen(!isMessageOpen);
  };

  const handleToggleProjects = () => {
    if (!isOpen) {
      closeOtherSections("projects");
    }
    setIsOpen(!isOpen);
  };

  const handleToggleTeams = () => {
    if (!isTeamsOpen) {
      closeOtherSections("teams");
    }
    setIsTeamsOpen(!isTeamsOpen);
  };

  const handleToggleChannels = () => {
    if (!isChannelsOpen) {
      closeOtherSections("channels");
    }
    setIsChannelsOpen(!isChannelsOpen);
  };
  // Function to load more conversations
  const loadMoreConversations = (e) => {
    if (e) {
      e.preventDefault(); // Prevent default anchor behavior if event exists
    }
    setShowAll(!showAll);
    closeOtherSections("messages");
    if (!showAll) {
      const moreUsers = [
        {
          name: "Rahul Sharma",
          avatar: avijeet,
          status: "offline",
          unread: false,
        },
        {
          name: "Priyanka Roy",
          avatar: sucharita,
          status: "online",
          unread: true,
        },
      ];
      setDirectMessages([...initialUsers, ...moreUsers]);
    } else {
      setDirectMessages(initialUsers);
    }
  };

  const loadMoreProjects = (e) => {
    if (e) {
      e.preventDefault(); // Prevent default anchor behavior if event exists
    }

    setShowAllProjects(!showAllProjects);

    if (!showAllProjects) {
      const moreProjects = [
        {
          name: "Microsoft",
          icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        },
        {
          name: "Google",
          icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        },
        {
          name: "Amazon",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        },
        { name: "Adidas", icon: adidas },
        { name: "Crocs", icon: crocs },
        { name: "Apple", icon: apple },
      ];
      setProjects([...initialProjects, ...moreProjects]);
    } else {
      setProjects(initialProjects);
    }
  };

  const loadMoreTeams = (e) => {
    if (e) {
      e.preventDefault(); // Prevent default anchor behavior if event exists
    }
    setShowAllTeams(!showAllTeams);

    if (!showAllTeams) {
      const moreTeams = [
        { name: "UX-Design", icon: teamsitem },
        { name: "Marketing", icon: teamsitem },
        { name: "Sales", icon: teamsitem },
        { name: "Inernational Projects", icon: teamsitem },
        { name: "Digital Marketing", icon: teamsitem },
        { name: "Wordpress-Development", icon: teamsitem },
      ];
      setTeams([...initialTeams, ...moreTeams]);
    } else {
      setTeams(initialTeams);
    }
  };

  const loadMoreChannels = (e) => {
    if (e) {
      e.preventDefault(); // Prevent default anchor behavior if event exists
    }

    setShowAllChannels(!showAllChannels);

    if (!showAllChannels) {
      const moreChannels = [
        { name: "Announcements", locked: false },
        { name: "Random", locked: false },
        { name: "Tech-Talk", locked: true },
        { name: "International Projects", locked: true },
        { name: "Digital-marketing", locked: false },
        { name: "Wordpress-Development", locked: false },
      ];
      setChannels([...initialChannels, ...moreChannels]);
    } else {
      setChannels(initialChannels);
    }
  };

  const handleClick = () => {
    alert("Search!");
  };

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleSearchComplete = (e) => {
    if (e.key === "Enter") {
      console.log("Searching for:", searchQuery);
      setIsSearching(false); // Hide search input after search
      setSearchQuery(""); // Clear input
    }
  };
  const toggleDropdown = () => {
    setIsprofileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsEditing(false);
      }
    };
    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isEditing]);

  // Filter projects based on search input
  const filteredProjects = projects.filter(
    (project) =>
      typeof project.name === "string" &&
      project.name.toLowerCase().includes(prosearchQuery.toLowerCase())
  );
  const filteredTeams = teams.filter(
    (team) =>
      typeof team.name === "string" &&
      team.name.toLowerCase().includes(teamsearchQuery.toLowerCase())
  );
  const filteredChannels = channels.filter(
    (channel) =>
      typeof channel.name === "string" &&
      channel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleactiveClick = (item) => {
    setActiveItem((prev) => (prev === item ? null : item)); // Update active item
    // onSelect(item);
  };
  return (
    <div className="navbar">
      <div className="navbar-component">
        {/* My Task */}
        <div
          className={`navbar-mytask-box ${
            activeItem === "task" ? "active" : ""
          }`}
          onClick={() => {
            handleactiveClick("task");
            // onSelect("task");
            navigate(`/`);
          }}
        >
          <img src={vectorIcon} alt="" className="mytask-icon" />
          <span className="mytask-text">My Task</span>
        </div>
        {/* Unread */}
        <div
          className={`unread-box ${activeItem === "unread" ? "active" : ""}`}
          onClick={() => handleactiveClick("unread")}
        >
          <img src={vectorIcon2} alt="" className="unread-icon " />
          <span className="unread-text">Unread</span>
        </div>
        {/* Direct Message Section */}
        <div className="direct-message-section">
          <div
            className="header-section"
            onClick={(e) => {
              if (!e.target.closest(".search-box")) {
                handleToggleMessage();
              }
            }}
          >
            {!isSearching ? (
              <>
                <span className="down-arrow">
                  <img
                    src={isMessageOpen ? openArrowIcon : closedArrowIcon}
                    alt="Toggle Icon"
                  />
                </span>
                <span className="text-section">Direct Message</span>
              </>
            ) : (
              <div className="search-box">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  // onKeyDown={handleSearchComplete}
                  autoFocus
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSearchClick(); // Perform search
                    setIsSearching(false); // Immediately close search bar
                  }}
                  className="search-button"
                >
                  <img src={add1} alt="Search" />
                </button>
              </div>
            )}

            {!isSearching && (
              <div className="direct-message-add-button">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Ensure message list stays open
                    setIsSearching(true); // Open search bar
                  }}
                  className="tooltip-button"
                >
                  <img src={add1} alt="Search" />
                </button>
              </div>
            )}
          </div>

          {isMessageOpen && (
            <ul className="direct-message-list" onClick={onchatClick}>
              {directMessages.map((user, index) => (
                <li
                  key={index}
                  className={`direct-message-item ${
                    selectedChat?.name === user.name ? "active-chat" : ""
                  }`}
                  onClick={() => {
                    handleactiveClick(user.name);
                    console.log("User selected:", user);
                    navigate(`/ChatBoard/`);
                    // openChat(user); // Set the selected user
                    // onScreenSelect("ChatBoard", user); // Switch to ChatBoard screen
                  }}
                >
                  <img
                    src={user.avatar}
                    alt={`${user.name}'s avatar`}
                    className="user-avatar"
                  />
                  <span className="user-name">{user.name}</span>
                  {user.status === "online" && (
                    <span className="status-dot"></span>
                  )}
                </li>
              ))}
            </ul>
          )}
          <div className="more-section">
            <a href="#more-conversation" onClick={loadMoreConversations}>
              {!showAll ? "More" : "Less "}
            </a>
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects-section">
          {/* Header Section */}
          <div className="header-section">
            {/* Toggle List Only When Clicking the Arrow */}
            <span
              className="down-arrow"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <img
                src={isOpen ? openArrowIcon : closedArrowIcon}
                alt="Toggle Icon"
              />
            </span>

            {/* Click "Projects" → Turn into a Search Input */}
            <div className="search-wrapper">
              {isProEditing ? (
                <input
                  type="text"
                  ref={inputproRef}
                  className="search-input"
                  placeholder="Search projects..."
                  value={prosearchQuery}
                  onChange={(e) => setproSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setIsProEditing(false); // Exit search mode
                    }
                  }}
                />
              ) : (
                <span
                  className="text-section"
                  onClick={() => setIsProEditing(true)}
                >
                  Projects
                </span>
              )}
            </div>

            {/* Add Project Button */}
            <div className="add-button">
              <button onClick={handleClick} className="projects-add-button">
                <img src={plusIcon} alt="Add" />
              </button>
            </div>
          </div>

          {/* ✅ Project List Always Visible (Toggles Only with Arrow) */}
          {isOpen && (
            <ul className="projects-list" onClick={() => onSelect("projects")}>
              {filteredProjects.map((project, index) => (
                <li
                  key={index}
                  className={`project-item ${
                    activeItem === project.name ? "active-project" : ""
                  }`}
                  onClick={() => {
                    handleactiveClick(project.name); // Mark as active
                    // onSelect("projects"); // Mark "Projects" as selected
                    navigate(`/Project/`);
                  }}
                >
                  <img
                    src={project.icon}
                    alt={`${project.name}'s logo`}
                    className="profile-logo"
                  />
                  <span className="user-name">{project.name}</span>
                </li>
              ))}
            </ul>
          )}

          {/* ✅ More/Less Toggle */}
          <div className="more-section">
            <a
              href="#more-projects"
              onClick={(e) => {
                e.preventDefault();
                setShowAllProjects((prev) => !prev);
                loadMoreProjects();
              }}
            >
              {!showAllProjects ? "More" : "Less"}
            </a>
          </div>
        </div>

        {/* Teams Section */}
        <div className="teams-section">
          {/* Header Section */}
          <div className="header-section">
            {/* Toggle List Only When Clicking the Arrow */}
            <span
              className="down-arrow"
              onClick={() => setIsTeamsOpen((prev) => !prev)}
            >
              <img
                src={isTeamsOpen ? openArrowIcon : closedArrowIcon}
                alt="Toggle Icon"
              />
            </span>

            {/* Click "Teams" → Turns into a Search Input */}
            <div className="search-wrapper">
              {isTeamEditing ? (
                <input
                  type="text"
                  ref={inputteamRef}
                  className="search-input"
                  placeholder="Search teams..."
                  value={teamsearchQuery}
                  onChange={(e) => setTeamSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setIsTeamEditing(false); // Exit search mode
                    }
                  }}
                />
              ) : (
                <span
                  className="text-section"
                  onClick={() => setIsTeamEditing(true)}
                >
                  Teams
                </span>
              )}
            </div>

            {/* Add Team Button */}
            <div className="add-button">
              <button onClick={handleClick} className="teams-add-button">
                <img src={plusIcon} alt="Add" />
              </button>
            </div>
          </div>

          {/* ✅ Teams List Always Visible (Toggles Only with Arrow) */}
          {isTeamsOpen && (
            <ul className="teams-list">
              {filteredTeams.map((team, index) => (
                <li
                  key={index}
                  className={`team-item ${
                    activeItem === team.name ? "active-team" : ""
                  }`}
                  onClick={() => {
                    handleactiveClick(team.name); // Mark as active
                    navigate(`/Teams/`);
                  }}
                >
                  <img
                    src={team.icon}
                    alt={`${team.name} icon`}
                    className="team-icon"
                  />
                  <span className="team-name">{team.name}</span>
                </li>
              ))}
            </ul>
          )}

          {/* ✅ More/Less Toggle */}
          <div className="more-section">
            <a
              href="#more-teams"
              onClick={(e) => {
                e.preventDefault();
                setShowAllTeams((prev) => !prev);
                loadMoreTeams();
              }}
            >
              {!showAllTeams ? "More" : "Less"}
            </a>
          </div>
        </div>

        {/* Channels Section */}
        <div className="channels-section">
          {/* Header Section */}
          <div className="header-section">
            {/* Toggle List Only When Clicking the Arrow */}
            <span
              className="down-arrow"
              onClick={() => setIsChannelsOpen((prev) => !prev)}
            >
              <img
                src={isChannelsOpen ? openArrowIcon : closedArrowIcon}
                alt="Toggle Icon"
              />
            </span>

            {/* Click "Channels" → Turns into a Search Input */}
            <div className="search-wrapper">
              {isEditing ? (
                <input
                  type="text"
                  ref={inputRef}
                  className="search-input"
                  placeholder="Search channels..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setIsEditing(false); // Exit search mode
                    }
                  }}
                />
              ) : (
                <span
                  className="text-section"
                  onClick={() => setIsEditing(true)}
                >
                  Channels
                </span>
              )}
            </div>

            {/* Add Channel Button */}
            <div className="add-button">
              <button onClick={handleClick} className="channels-add-button">
                <img src={plusIcon} alt="Add" />
              </button>
            </div>
          </div>

          {/* ✅ Channels List Always Visible (Toggles Only with Arrow) */}
          {isChannelsOpen && (
            <ul className="channels-list">
              {filteredChannels.map((channel, index) => (
                <li
                  key={index}
                  className={`channel-item ${
                    activeItem === channel.name ? "active-channel" : ""
                  }`}
                  onClick={() => {
                    handleactiveClick(channel.name); // Mark as active
                    navigate(`/Channels/`);
                  }}
                >
                  <img
                    src={channel.locked ? lock : hash}
                    alt=""
                    className="channel-icon"
                  />
                  <span className="channel-name">{channel.name}</span>
                </li>
              ))}
            </ul>
          )}

          {/* ✅ More/Less Toggle */}
          <div className="more-section">
            <a
              href="#more-channels"
              onClick={(e) => {
                e.preventDefault();
                setShowAllChannels((prev) => !prev);
                loadMoreChannels();
              }}
            >
              {!showAllChannels ? "More" : "Less"}
            </a>
          </div>
        </div>
      </div>

      <div className="navbar-footer">
        <div className="footer-company">
          <img src={companyLogo} alt="Company Logo" className="company-logo" />
        </div>

        {/* Profile Section */}
        <div className="footer-profile" onClick={toggleDropdown}>
          <img src={sucharita} alt="Profile" className="profile-avatar" />
          <span className="profile-name">Profile Name</span>
          <span
            className={`profilename-arrow ${isprofileOpen ? "rotated" : ""}`}
          >
            <img src={profilenameArrow} alt="Toggle Dropdown" />
          </span>
        </div>

        {/* Dropdown (Toast) */}
        {isprofileOpen && (
          <div className="profile-dropdown">
            <div className="profile-header">
              <img
                src={sucharitaprofile}
                alt="Profile"
                className="dropdown-avatar"
              />
              <div className="profile-info">
                <span className="profile-name">Profile Name</span>
                <span className="profile-status">
                  <span className="active-status-dot"></span> Active
                </span>
              </div>
            </div>

            <ul className="profile-options">
              <li>
                <strong>
                  <span className="set-yourself">Set yourself as </span>
                  <span className="away-text">away</span>
                </strong>
              </li>
              <li className="toggle-option">
                Notifications{" "}
                <input type="checkbox" className="toggle-switch" />
              </li>
              <li>Profile</li>
              <li>Settings</li>
              <li>Help Center</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
