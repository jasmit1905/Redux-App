import React from 'react'
import { Table } from "antd";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useredit, userDelete } from '../Redux/Action';



function TableData() {

    const navigate = useNavigate()
    const tabledata = useSelector((state) => state?.data) || [] // deta get in redux
    const dispatch = useDispatch()


    const handleDelete = (index) => {
        dispatch(userDelete(index))

    }
    const handleEdit = (index) => {
        dispatch(useredit(index))
        navigate(`/edit/${index}`)
    }
    const handleNavigat = () => {
        navigate('/')
    }



    const columns = [
        {
            title: 'First name',
            dataIndex: 'fname',
            key: 'fname',
        },
        {
            title: 'Last Name',
            dataIndex: 'lname',
            key: 'lname',
        },
        {
            title: 'Countary',
            dataIndex: 'countary',
            key: 'countary',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender'
        },
        {
            title: 'Language',
            dataIndex: 'language',
            key: 'language'
        },
        {
            title: 'Action',
            render: (_, item, index) => (
                <>
                    <button className='btn btn-danger' style={{ marginRight: 10 }} onClick={() => handleDelete(index)}>Delete</button>
                    <button className='btn btn-success' onClick={() => handleEdit(index)}>Edit</button>
                </>

            )
        }

    ];

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
            <div>
                {/* <table class="table table-striped">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Country</th>
                    <th>Gender</th>
                    <th>Language</th>
                    <th>Action</th>
                </tr>

                {
                    userData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.countary}</td>
                            <td>{item.gender}</td>
                            <td>{item.language}</td>
                            <></>
                            <td>
                                <button className='btn btn-danger' style={{ marginRight: 10 }} onClick={() => handleDelete(index)}>Delete</button>
                                <button className='btn btn-success' onClick={() => handleEdit(item, index)}>Edit</button>
                            </td>
                        </tr>
                    ))
                }
            </table> */}
            </div>
            <button className='btn btn-success' style={{ marginLeft: 100, margin: 30, fontSize: '20px' }} onClick={() => handleNavigat()}>ADD USERDATA +</button>
            <Table dataSource={[...tabledata]} columns={columns} />;
        </>
    )
}

export default TableData
