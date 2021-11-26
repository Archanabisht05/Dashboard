import React from 'react'
import '../components/css/UserProfile.css'

const UserProfile = () => {
    return (
        <div className="home">
            <div className='form'>
                <div className='content1'>
                    <br/><div className='textheading'>Edit profile </div>
                    <div className='textheading1'>Complete your profile</div>
                </div>
                <div className='inputfield'>
                {/* <MDBInput label="Material input" className="textfield_company" /> */}
                    <div>
                        <input type="text" class="form-control1"  placeholder="Company Disabled" size="40"/>
                        <input type="text" class="form-control1"  placeholder="Username" size="20" />
                        <input type="text" class="form-control1"  placeholder="Email Address" size="36" />
                    </div>
                    <div>
                        <input type="text" class="form-control1"  placeholder="First Name" size="50"/>
                        <input type="text" class="form-control1"  placeholder="Last Name" size="50" />
                    </div>
                    <div>
                        <input type="text" class="form-control1"  placeholder="City" size="30"/>
                        <input type="text" class="form-control1"  placeholder="Country" size="30" />
                        <input type="text" class="form-control1"  placeholder="Postal Code" size="36" />
                    </div>
                    <div className='aboutMe' >
                        About Me
                    </div>
                    <div className='aboutMe_content' >
                        Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.
                    </div>
                    <div class="form-control2">                        
                    </div>
                    <div>
                        <button className='btn'>UPDATE PROFILE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
