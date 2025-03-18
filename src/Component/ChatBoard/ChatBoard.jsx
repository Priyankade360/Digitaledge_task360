import React, { useState, useRef, useEffect } from "react";
import "./ChatBoard.scss";

import divider from "../../assets/divider.png";
import backarrow from "../../assets/backarrow.png";
import send from "../../assets/send.png";
import projectIcon1 from "../../assets/Starbucks.png";
import projectIcon2 from "../../assets/Adidas.png";
import projectIcon3 from "../../assets/Crocs.png";
import plusIcon from "../../assets/plus_send.png";
import textIcon from "../../assets/text.png";
import emojiIcon from "../../assets/emoji.png";
import mentionIcon from "../../assets/mention.png";
import videoIcon from "../../assets/video_icon.png";
import micIcon from "../../assets/microphone.png";
import editIcon from "../../assets/slash_icon.png";
import priyanka from "../../assets/priyanka.png";
const ChatBoard = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  console.log("-----", user);
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (currentMessage.trim() === "") return;

    setMessages([...messages, { sender: " ", text: currentMessage }]);
    setCurrentMessage("");
  };

  const toolbarItems = [
    { id: 1, icon: plusIcon, alt: "Plus", action: () => alert("Plus Clicked") },
    {
      id: 2,
      icon: textIcon,
      alt: "Text Format",
      action: () => alert("Text Format Clicked"),
    },
    {
      id: 3,
      icon: emojiIcon,
      alt: "Emoji",
      action: () => alert("Emoji Clicked"),
    },
    {
      id: 4,
      icon: mentionIcon,
      alt: "Mention",
      action: () => alert("@ Mention Clicked"),
    },
    { id: 5, type: "divider" },
    {
      id: 6,
      icon: videoIcon,
      alt: "Video",
      action: () => alert("Video Clicked"),
    },
    {
      id: 7,
      icon: micIcon,
      alt: "Microphone",
      action: () => alert("Microphone Clicked"),
    },
    { id: 8, type: "divider" },
    { id: 9, icon: editIcon, alt: "Edit", action: () => alert("Edit Clicked") },
  ];
  const tasks = [
    {
      Task_Name: (
        <>
          <input type="checkbox" className="task-checkbox" /> Starbucks - [ APP
          UI ]
        </>
      ),
      date: "2025-04-02",
      status: "Pending",
      priority: "Urgent",
      Project: (
        <>
          <img src={projectIcon1} alt=" " className="chat-table-icon" />{" "}
          Starbucks
        </>
      ),
      Due_Date: "04 FEB 2025",
    },
    {
      Task_Name: (
        <>
          <input type="checkbox" className="task-checkbox" /> Starbucks - [ APP
          UI ]
        </>
      ),
      date: "2025-04-02",
      status: "Pending",
      priority: "High",
      Project: (
        <>
          <img src={projectIcon2} alt=" " className="chat-table-icon" /> Adidas
        </>
      ),
      Due_Date: "04 FEB 2025",
    },
    {
      Task_Name: (
        <>
          <input type="checkbox" className="task-checkbox" /> Starbucks - [ APP
          UI ]
        </>
      ),
      date: "2025-04-02",
      status: "Pending",
      priority: "Medium",
      Project: (
        <>
          <img src={projectIcon3} alt=" " className="chat-table-icon" /> Crocs
        </>
      ),
      Due_Date: "04 FEB 2025",
    },
    {
      Task_Name: (
        <>
          <input type="checkbox" className="task-checkbox" /> Starbucks - [ APP
          UI ]
        </>
      ),
      date: "2025-04-02",
      status: "Pending",
      priority: "Low",
      Project: (
        <>
          <img src={projectIcon1} alt=" " className="chat-table-icon" />{" "}
          Starbucks
        </>
      ),
      Due_Date: "04 FEB 2025",
    },
  ];

  // Function to get priority color
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
  return (
    <div className="chat-container">
      <div className="chat-body">
        {/* Chat Header (Just a Div) */}
        <div className="chat-header">
          <img src={priyanka} alt=" " className="chat-user-avatar" />
          <h2>Priyanka </h2>
        </div>

        {/* Messages Rendering */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${
              msg.sender.trim() === "" ? "sent" : "received"
            }`}
          >
            <strong>{msg.sender}</strong> {msg.text}
          </div>
        ))}

        {/* Empty div to auto-scroll to the latest message */}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="chat-input-section">
        <div>
          <textarea
            className="chat-input"
            placeholder="Write Something here"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
        </div>
        <div className="submit">
          <div className="toolbar">
            {toolbarItems.map((item) =>
              item.type === "divider" ? (
                <div key={item.id} className="divider"></div>
              ) : (
                <button
                  key={item.id}
                  className="toolbar-btn"
                  onClick={item.action}
                >
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="toolbar-icon"
                  />
                </button>
              )
            )}
          </div>
          <button type="submit" className="send-button">
            <img src={send} alt=" " className="send-icon" />
            <img src={divider} alt=" " className="divider" />
            <img src={backarrow} alt=" " className=" backarrow" />
          </button>
        </div>
      </form>
      <div className="right-panel">
        {/* <h4>Assigned by Abhijeet</h4> */}
        <table className="chat-table">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Project</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.Task_Name}</td>
                  <td>{task.status}</td>
                  <td>{task.Due_Date}</td>
                  <td>{task.Project}</td>
                  <td>
                    <span
                      className="priority-dot"
                      style={{
                        backgroundColor: getPriorityColor(task.priority),
                      }}
                    ></span>
                    {task.priority}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No tasks available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChatBoard;
