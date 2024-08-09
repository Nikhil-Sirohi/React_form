import './App.css'

export default function App() {
  return (
    <>
      <div className="container">
        <h2 className='Heading'>Form in React</h2>
        <div className='all_headings'>
        <div className='Firstname'>
        <p>First Name*</p>
        <input className="First_sizes" type="text" placeholder='Enter first Name'></input>
        </div>
        <div className='LastName'>
        <p>Last Name*</p>
        <input className="First_sizes" type="text" placeholder='Enter Last Name'></input>
        </div>
        <div className='email'>
          <p>Enter Email*</p>
          <input className="First_sizes" type="text" placeholder='Enter email'></input>
          </div>
        <div className='Contact'>
          <p>Contact*</p>
          <input className="First_sizes" type="text" placeholder='Enter mobile number'></input>
          </div>
        <div className='Gender'>
          <p>Gender*</p>
           <div className='choice_gender'>
            <input className="male_check" type="radio" ></input>
            <label className='male'>Male</label>
          <input className="female_check" type="radio" ></input>
          <label className='female'>Female</label>
          <input className="other_check"type="radio" ></input>
          <label>Other</label>
             </div>
        </div>
        <div className='best_subject'>
          <p>Your best subject</p>
          <div className='choice_subjects'>
           <input className="english_check" type='checkbox'></input>
            <label className='english'>English</label>
           <input className="maths_check" type='checkbox'></input>
            <label className='maths'>Maths</label>
           <input className="physics_check" type='checkbox'></input>
            <label className='physics'>Physics</label>
          </div>
        </div>
        <div className='resume'>
        <p>Upload resume*</p>
          <input type='file'></input>
        </div>
        <div className='url'>
          <p>Enter URL*</p>
            <input className="url" type='text' placeholder='Enter url'></input>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
        <div className='select_choice'>
          <span> Select your choice
            <input type='button' placeholder='select your ans'></input>
            <select>
              <option>Apple</option>
              <option>Banana</option>
              <option>Mango</option>
              <option>Oranges</option> 
            </select>
          </span>
          
          </div>
        <div className>
        <p>About</p>
          <input type="text" placeholder='About your self' className='self_box'></input>
        </div>
        <div className='Submit'>
        <p>Submit OR Reset</p>
          <span className='buttons'>
            <button className='reset'>Reset</button>
            <button className='submit'>Submit</button>
          </span>
        </div>
          </div>
      </div>
    </>
    
    
  )
}
