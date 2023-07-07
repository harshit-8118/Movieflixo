import './newUser.scss';

function NewUser() {
  return (
    <div className='newUser'>
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder='john' />
        </div>
        <div className="newUserItem">
            <label>Full Name</label>
            <input type="text" placeholder='John Smith' />
        </div>
        <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder='john12@gmail.com' />
        </div>
        <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder='password' />
        </div>
        <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder='+91 342 232 2323' />
        </div>
        <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder='Jankipuram | India' />
        </div>
        <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
                <input type="radio" name='gender' value={'male'} id='male' />
                <label htmlFor="male">Male</label>
                <input type="radio" name='gender' value={'female'} id='female' />
                <label htmlFor="female">Female</label>
                <input type="radio" name='gender' value={'other'} id='other' />
                <label htmlFor="other">Other</label>
            </div>
        </div>
        <div className="newUserItem">
            <label>Active</label>
            <select className='newUserSelect' id='active' name='active'>
                <option value={'yes'}>Yes</option>
                <option value={'no'}>No</option>
            </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}

export default NewUser
