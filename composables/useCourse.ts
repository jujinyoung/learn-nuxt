import type { CourseWithPath } from '~/types/course';

interface UseCourseReturn {
  course: Maybe<CourseWithPath>;
  prevCourse: Maybe<CourseWithPath>;
  nextCourse: Maybe<CourseWithPath>;
}

export const useCourse = (courseSlug: string): UseCourseReturn => {
  const { courses } = useCourses();
  // const course = courses.find((course) => course.courseSlug === courseSlug);
  const index = courses.findIndex((course) => course.courseSlug === courseSlug);
  const course = courses[index];
  const prevCourse = index <= 0 ? null : courses[index - 1];
  const nextCourse = index >= courses.length - 1 ? null : courses[index + 1];
  return { course, prevCourse, nextCourse };
};