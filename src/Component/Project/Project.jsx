import React, { useState } from "react";
import "./Project.scss";

import searchIcon from "../../assets/search.svg";
import settingsIcon from "../../assets/settingsIcon.svg";
import filterIcon from "../../assets/filter.svg";
import checkIcon from "../../assets/teenyicons_tick-circle-solid.svg";
import cross_icon from "../../assets/cross_icon.svg";
import assignedIcon_P from "../../assets/P_icon.svg";
import assignedIcon_I from "../../assets/I_icon.svg";
import projectIcon1 from "../../assets/Starbucks.png";
import projectIcon2 from "../../assets/Adidas.png";
import projectIcon3 from "../../assets/Crocs.png";
import projectIcon4 from "../../assets/PizzaHut.png";
import subtaskIcon from "../../assets/subtask_icon.svg";
import sidearrow from "../../assets/taskpanel_visible_arrow.svg";
import starbucks from "../../assets/Starbucks.png";

import abhijeet_avatar from "../../assets/abhijeet_avatar.svg";
import R_avatar from "../../assets/R_avatar.svg";
import avatar_3 from "../../assets/avatar_3.svg";
import avatar_4 from "../../assets/avatar_4.svg";
import calendarIcon from "../../assets/calender_icon.svg";
import attachmentIcon from "../../assets/attachment_icon.svg";
import sendbutton from "../../assets/tabler_send.svg";
import suchartita from "../../assets/sucharita1.png";
import jayanta from "../../assets/jayanta.png";
import priyanka from "../../assets/priyanka.png";
import avatarP from "../../assets/P_avatar.svg";
const tasksData = [
  {
    tasks: [
      {
        Task_Name: "Starbucks - [ APP UI ]",
        Status: "Pending",
        Due_Date: "04 FEB 2025",
        Collaborators: "R +3",
        Priority: "High",
        Project: (
          <>
            <img src={projectIcon1} alt=" " className="project-icon" />{" "}
            Starbucks
          </>
        ),
        Assigned_By: (
          <img src={assignedIcon_P} alt=" " className="assigned-icon" />
        ),
        Created_on: "04 FEB 2025",
        Description: "Lorem Ipsum is simply dummy text...",
        Assignee: "Priyanka Roy",
        Assigned: (
          <>
            <img src={avatarP} alt=" " className="project-icon" />{" "}
          </>
        ),
      },
      {
        Task_Name: "Starbucks - [ Content Creation ]",
        Status: "Completed ",
        Due_Date: "04 FEB 2025",
        Collaborators: "R",
        Priority: "Urgent",
        Project: (
          <>
            <img src={projectIcon2} alt=" " className="project-icon" /> Adidas
          </>
        ),
        Assigned_By: (
          <img src={assignedIcon_P} alt=" " className="assigned-icon" />
        ),
        Assigned_By: (
          <img src={assignedIcon_I} alt=" " className="assigned-icon" />
        ),
        Created_on: "04 FEB 2025",
        Description: "Lorem Ipsum is simply dummy text...",
        Assignee: "Sucharita Saha",
        Assigned: (
          <>
            <img src={avatarP} alt=" " className="project-icon" />
          </>
        ),
      },
      {
        Task_Name: "Starbucks - [ Frontend Development ]",
        Status: "Overdue",
        Due_Date: "04 FEB 2025",
        Collaborators: "R",
        Priority: "Medium",
        Project: (
          <>
            <img src={projectIcon3} alt=" " className="project-icon" /> Crocs
          </>
        ),
        Assigned_By: (
          <img src={assignedIcon_P} alt=" " className="assigned-icon" />
        ),
        Assigned_By: (
          <img src={assignedIcon_P} alt=" " className="assigned-icon" />
        ),
        Created_on: "04 FEB 2025",
        Description: "Lorem Ipsum is simply dummy text...",
        Assignee: "Priyanka Roy",
        Assigned: (
          <>
            <img src={avatarP} alt=" " className="project-icon" />{" "}
          </>
        ),
      },
      {
        Task_Name: "Starbucks - [ Backend Development ]",
        Status: "Ongoing",
        Due_Date: "04 FEB 2025",
        Collaborators: "R +4",
        Priority: "Low",
        Project: (
          <>
            <img src={projectIcon4} alt=" " className="project-icon" /> Pizza
            Hut
          </>
        ),
        Assigned_By: (
          <img src={assignedIcon_P} alt=" " className="assigned-icon" />
        ),
        Assigned_By: (
          <img src={assignedIcon_P} alt=" " className="assigned-icon" />
        ),
        Created_on: "04 FEB 2025",
        Description: "Lorem Ipsum is simply dummy text...",
        Assignee: "Sucharita Saha",
        Assigned: (
          <>
            <img src={avatarP} alt=" " className="project-icon" />{" "}
          </>
        ),
      },
      {
        Task_Name: "Starbucks - [ APP UI ]",
        Status: "Pending",
        Due_Date: "04 FEB 2025",
        Collaborators: "R +3",
        Priority: "High",
        Project: (
          <>
            <img src={projectIcon1} alt=" " className="project-icon" />{" "}
            Starbucks
          </>
        ),
        Assigned_By: (
          <img src={assignedIcon_P} alt=" " className="assigned-icon" />
        ),
        Created_on: "04 FEB 2025",
        Description: "Lorem Ipsum is simply dummy text...",
        Assignee: "Priyanka Roy",
        Assigned: (
          <>
            <img src={avatarP} alt=" " className="project-icon" />{" "}
          </>
        ),
      },
      {
        Task_Name: "Starbucks - [ Content Creation ]",
        Status: "Completed ",
        Due_Date: "04 FEB 2025",
        Collaborators: "R",
        Priority: "Urgent",
        Project: (
          <>
            <img src={projectIcon2} alt=" " className="project-icon" /> Adidas
          </>
        ),
        Assigned_By: (
          <img src={assignedIcon_P} alt=" " className="assigned-icon" />
        ),
        Assigned_By: (
          <img src={assignedIcon_I} alt=" " className="assigned-icon" />
        ),
        Created_on: "04 FEB 2025",
        Description: "Lorem Ipsum is simply dummy text...",
        Assignee: "Sucharita Saha",
        Assigned: (
          <>
            <img src={avatarP} alt=" " className="project-icon" />
          </>
        ),
      },
      {
        Task_Name: "Starbucks - [ Frontend Development ]",
        Status: "Overdue",
        Due_Date: "04 FEB 2025",
        Collaborators: "R",
        Priority: "Medium",
        Project: (
          <>
            <img src={projectIcon3} alt=" " className="project-icon" /> Crocs
          </>
        ),
        Assigned_By: (
          <img src={assignedIcon_P} alt=" " className="assigned-icon" />
        ),
        Assigned_By: (
          <img src={assignedIcon_P} alt=" " className="assigned-icon" />
        ),
        Created_on: "04 FEB 2025",
        Description: "Lorem Ipsum is simply dummy text...",
        Assignee: "Priyanka Roy",
        Assigned: (
          <>
            <img src={avatarP} alt=" " className="project-icon" />{" "}
          </>
        ),
      },
      {
        Task_Name: "Starbucks - [ Backend Development ]",
        Status: "Ongoing",
        Due_Date: "04 FEB 2025",
        Collaborators: "R +4",
        Priority: "Low",
        Project: (
          <>
            <img src={projectIcon4} alt=" " className="project-icon" /> Pizza
            Hut
          </>
        ),
        Assigned_By: (
          <img src={assignedIcon_P} alt=" " className="assigned-icon" />
        ),
        Assigned_By: (
          <img src={assignedIcon_P} alt=" " className="assigned-icon" />
        ),
        Created_on: "04 FEB 2025",
        Description: "Lorem Ipsum is simply dummy text...",
        Assignee: "Sucharita Saha",
        Assigned: (
          <>
            <img src={avatarP} alt=" " className="project-icon" />{" "}
          </>
        ),
      },
    ],
  },
];

const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case "urgent":
      return "red";
    case "high":
      return "orange";
    case "medium":
      return "yellow";
    case "low":
      return "lightgray";
    default:
      return "gray";
  }
};

const Project = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [selectedTask, setSelectedTask] = useState({
    Assignee: "Priyanka Roy",
  });
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedMarks, setSelectedMarks] = useState([]);
  const [openTaskIndex, setOpenTaskIndex] = useState(null);
  const [comments, setComments] = useState({}); // Store comments per task
  const [newComment, setNewComment] = useState("");

  const filteredTasks = tasksData[0].tasks.filter((task) =>
    task.Task_Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsSearching(false);
    }
  };

  const openTaskDetails = (task) => {
    setSelectedTask(task);
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    setSelectedTask(null);
  };
  const toggleMark = (idx) => {
    setSelectedMarks((prev) =>
      prev.includes(idx) ? prev.filter((id) => id !== idx) : [...prev, idx]
    );
  };
  // Update selectedTask state to remove Assignee
  const handleRemoveAssignee = () => {
    setSelectedTask((prevTask) => ({
      ...prevTask,
      Assignee: null,
    }));
  };
  const toggleTaskDetails = (index) => {
    setOpenTaskIndex(openTaskIndex === index ? null : index); // Toggle open/close
  };
  const handleTaskClick = (task, index) => {
    setSelectedTask(task); // Update selected task
    setOpenTaskIndex(openTaskIndex === index ? null : index);
    setOpenTaskIndex(index); // Open the panel
  };
  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    setComments((prevComments) => ({
      ...prevComments,
      [selectedTask.Task_Name]: [
        ...(prevComments[selectedTask.Task_Name] || []),
        { text: newComment, time: new Date().toLocaleTimeString() },
      ],
    }));

    setNewComment(""); // Clear input after adding
  };
  return (
    <div className="task-page">
      <div className="task-header">
        {isSearching ? (
          <div className="search-bar-expanded">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input-expanded"
              autoFocus
              placeholder="Search tasks..."
            />
            <button
              className="close-search-btn"
              onClick={() => setIsSearching(false)}
            >
              <img src={cross_icon} alt=" " className="close-icon-img" />
            </button>
          </div>
        ) : (
          <div className="task-icons">
            <div className="left-icons">
              <img src={filterIcon} alt="Filter" className="filter-box-icon" />
            </div>
            <div className="right-icons">
              <div
                className="search-icon-wrapper"
                onClick={() => setIsSearching(true)}
              >
                <img
                  src={searchIcon}
                  alt="Search"
                  className="search-box-icon"
                />
              </div>
              {/* Settings Icon (Newly Added) */}
              <div className="settings-icon-wrapper">
                <img
                  src={settingsIcon}
                  alt="Settings"
                  className="settings-icon"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <table className="task-table">
        <thead>
          <tr>
            {/* Mark icon column */}
            <th>Task Name</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Collaborators</th>
            <th>Priority</th>
            <th>Projects</th>
            <th>Assigned By</th>
            <th>Created on</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, idx) => (
              <tr key={idx}>
                <td
                  onClick={() => toggleTaskDetails(idx)}
                  className="clickable-task"
                >
                  {/* SVG Checkmark Icon */}
                  <img
                    src={checkIcon}
                    alt=" "
                    className="mark-icon"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent opening task details
                      toggleMark(idx);
                    }}
                    style={{
                      filter: selectedMarks.includes(idx)
                        ? "invert(23%) sepia(99%) saturate(2843%) hue-rotate(206deg) brightness(93%) contrast(92%)"
                        : "grayscale(100%)",
                    }}
                  />
                  {task.Task_Name}

                  {(idx === 2 || idx === 3 || idx === 6) && (
                    <span className="subtask-container">
                      <span className="subtask-number">
                        {idx === 2 ? 2 : 3}
                        {/* {idx === 0 ? 1 : idx === 2 ? 2 : 3} */}
                      </span>
                      <img src={subtaskIcon} alt=" " className="subtask-icon" />
                    </span>
                  )}
                  <span
                    className={`task-arrow ${
                      openTaskIndex === idx ? "active" : ""
                    }`}
                    onMouseEnter={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTaskDetails(idx);
                    }}
                  >
                    <img src={sidearrow} alt="Arrow" />
                  </span>
                </td>
                <td>{task.Status}</td>
                <td className={task.Status === "Overdue" ? "overdue-date" : ""}>
                  {task.Due_Date}
                </td>
                <td className="collaborators-cell">
                  <div className="collaborators-container">
                    {idx === 0 && (
                      <>
                        <img
                          src={abhijeet_avatar}
                          alt=" "
                          className="collaborator-avatar"
                        />
                        <img
                          src={R_avatar}
                          alt=" "
                          className="collaborator-avatar"
                        />
                        <img
                          src={avatar_3}
                          alt=" "
                          className="collaborator-avatar"
                        />
                      </>
                    )}
                    {idx === 1 && (
                      <>
                        <img
                          src={R_avatar}
                          alt=" "
                          className="collaborator-avatar"
                        />
                        <img
                          src={avatar_4}
                          alt=" "
                          className="collaborator-avatar"
                        />
                      </>
                    )}
                    {idx === 2 && (
                      <>
                        <img
                          src={R_avatar}
                          alt=" "
                          className="collaborator-avatar"
                        />
                        <img
                          src={abhijeet_avatar}
                          alt=" "
                          className="collaborator-avatar"
                        />
                        <img
                          src={avatar_4}
                          alt=" "
                          className="collaborator-avatar"
                        />
                      </>
                    )}
                    {idx === 3 && (
                      <>
                        <img
                          src={abhijeet_avatar}
                          alt=" "
                          className="collaborator-avatar"
                        />
                        <img
                          src={avatar_3}
                          alt=" "
                          className="collaborator-avatar"
                        />
                      </>
                    )}
                    {idx === 4 && (
                      <>
                        <img
                          src={abhijeet_avatar}
                          alt=" "
                          className="collaborator-avatar"
                        />
                        <img
                          src={R_avatar}
                          alt=" "
                          className="collaborator-avatar"
                        />
                      </>
                    )}
                    {idx === 5 && (
                      <>
                        <img
                          src={abhijeet_avatar}
                          alt=" "
                          className="collaborator-avatar"
                        />
                        <img
                          src={avatar_3}
                          alt=" "
                          className="collaborator-avatar"
                        />
                      </>
                    )}
                    {idx === 6 && (
                      <>
                        <img
                          src={abhijeet_avatar}
                          alt=" "
                          className="collaborator-avatar"
                        />
                        <img
                          src={R_avatar}
                          alt=" "
                          className="collaborator-avatar"
                        />
                        <img
                          src={avatar_3}
                          alt=" "
                          className="collaborator-avatar"
                        />
                      </>
                    )}
                    {idx === 7 && (
                      <>
                        <img
                          src={R_avatar}
                          alt=" "
                          className="collaborator-avatar"
                        />
                        <img
                          src={avatar_3}
                          alt=" "
                          className="collaborator-avatar"
                        />
                      </>
                    )}
                  </div>
                </td>

                <td>
                  <span
                    className="priority-dot"
                    style={{ backgroundColor: getPriorityColor(task.Priority) }}
                  ></span>
                  {task.Priority}
                </td>
                <td>{task.Project}</td>
                <td>{task.Assigned_By}</td>
                <td>{task.Created_on}</td>
                <td>{task.Description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="no-tasks">
                No tasks found
              </td>
            </tr>
          )}
          {/* ✅ Add "Add Tasks..." row at the bottom */}
          <tr className="add-task-row">
            <td colSpan="10" className="add-task-cell">
              <span className="add-task-text">Add Tasks...</span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Sliding Panel for Task Details */}
      <div
        className={`task-details-panel ${openTaskIndex !== null ? "open" : ""}`}
      >
        <div className="header-container">
          <div className="header-left">
            <img src={checkIcon} alt="Complete" className="mark-icon" />
            <span className="header-text">Complete</span>
          </div>
          <div className="header-right">
            <img src={attachmentIcon} alt="Lock" className="header-icon" />
            <img src={subtaskIcon} alt="Share" className="header-icon" />
          </div>
        </div>

        {/* Task Details */}
        <div className="task-details-container">
          <div className="task-details-content">
            {selectedTask ? (
              <>
                {/* Task Name */}
                <h2>
                  {selectedTask.Task_Name || "Lorem Ipsum is simply dummy text"}
                </h2>

                {/* Assignee & Collaborators Row */}
                <div className="task-row">
                  {/* Assignee Section */}
                  <div className="task-column">
                    <span className="task-label">Assignee</span>
                    <div className="assignee-box">
                      {selectedTask.Assignee ? (
                        <>
                          <img
                            src={priyanka}
                            alt="User"
                            className="assignee-avatar"
                          />
                          <span className="assignee-name">
                            {selectedTask.Assignee}
                          </span>
                          <button
                            className="clear-assignee"
                            onClick={() => handleRemoveAssignee()}
                          >
                            ✖
                          </button>
                        </>
                      ) : (
                        <span className="no-assignee">Not Assigned</span>
                      )}
                    </div>
                  </div>

                  {/* Collaborators Section */}
                  <div className="task-column">
                    <span className="task-label">Collaborators</span>
                    <div className="collaborators-box">
                      <img
                        src={abhijeet_avatar}
                        alt=" "
                        className="collaborator-avatar"
                      />
                      <img
                        src={suchartita}
                        alt=" "
                        className="collaborator-avatar"
                      />
                      <img
                        src={jayanta}
                        alt=" "
                        className="collaborator-avatar"
                      />
                      <button className="add-collaborator">+</button>
                    </div>
                  </div>
                </div>

                {/* Due Date & Project Row */}
                <div className="task-row">
                  <div className="task-column">
                    <span className="label">Due Date</span>
                    <div className="due-date-box">
                      <img
                        src={calendarIcon}
                        alt="Calendar"
                        className="calendar-icon"
                      />
                      <span className="due-date-value">
                        {selectedTask.Due_Date || "04 FEB 2025"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Row */}
                <div className="task-row">
                  <div className="task-column">
                    <span className="label">Projects</span>
                    <div className="project-box">
                      <img
                        src={starbucks}
                        alt="projects"
                        className="project-icon"
                      />
                      <span className="project-section">
                        {selectedTask.Project || "Starbucks"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dependencies Row */}
                <div className="task-row">
                  <div className="task-column full-width">
                    <span className="label">Dependencies</span>
                    <div className="dependencies-box">
                      <div className="dependency-item">
                        <img
                          src={selectedTask.avatar || priyanka}
                          alt=" "
                          className="collaborator-avatar"
                        />
                        <span className="dependencies">
                          {selectedTask.Dependencies ||
                            "Starbucks Graphic Design"}
                        </span>
                        <span className="due-date">
                          <img
                            src={calendarIcon}
                            alt="Calendar"
                            className="calendar-icon"
                          />
                          {selectedTask.Due_Date || "04 FEB 2025"}
                        </span>
                        <span className="status pending">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Row */}
                <div className="task-row">
                  <div className="task-column full-width">
                    <span className="task-description-label">Description</span>
                    {/* <p className="task-description">{selectedTask.Description || "No Description Available"}</p> */}
                  </div>
                </div>
              </>
            ) : (
              <p className="no-task-selected">No Task Selected</p>
            )}
          </div>
          {/* Comment Box */}
          <div className="comment-section">
            <textarea
              type="text"
              placeholder="Add a comment"
              className="comment-input"
              onClick={(e) => e.target.focus()}
            />
          </div>
          <div className="chat-section">
            {/* Input Box for New Comments */}
            <div className="chat-input-container">
              <input
                type="text"
                className="chat-input"
                placeholder="Type Here.."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
              />
              <button className="send-comment" onClick={handleAddComment}>
                <img src={sendbutton} alt=" " className="send-icon" />
              </button>
            </div>

            {/* Render Comments BELOW the Input Box */}
            {/* Render Comments BELOW the Input Box */}
            <div className="chat-messages">
              {comments[selectedTask?.Task_Name]
                ?.slice()
                .reverse()
                .map((comment, idx) => (
                  //             <div key={idx} className="chat-message">
                  //               <img src={priyanka} alt=" " className="collaborator-avatar" />
                  //   <span className="comment-text">{comment.text}</span>
                  //   <span className="comment-time">{comment.time}</span>

                  // </div>
                  <div className="comment">
                    <img src={priyanka} alt=" " className="comment-avatar" />
                    {/* {console.log(newComment2) */}
                    {/* } */}
                    <div className="comment-content">
                      <div className="comment-header">
                        <span className="comment-name">Priyanka Roy</span>
                        <span className="comment-time">{comment.time}</span>
                      </div>
                      <p className="comment-text">{comment.text}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="subtask-title">Subtasks</div>
        {/* Collaborators Section */}
        <div className="taskpanel-subtask-table">
          <table className="subtask-table">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Assigned</th>
                <th>Collaborators</th>
                <th>Priority</th>
                <th>Projects</th>
                <th>Created on</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.length > 0 ? (
                filteredTasks.slice(0, 4).map((task, idx) => (
                  <tr key={idx}>
                    {/* Task Name */}
                    <td>
                      <img
                        src={checkIcon}
                        alt=" "
                        className="mark-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMark(idx);
                        }}
                        style={{
                          filter: selectedMarks.includes(idx)
                            ? "invert(23%) sepia(99%) saturate(2843%) hue-rotate(206deg) brightness(93%) contrast(92%)"
                            : "grayscale(100%)",
                        }}
                      />
                      {task.Task_Name}
                    </td>

                    {/* Status */}
                    <td className="status-cell">Pending</td>

                    {/* Due Date */}
                    <td className="Due_Date-cell">04 FEB 2025</td>

                    {/* Assigned */}
                    <td className="Assigned-cell">
                      <img
                        src={avatarP}
                        alt=" "
                        className="collaborator-avatar"
                      />
                    </td>

                    {/* Collaborators */}
                    <td className="collaborators-cell">
                      <div className="collaborators-container">
                        {[
                          [abhijeet_avatar, R_avatar, avatar_3], // idx 0
                          [R_avatar, avatar_4], // idx 1
                          [R_avatar, abhijeet_avatar, avatar_4], // idx 2
                          [abhijeet_avatar, avatar_3], // idx 3
                        ][idx].map((imgSrc, i) => (
                          <img
                            key={i}
                            src={imgSrc}
                            alt=" "
                            className="collaborator-avatar"
                          />
                        ))}
                      </div>
                    </td>

                    {/* Priority */}
                    <td>
                      <span
                        className="priority-dot"
                        style={{
                          backgroundColor: getPriorityColor(task.Priority),
                        }}
                      ></span>
                      {task.Priority}
                    </td>

                    {/* Project */}
                    <td className="project-cell">
                      <div className="project-container">
                        <img
                          src={projectIcon1}
                          alt=" "
                          className="project-icon"
                        />{" "}
                        Starbucks
                      </div>
                    </td>

                    {/* Created On */}
                    <td className="Created_on-cell">04 FEB 2025</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="no-tasks">
                    No tasks found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Project;
