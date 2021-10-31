const coordinatorList = [
    {_id: "1", name: "Coordinator One", status: "Status"},
    {_id: "2", name: "Coordinator Two", status: "Status"},
    {_id: "3", name: "Coordinator Three", status: "Status"},
    {_id: "4", name: "Coordinator Four", status: "Status"},
    {_id: "5", name: "Coordinator Five", status: "Status"},
    {_id: "6", name: "Coordinator Six", status: "Status"},
    {_id: "7", name: "Coordinator Seven", status: "Status"},
]


const coordinators = (state = [...coordinatorList], action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default coordinators;