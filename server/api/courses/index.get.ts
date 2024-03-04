import {getCourses} from "~/server/models/course";

export default defineEventHandler(() => {
    const courses = getCourses();
    return courses;
});