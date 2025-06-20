import React from "react";
import { Tooltip } from "@mui/material";

const AuthorTooltip = ({ author, children }) => {
  if (!author) return children;

  return (
    <Tooltip
      title={
        <div>
          <div>📞 {author.phone}</div>
          <div>🌐 {author.website}</div>
          <div>🏢 {author.company?.name}</div>
        </div>
      }
      arrow
      placement="top"
    >
      <span>{children}</span>
    </Tooltip>
  );
};

export default AuthorTooltip;
