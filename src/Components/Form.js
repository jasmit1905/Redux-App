import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { userSubmit } from '../Redux/Action';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';



function Form() {
    const [UserDetails, setUserDetails] = useState({
        fname: '',
        lname: '',
        countary: '',
        gender: '',
        language: []
    }
    );

    const [userData, setuserData] = useState([])

    const [editindex, seteditindex] = useState(null)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const params = useParams()

    const tabledata = useSelector((state) => state?.data) || []

    const editformData = useSelector((state) => state?.editdata) || {fname: '',lname: '',countary: '',gender: '',language: []}

useEffect(() => {
    setuserData(tabledata)
    console.log(editformData, "edit==========>");
    
    if (params.id) {
        seteditindex(params.id)
        setUserDetails(editformData)

    }
}, [])



const handlechange = (e) => {
    setUserDetails({ ...UserDetails, [e.target.name]: e.target.value });
    console.log(UserDetails);
}

const handleSubmit = (e) => {
    const arr = userData
    if (editindex !== null) {
        arr[editindex] = UserDetails
        setuserData(arr);
        seteditindex(null)
    }
    else {
        arr.push(UserDetails);
    }
    dispatch(userSubmit(arr))



    setUserDetails({
        fname: '',
        lname: '',
        countary: '',
        gender: '',
        language: []
    })

}

// const handleDelete = (index) => {
//     const arr = userData
//     arr.splice(index, 1);
//     setuserData([...arr]);
// }

// const handleEdit = (item, index) => {
//     setUserDetails(item)
//     seteditindex(index)
// }

const handlecheckbox = (e) => {
    const arr = [...UserDetails.language]
    if (e.target.checked) {
        arr.push(e.target.value)
    } else {
        const index = arr.indexOf(e.target.value)
        arr.splice(index, 1)

    }
    setUserDetails({ ...UserDetails, language: arr })
}

const handleNavigate = () => {
    navigate('/table')
}
return (
    <div>
        <>
            <div className='container'>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
                <label class="form-label">First Name</label>
                <input type='text' name='fname' id='fname' placeholder='First Name' className='form-control' value={UserDetails.fname} onChange={(e) => handlechange(e)} />
                <label class="form-label">Last Name</label>
                <input type='text' name='lname' id='lname' placeholder='Last Name' className='form-control' value={UserDetails.lname} onChange={(e) => handlechange(e)} />
                <label className='form-label'>Countary</label>
                <select className='form-control' name='countary' id='countary' value={UserDetails.countary} onChange={(e) => handlechange(e)}>
                    <option value='default'>Select Country</option>
                    <option value='USA'>USA</option>
                    <option value='UK'>UK</option>
                    <option value='Canada'>Canada</option>
                    <option value='Australia'>Australia</option>
                    <option value='India'>India</option>
                </select>
                <br />
                <label>Gender</label><br />
                <input type="radio" id="Male" name="gender" value="Male" checked={UserDetails.gender === 'Male'} onChange={(e) => handlechange(e)} />
                <label >Male</label><br />
                <input type="radio" id="Female" name="gender" value="Female" checked={UserDetails.gender === 'Female'} onChange={(e) => handlechange(e)} />
                <label>Female</label><br />
                <input type="radio" id="Other" name="gender" value="Other" checked={UserDetails.gender === 'Other'} onChange={(e) => handlechange(e)} />
                <label >Other</label>
                <br /><br />
                <label>Langauge</label><br />
                <input type="checkbox" id="langauge" name="langauge" value="Gujrati" checked={UserDetails.language.includes('Gujrati')} onChange={(e) => handlecheckbox(e)} />
                <label> Gujrati</label><br />
                <input type="checkbox" id="langauge" name="langauge" value="Hindi" checked={UserDetails.language.includes('Hindi')} onChange={(e) => handlecheckbox(e)} />
                <label> Hindi</label><br />
                <input type="checkbox" id="langauge" name="langauge" value="English" checked={UserDetails.language.includes('English')} onChange={(e) => handlecheckbox(e)} />
                <label> English</label><br />

                <button type='submit' className='btn btn-primary' style={{ marginTop: '10px', marginBottom: '10px', }} onClick={() => handleSubmit()}>Submit</button>
                <button type='submit' className='btn btn-warning' style={{ marginLeft: 10 }} onClick={() => handleNavigate()}>Table</button>

            </div>

        </>

    </div>
)
}



export default Form


