import React from 'react'
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { FileCopy } from "@mui/icons-material";
import { Save } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import { saveFile } from "../../actions/Coordinator/currentModule";

const FileListItem = ({ title, file }) => {
  const dispatch = useDispatch();
  const { data: currentModule } = useSelector((state) => state.currentModule);

  const handleSaveFile = () => {
    dispatch(saveFile(currentModule._id, file));
  };

  return (
    <ListItem
      style={{
        borderRadius: 10,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        margin: "10px 0",
      }}
    >
      <ListItemAvatar>
        <FileCopy style={{ color: "grey" }} />
      </ListItemAvatar>
      <ListItemText primary={currentModule?.file?.name} />

      <ListItemSecondaryAction>
        <IconButton onClick={handleSaveFile} style={{ marginTop: 30 }}>
          <Save />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default FileListItem
