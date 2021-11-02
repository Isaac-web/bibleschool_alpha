export default (text) => {
    if(typeof text !== "string") return;
    return text.trim().toLowerCase();
}