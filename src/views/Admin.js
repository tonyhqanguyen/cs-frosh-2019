import React from 'react';
import * as admin from '../api/admin-api';
import { Redirect } from 'react-router-dom';
import '../css/admin.scss';


const sizes = {
  "xtra-small": "XS",
  "small": "S",
  "medium": "M",
  "large": "L",
  "xtra-large": "XL"
}


class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.token,
      redirectStudent: this.props.data.role === "student",
      navActive: "students",
      loading: false,
      cacheStudents: [],
      cacheUnconfirmed: [],
      cacheClubs: [],
      students: [],
      unconfirmed: [],
      clubs: [],
      keyword: "",
      searchActive: false
    }
  }

  componentDidMount = async () => {
    await this.setState({ loading: true });
    this.interval = setInterval(async () => {
      const students = await admin.getStudents({ token: this.state.token });
      await this.setState({ students: students.data, cacheStudents: students.data, loading: false });
    }, 1000);
  }

  setNavStudents = async () => {
    await this.setState({ navActive: "students", loading: true });
    if (this.state.students.length === 0) {
      if (this.state.cacheStudents.length > 0) {
        this.setState({ students: this.state.cacheStudents, loading: false });
        return;
      }
      const students = await admin.getStudents({ token: this.state.token });
      await this.setState({ students: students.data, cacheStudents: students.data, loading: false });
    } else {
      this.setState({ loading: false });
    }
  }

  setNavClubs = async () => {
    await this.setState({ navActive: "clubs", loading: true });
    if (this.state.clubs.length === 0) {
      if (this.state.cacheClubs.length > 0) {
        this.setState({ clubs: this.state.cacheClubs, loading: false });
        return;
      }
      const clubs = await admin.getClubs({ token: this.state.token });
      await this.setState({ clubs: clubs.data, cacheClubs: clubs.data, loading: false });
    } else {
      this.setState({ loading: false });
    }
  }

  setNavUnconfirmed = async () => {
    await this.setState({ navActive: "unconfirmed", loading: true });
    if (this.state.unconfirmed.length === 0) {
      if (this.state.cacheUnconfirmed.length > 0) {
        this.setState({ unconfirmed: this.state.cacheUnconfirmed, loading: false });
        return;
      }
      const unconfirmed = await admin.getUnconfirmedStudents({ token: this.state.token });
      await this.setState({ unconfirmed: unconfirmed.data, cacheUnconfirmed: unconfirmed.data, loading: false });
    } else {
      this.setState({ loading: false });
    }
  }

  submitSearch = async (e) => {
    e.preventDefault();
    if (this.state.keyword !== "") {
      this.setState({ loading: true });
      let query = { token: this.state.token, keyword: this.state.keyword };
      let search;
      if (this.state.navActive === "students") {
        query = { ...query, students: this.state.cacheStudents };
        search = admin.searchStudents;
      } else if (this.state.navActive === "clubs") {
        query = { ...query, clubs: this.state.cacheClubs };
        search = admin.searchClubs;
      } else {
        query = { ...query, unconfirmed: this.state.unconfirmed };
        search = admin.searchUnconfirmedStudents;
      }

      try {
        const results = await search(query);
        if (this.state.navActive === "students") {
          await this.setState({ loading: false, students: results.data, searchActive: true });
        } else if (this.state.navActive === "clubs") {
          await this.setState({ loading: false, clubs: results.data, searchActive: true });
        } else {
          await this.setState({ loading: false, unconfirmed: results.data, searchActive: true });
        }
      } catch (error) {
        // handle error
      }
    }
  }

  clearSearch = async () => {
      await this.setState({ students: this.state.cacheStudents, clubs: this.state.cacheClubs, unconfirmed: this.state.cacheUnconfirmed, searchActive: false, keyword: "" });
  }

  logout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    this.props.history.push("/");
  }

  render() {
    let students = this.state.navActive === "students" ? this.state.students : this.state.unconfirmed;
    if (this.state.redirectStudent) {
      return <Redirect to="/profile"/>
    }

    const studentsTable = (
    <div className="card h-94">
      <div className="table-responsive">
        <table className="table table-bordered table-fixed admin-table">
          <thead>
            <tr>
              <th className="col-xs-1">#</th>
              <th className="col-xs-2">Full Name</th>
              <th className="col-xs-2">Email Address</th>
              <th className="col-xs-2">Phone Number</th>
              <th className="col-xs-1">Shirt Size</th>
              <th className="col-xs-2">Dietary Restriction(s)</th>
              <th className="col-xs-2 no-border-right">Accomodations Required</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((student, i) => {
                return (
                  <tr key={i} className={student.checkedIn ? "checkedIn" : "notCheckedIn"}>
                    <th className="col-xs-1">{i + 1}</th>
                    <td className="col-xs-2">{student.name}</td>
                    <td className="col-xs-2">{student.email}</td>
                    <td className="col-xs-2">{student.phone}</td>
                    <td className="col-xs-1">{sizes[student.shirt]}</td>
                    <td className="col-xs-2">{student.diet.vegetarian ? "vegetarian" : ""} 
                        {student.diet.vegan ? `${student.diet.vegetarian ? ', vegan' : 'vegan'}` : ""}
                        {student.diet.glutenFree ? `${(student.diet.vegetarian || student.diet.vegan) ? ', gluten-free' : 'gluten-free'}` : ""} 
                        {student.diet.other ? `${(student.diet.vegetarian || student.diet.vegan || student.diet.glutenFree) ? '; ' : ''}` + `others: ${student.diet.otherDiets.toLowerCase()}` : ""}
                        {!(student.diet.vegetarian || student.diet.vegan || student.diet.glutenFree || student.diet.other) ? "None" : null}
                    </td>
                    <td className="col-xs-2">{student.accom}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>  
    )

    const clubsTable = (
      <div className="table-responsive">
        <table className="table table-bordered table-fixed admin-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Club Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Statement of Interest</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.clubs.map((club, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{club.name}</td>
                    <td>{club.email}</td>
                    <td>{club.purpose}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )

    const loading = (
      <div className="row d-flex justify-content-center loading-row">
        <div className="spinner-grow loading text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )

    let display;

    if (this.state.loading) {
      display = loading;
    } else if (this.state.navActive === "students" || this.state.navActive === "unconfirmed") {
      display = studentsTable;
    } else if (this.state.navActive === "clubs") {
      display = clubsTable;
    }

    return (
      <div className="container white-bg">
        <div className="row admin-row">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">Administration</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse nav-collapse-left" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className={this.state.navActive === "students" ? "nav-item active" : "nav-item"} 
                    name="students"
                    >
                  <span className="nav-link nav-button" onClick={this.setNavStudents.bind(this)}>Students 
                  </span>
                </li>
                <li className={this.state.navActive === "unconfirmed" ? "nav-item active" : "nav-item"} 
                    name="unconfirmed"
                    >
                  <span className="nav-link nav-button" onClick={this.setNavUnconfirmed.bind(this)}>Unconfirmed 
                  </span>
                </li>
                <li className={this.state.navActive === "clubs" ? "nav-item active" : "nav-item"} 
                    name="clubs"
                    >
                  <span className="nav-link nav-button" onClick={this.setNavClubs.bind(this)}>Clubs
                  </span>
                </li>
                <li className="nav-item"
                    name="logout"
                    >
                  <span className="nav-logout nav-link nav-button" onClick={this.logout.bind(this)}>Logout
                  </span>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0" onSubmit={this.submitSearch.bind(this)}>
                <input className="form-control mr-sm-2 search-box"
                       name="keyword"
                       value={this.state.keyword}
                       onChange={async (e) => { await this.setState({ keyword: e.target.value} )}} 
                       type="search" 
                       placeholder="Search..." 
                       aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0 search-button" type="submit">Search</button>
                {this.state.searchActive ? <button className="btn btn-outline-danger my-2 my-sm-0 clear-button" onClick={this.clearSearch.bind(this)}>
                  <i className="fas fa-times"></i>
                </button> : null}
              </form>
            </div>
          </nav>
          {display}
        </div>
      </div>
    )
  }
}

export default Admin;
