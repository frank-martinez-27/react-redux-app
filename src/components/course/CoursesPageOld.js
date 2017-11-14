import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onTitleChange(e) {
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({ course: course });
  }
  onClickSave() {
    //this.props.dispatch(courseActions.createCourse(this.state.course));
    //this.props.createCourse(this.state.course);
    this.props.actions.createCourse(this.state.course);
  }
  courseRow(course, idx) {
    return <div key={idx}>{course.title}</div>;
  }
  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <hr />
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />

      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses //state.courses is the same name as in the reducer's index.js
  };
}
function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
