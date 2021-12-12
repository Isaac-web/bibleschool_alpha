export const setEnrollment = (enrollment) => {
  localStorage.setItem("enrollment", JSON.stringify(enrollment));
};

export const getEnrollment = () => {
  const enrollment = localStorage.getItem("enrollment");
  return JSON.parse(enrollment);
};

export const clearEnrollment = () => {
  localStorage.removeItem("enrollment");
};
