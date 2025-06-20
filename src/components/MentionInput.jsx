import React, { useState } from "react";
import { MentionsInput, Mention } from "react-mentions";

const MentionInput = ({ users = [] }) => {
  const [comment, setComment] = useState("");
  const [submittedComments, setSubmittedComments] = useState([]);

  const mentionData = users
    .filter((u) => u && u.id && u.name)
    .map((u) => ({
      id: u.id.toString(),
      display: u.name,
    }));

  const handleSubmit = () => {
    if (comment.trim() !== "") {
      setSubmittedComments([...submittedComments, comment]);
      setComment("");
    }
  };

  return (
    <div style={{ marginTop: 10 }}>
      <MentionsInput
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        style={{
          control: {
            backgroundColor: "#f9f9f9",
            fontSize: 14,
            minHeight: 40,
            borderRadius: 8,
            border: "1px solid #ccc",
            padding: "8px 10px",
            outline: "none",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
            transition: "border-color 0.2s",
          },
          controlFocused: {
            borderColor: "#3b82f6", // blue border on focus
          },
          highlighter: {
            overflow: "hidden",
          },
          input: {
            margin: 0,
          },
        }}
      >
        {mentionData.length > 0 && (
          <Mention
            trigger="@"
            data={mentionData}
            markup="@__display__"
            displayTransform={(id, display) => `@${display}`}
          />
        )}
      </MentionsInput>

      <button
        onClick={handleSubmit}
        style={{
          marginTop: 8,
          padding: "6px 12px",
          fontSize: 14,
          backgroundColor: "#3b82f6",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
      >
        Add Comment
      </button>

      <div style={{ marginTop: 10 }}>
        {submittedComments.map((c, idx) => (
          <div
            key={idx}
            style={{
              padding: "6px 10px",
              borderBottom: "1px solid #eee",
              fontSize: 13,
              color: "#333",
            }}
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentionInput;
