import React from 'react';

const InfoForm = (props) => {
  return (
    <div>
      <form onSubmit={props.setSubmittedTrue.bind(props.this)}>
        <div className="form-group">
          <label htmlFor="name-field">Full name</label>
          <input type="name" 
                  name="name"
                  value={props.info.name}
                  onChange={props.displayEmail ? props.handleChange.bind(props.this) : null}
                  readOnly={props.submitted}
                  className="form-control info-form" 
                  id="name-field" 
                  placeholder="Your full name..."/>
        </div>
        {props.displayEmail ? 
        <div className="form-group">
          <label htmlFor="email-field">Email address</label>
          <input type="email" 
                name="email"
                value={props.info.email}
                onChange={props.displayEmail ? props.handleChange.bind(props.this) : null}
                readOnly={props.submitted}
                className="form-control info-form" 
                id="email-field" 
                placeholder="Your email address..."/>
        </div> : null}
        <div className="form-group">
          <label htmlFor="phone-field">Phone number</label>
          <input type="phone" 
                  name="phone"
                  value={props.info.phone}
                  onChange={props.displayEmail ? props.handleChange.bind(props.this) : null}
                  readOnly={props.submitted}
                  className="form-control info-form" 
                  id="phone-field" 
                  placeholder="Your phone number..."/>
        </div>
        <div className="form-check-label">
          <label htmlFor="shirt-size">Shirt size</label>
        </div>
        <div className="form-check" id="shirt-size">
          <input className="form-check-input" 
                  type="radio" 
                  name="shirt"
                  onChange={props.displayEmail ? props.handleChange.bind(props.this) : null} 
                  disabled={props.submitted}
                  id="xs" 
                  value="xtra-small"
                  checked={props.info.shirt === "xtra-small"}/>
          <label className="form-check-label" htmlFor="xs">
            XS
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" 
                  type="radio" 
                  name="shirt"
                  onChange={props.displayEmail ? props.handleChange.bind(props.this) : null}
                  disabled={props.submitted}
                  id="sm" 
                  value="small"
                  checked={props.info.shirt === "small"}/>
          <label className="form-check-label" htmlFor="sm">
            S
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" 
                  type="radio" 
                  name="shirt" 
                  onChange={props.displayEmail ? props.handleChange.bind(props.this) : null} 
                  disabled={props.submitted}
                  id="md" 
                  value="medium"
                  checked={props.info.shirt === "medium"}/>
          <label className="form-check-label" htmlFor="md">
            M
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" 
                  type="radio" 
                  name="shirt" 
                  onChange={props.displayEmail ? props.handleChange.bind(props.this) : null} 
                  disabled={props.submitted}
                  id="lg" 
                  value="large"
                  checked={props.info.shirt === "large"}/>
          <label className="form-check-label" htmlFor="lg">
            L
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" 
                  type="radio"
                  name="shirt" 
                  onChange={props.displayEmail ? props.handleChange.bind(props.this) : null} 
                  disabled={props.submitted}
                  id="xl" 
                  value="xtra-large"
                  checked={props.info.shirt === "xtra-large"}/>
          <label className="form-check-label" htmlFor="xl">
            XL
          </label>
        </div>
        <p></p>
        <div className="form-group">
          {/* <label htmlFor="food">Dietary restrictions</label>
          <textarea className="form-control info-form" 
                    id="food"
                    name="diet" 
                    value={props.info.diet}
                    onChange={props.displayEmail ? props.handleChange.bind(props.this) : null} 
                    readOnly={props.submitted}
                    rows="3" 
                    placeholder="Please inform us of any dietary 
                    restrictions including allergies..."></textarea> */}
            <label htmlFor="diet">Dietary restrictions (please leave blank if not applicable)</label>
            <div className="form-check" id="diet">
              <input className="form-check-input" type="checkbox" name="vegetarian" checked={props.info.diet.vegetarian}  
                     onChange={props.displayEmail ? props.handleChangeCheckBox.bind(props.this) : null} id="vegetarian"/>
              <label className="form-check-label" htmlFor="vegetarian">
                Vegetarian
              </label>
            </div>
            <div className="form-check" id="diet">
              <input className="form-check-input" type="checkbox" name="vegan" checked={props.info.diet.vegan}  
                     onChange={props.displayEmail ? props.handleChangeCheckBox.bind(props.this) : null} id="vegan"/>
              <label className="form-check-label" htmlFor="vegan">
                Vegan
              </label>
            </div>
            <div className="form-check" id="diet">
              <input className="form-check-input" type="checkbox" name="glutenFree" checked={props.info.diet.glutenFree}  
                     onChange={props.displayEmail ? props.handleChangeCheckBox.bind(props.this) : null} id="gluten-free"/>
              <label className="form-check-label" htmlFor="gluten-free">
                Gluten Free
              </label>
            </div>
            <div className="form-check" id="diet">
              <input className="form-check-input" type="checkbox" name="other" checked={props.info.diet.other}  
                     onChange={props.displayEmail ? props.handleChangeCheckBox.bind(props.this) : null} id="other"/>
              <label className="form-check-label" htmlFor="other">
                Other
              </label>
            </div>
            {props.info.diet.other ? <textarea className="form-control info-form" 
                    id="food"
                    name="otherDiets" 
                    value={props.info.diet.otherDiets}
                    onChange={props.displayEmail ? props.handleChangeCheckBox.bind(props.this) : null} 
                    readOnly={props.submitted}
                    rows="3" 
                    placeholder="Please inform us of any dietary 
                    restrictions including allergies..."></textarea> : null}
        </div>
        <div className="form-group">
          <label htmlFor="accom">Accomodations</label>
          <textarea className="form-control info-form" 
                    id="accom" 
                    name="accom"
                    value={props.info.accom}
                    onChange={props.displayEmail ? props.handleChange.bind(props.this) : null} 
                    readOnly={props.submitted}
                    rows="3" 
                    placeholder="Please inform us of any accomodations you 
                    will require..."></textarea>
        </div>
      </form>
      {props.displayEmail ? 
      <button type="submit" className="btn btn-submit"
              onClick={props.setSubmittedTrue.bind(props.this)}>
          Submit
      </button>
      : null}
      {!props.displayEmail ? <button type="button" className="btn btn-submit"
              onClick={props.logout.bind(props.this)}>
        Logout
      </button> : null}
      {(!props.displayEmail && props.submitted) ? <button type="button" className="btn btn-submit"
              onClick={props.setSubmittedFalse.bind(props.this)}>
        Cancel
      </button> : null}
    </div>
  )
}

export default InfoForm;