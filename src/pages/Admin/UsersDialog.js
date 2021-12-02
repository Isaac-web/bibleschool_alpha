import React from 'react';
import {InputBase, InputAdornment} from "@mui/material";
import {Search} from "@mui/icons-material";
import {useDispatch} from "react-redux";

import MiniDialog from '../../components/Dialog/MiniDialog';
import UsersList from './UsersList';
import { searchUsers, clearSearchedUsers } from "../../actions/Users/users";

const UsersDialog = ({ open, onClose, onUserSelect, closeAfterSelect }) => {
  const dispatch = useDispatch();

  const handleUsersSearch = ({ target: input }) => {
    if (input.value.trim() === "") return dispatch(clearSearchedUsers());
    dispatch(searchUsers({ query: input.value }));
  };

  const raiseSelect = (user) => {
    if (typeof onUserSelect !== "function")
      return console.error("onUserSelect is not a function.");
    onUserSelect(user);
    if (closeAfterSelect) onClose();
  };

  return (
    <MiniDialog
      open={open}
      Header={
        <InputBase
          autoFocus
          fullWidth
          onChange={handleUsersSearch}
          startAdornment={
            <InputAdornment style={{ marginRight: 10 }}>
              <Search size={30} color="primary" />
            </InputAdornment>
          }
          placeholder="Search by firstname or lastname..."
          style={{ fontSize: 20 }}
        />
      }
      onClose={onClose}
    >
      <UsersList onSelect={raiseSelect} />
    </MiniDialog>
  );
};

export default UsersDialog
