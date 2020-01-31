import { createReducer, on, Action } from '@ngrx/store';
import { StoreCourses, RemoveCourseSuccess, StoreCourse } from '../actions/courses.actions';

const initialState = {
  courses: [],
  course: {}
};

const coursesReducer = createReducer(initialState,
  on(StoreCourses, (state, props) => {
    return {
      ...state,
      courses: props.courses
    };
  }),
  on(StoreCourse, (state, props) => {
    return {
      ...state,
      course: props.course
    };
  }),
  on(RemoveCourseSuccess, (state, props) => {
    return {
      ...state,
      courses: state.courses.filter(({ id }) => id !== props.id)
    };
  })
);

export function CoursesReducer(state, action: Action) {
  return coursesReducer(state, action);
}
