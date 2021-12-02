export const getAllCourses = () =>  async dispatch => {
    const data = [
        {_id: "1", title: "Course One", imageUri: ""},
        {_id: "2", title: "Course Two", imageUri: ""},
        {_id: "3", title: "Course Three", imageUri: ""},
        {_id: "4", title: "Course Four", imageUri: ""},
        {_id: "5", title: "Course Five", imageUri: ""},
    ];
    
    dispatch({type: "FETCH_COURSES", payload: data});
};