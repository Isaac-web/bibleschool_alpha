const adminList = [
    {_id: "1", name: "Admin One", status: "Status"},
    {_id: "2", name: "Admin Two", status: "Status"},
]


const admins = (state = [...adminList], action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default admins;