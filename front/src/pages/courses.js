import React, { useEffect, useState } from "react";
import CourseVideo from "../components/course-video/CourseVideo";
import CourseCard from "../components/course-card/CourseCard";
import Header from "../components/header/Header";
import { coursesService } from "../services/api/courses";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState();

  useEffect(() => {
    const getCourses = async () => {
      const res = await coursesService.getAll();
      if (res.status === 200 && res.data) {
        setCourses(res.data);
      }
    }
    
    getCourses();
  }, []);

  return (
    <Header>
      <div className="container">
        {course ? (
          <CourseVideo course={course}/>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses && courses.map((course, index) => (
            <CourseCard key={index} {...course} onClick={() => setCourse(course) } />
          ))}
        </div>
        )}
      </div>
    </Header>
  );
}

export default Courses;
