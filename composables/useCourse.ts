import type { CourseReturn } from '~/types/course';

export const useCourse = (courseSlug: string): Promise<CourseReturn> =>
    useFetchWithCache<CourseReturn>(`/api/courses/${courseSlug}`);