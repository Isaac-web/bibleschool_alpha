const formatEnrollment = (enrollment) => {
  return {
    courseId: enrollment.course,
    coveredModules: enrollment.coveredModules,
    currentModule: enrollment.currentModule,
    imageUri: enrollment.imageUri,
    status: enrollment.status,
    title: enrollment.title,
    userId: enrollment.user,
    progress: enrollment.progress,
  };
};

export const setEnrollment = (enrollment) => {
  enrollment = formatEnrollment(enrollment);
  localStorage.setItem("enrollment", JSON.stringify(enrollment));
};

export const getEnrollment = () => {
  const enrollment = localStorage.getItem("enrollment");
  return JSON.parse(enrollment);
};

export const clearEnrollment = () => {
  localStorage.removeItem("enrollment");
};
