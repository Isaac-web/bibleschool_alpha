import React, {useState} from 'react';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField} from "@mui/material"
import {Cancel, Save} from "@mui/icons-material";

const Questiondialog = ({open, onClose, onNewQuestion}) => {
    const initialData = {question: "", objectivesString: "", ans: ""};
    const [data, setData] = useState(initialData);

    const clear = () => {
        setData(initialData);
        onClose();
    }

    
    const handleChange = ({target:input}) => {
        setData({...data, [input.name]: input.value})
    }


    const handleSubmit = (e) => {
      console.log(data);
      e.preventDefault();
      const objectivesArray = data.objectivesString.split(",");
      delete data.objectivesString;
      data.objectives = objectivesArray;

      onNewQuestion(data);
      clear();
    }


    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle>
                New Question
            </DialogTitle>

            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <TextField autoFocus name="question" fullWidth label="Question" variant="standard" style={{marginBottom: 10}} value={data.question} onChange={handleChange}/>
                    <TextField name="objectivesString" fullWidth label="Answers (Comma separated)" variant="standard" style={{marginBottom: 10}} value={data.objectivesString} onChange={handleChange}/>
                </DialogContent>

                <DialogActions>
                    <Button variant="outlined" style={{width: 100}} startIcon={<Cancel/>} onClick={clear}>Cancel</Button>
                    <Button variant="contained" style={{width: 100}} endIcon={<Save/>} type="submit">Ok</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default Questiondialog
