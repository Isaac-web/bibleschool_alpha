import React from 'react';
import {Menu, MenuItem} from "@mui/material";

const AppMenu = ({anchorEl, menu, open, onClose, onItemClick}) => {    
    const handleItemClick = (item) => {
        onItemClick(item);
        onClose();
    }

    return (
      <Menu open={open} anchorEl={anchorEl} onClose={onClose}>
        {menu.map((item, index) => (
          <MenuItem
            key={`${index}_${item.value}`}
            onClick={() => handleItemClick(item.value)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    );
}

export default AppMenu
