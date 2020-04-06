import React from 'react';
import Student from '../students/Student.js';
import Calendar from '../calendar/Calendar';
import Schedule from '../schedule/Schedule';
// import Payments from '../payments/Payments';
import Tables from '../tables/Tables';
import Queries from '../queries/Queries';
import Documents from '../documents/Documents';
import MainUserPage from '../mainUserPage/Main';

import Parents from '../parents/Parents';
import ParentCard from "../parents/ParentCard";
import ParentForm from '../parents/ParentForm';
import ParentInfomation from "../parents/ParentInfomation";
import ParentRegistrationForm from '../parents/ParentRegistrationForm';
import ParentTable from "../parents/ParentTable";
import SearchParentTable from "../parents/SearchParentTable";
import StudentInfo from "../parents/StudentInfo";

import Courses from '../courses/Courses';
import Staff from '../staff/Staff';

import Reports from "../students/studentProgress/StudentProgressTab";
import AddReport from "../students/studentProgress/AddStudentProgressForm";
import EditReport from "../students/studentProgress/EditStudentProgressForm";

function Display({ navigation }) {
  {
    if (navigation === 'main') {
      return (
        <MainUserPage />
      )
    }
     if (navigation === 'students') {
      return (
        <div>
          <Student /> 
        </div>
      )
    } else if (navigation === 'family') {
      return (
        <>
          <h2>Parents</h2>
          <Parents />
          <h2>ParentCard</h2>
          <ParentCard />
          <h2>ParentForm</h2>
          <ParentForm />
          <h2>ParentInformation</h2>
          <ParentInfomation />
          <h2>ParentRegistrationForm</h2>
          <ParentRegistrationForm />
          <h2>ParentTable</h2>
          <ParentTable />
          <h2>SearchParentTable</h2>
          <SearchParentTable />
          <h2>StudentInfo</h2>
          <StudentInfo />
        </>
      )
    } else if (navigation === 'courses') {
      return (
        <Courses />
      )
    } else if (navigation === 'staff') {
      return (
        <Staff />
      )
    }

  }
}

export default Display;