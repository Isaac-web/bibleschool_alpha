import React, {useState, useEffect} from 'react';
import {Avatar, Button, List, ListItem, ListItemText, ListItemAvatar, 
        ListItemSecondaryAction, Typography} from '@mui/material';
import {useSelector, useDispatch} from "react-redux";
import {makeStyles} from "@mui/styles";



import SearchInput from '../../components/SearchInput';
import {fetchAdmins, removeAdmin} from "../../actions/Admin/admins";
import Loading from '../../components/Loading';
import AppSnackbar from '../../components/AppSnackbar';
import * as authService from "../../services/userServices";

const AdminList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { data, loading } = useSelector((state) => state.admins);
  const [searchResults, setSearchResults] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    color: "",
  });

  const mapToViewModel = (data) => {
    return data.map((item) => {
      const name = `${item?.firstname} ${item?.lastname}`;
      if (!item) return;

      item.name = name;
      return item;
    });
  };

  const admins = mapToViewModel(data);

  const formatText = (text) => {
    return text.trim().toLowerCase();
  };

  const notify = (message, color) => {
    setSnackbar({ ...snackbar, open: true, message, color });
  };

  const handleRemove = (id) => {
    dispatch(removeAdmin(id, notify));
  };

  const handleSearch = (item) => {
    const results = admins.filter((c) =>
      formatText(c.name).includes(formatText(item))
    );
    setSearchResults(results);
  };

  useEffect(() => {
    dispatch(fetchAdmins());
  }, []);

  if (loading) return <Loading />;

  const finalData = searchResults.length ? searchResults : admins;

  const user = authService.getCurrentUser();
  return (
    <>
      <Typography variant="h4">Admins</Typography>
      <SearchInput placeholder="Search admins..." onChange={handleSearch} />
      <List>
        {finalData.map((item) => {
          if (!item) return;

          return (
            <ListItem key={item._id} divider>
              <ListItemAvatar>
                <Avatar src={item.profilePic} />
              </ListItemAvatar>
              <ListItemText primary={item?.name} secondary={item.status} />
              <ListItemSecondaryAction>
                {user._id !== item._id && (
                  <Button
                    className={classes.button}
                    onClick={() => handleRemove(item._id)}
                    size="small"
                    style={{ textTransform: "none", color: "rgba(255, 80, 1)" }}
                  >
                    Remove
                  </Button>
                )}
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>

      <AppSnackbar
        open={snackbar.open}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
        color={snackbar.color}
      />
    </>
  );
};




const useStyles = makeStyles(theme => ({
    button: {
        textTransform: "none", 
    }
}))

export default AdminList
