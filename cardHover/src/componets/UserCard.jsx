import React from "react";
import "./UserCard.css";

const UserCard = () => {
  const user = {
    name: "User",
    email: "aman@example.com",
    phone: "+91 98765 43210",
    role: "Frontend Developer",
    city: "Delhi, India",
    company: "Amantech",
    skills: ["React", "Vue", "JavaScript", "CSS", "Tailwind"],
    bio: "Passionate frontend developer who loves building clean UI/UX.",
    avatar: "https://avatars.githubusercontent.com/u/1?v=4"
  };

  return (
    <div className="card-container">
      <div className="mb-img-hover">
        <figure>
          <img src={user.avatar} alt="User Avatar" />
        </figure>
      </div>

      <div className="info">
        <h2>{user.name}</h2>
        <p className="role">{user.role} @ {user.company}</p>
        <p className="city">{user.city}</p>

        <p className="bio">{user.bio}</p>

        <div className="contact">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>

        <div className="skills">
          {user.skills.map((skill, i) => (
            <span key={i} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
