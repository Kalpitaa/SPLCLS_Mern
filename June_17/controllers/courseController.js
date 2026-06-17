import courses from "../data/courses.js";

export const getCourses = (req, res) => {
  res.status(200).json(courses);
};