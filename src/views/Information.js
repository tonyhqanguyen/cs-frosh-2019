import React from 'react';
import '../css/information.css';

class Information extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="intro">
            <h1 className="title">What is the Computer Science Frosh?</h1>
            <p className="about">
              It's that time of the year once again, when school is about to begin. While it is exciting to
              embark onto a new journey and start a new chapter of your life, you might feel nervous or anxious
              about the unknowns. This event is just exactly our way to help you navigate through any doubts or
              struggles you may have. This event features a Q&A session where you can get introduced to the program
              through the perspectives of professors, upper year students, alumni and more, fun activities to get to 
              know one another and make friends with prizes, and lots more! We hope that you are just as thrilled 
              to begin your journey at University of Toronto as we are to meet you in September! So what are you 
              waiting for, if you are an incoming Computer Science student, register for the Orientation event now!
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Information;