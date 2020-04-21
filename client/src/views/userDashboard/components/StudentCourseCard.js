import React from 'react';
import hamburgerMenuIcon from "../../../assets/hamburger_menu_icon.png";

function StudentCourseCard({student}) {
  return (
    <div className="studentCourseCard">
        <div className="nameAndHamburgerMenu">
            <div className="names">
                <h2 className="firstName">{student.first_name}</h2>
                <h3 className="additionalNames">{student.additional_names}</h3>
            </div>
            <img src={hamburgerMenuIcon} />
        </div>
      {student.courses.length === 0 ?
        <p className="noCourses">{student.first_name} has not registered for any courses yet.</p>
        :
        <>
            {student.courses.map(course =>
                <div className="courseData">
                    <h3>{course.program}: {course.course}</h3>
                    <table className="dateAndPayment">
                        <thead>
                            <tr>
                                <th>Date/Time</th>
                                <th>Status</th>
                                <th>Paid?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="startEndDatesTimes">{course.start_end_times}<br />{course.start_end_dates}</td>
                                <td>{course.enrollment_status}</td>
                                <td>{course.payment_status === "Paid" ? course.payment_status : <button>Pay Now</button>}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="progressReports">
                        <thead>
                            <tr>
                                <th>Progress Report Date</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{course.progress_report_last_date} ({course.progress_report_last_month_number})</td>
                                <td><button>View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </>
    }
    </div>
  )
}

export default StudentCourseCard;