import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {env} from '../config'



function Teacher() {

    const navigate = useNavigate()

    // Component navigation

    var CreateProduct = () => {
        navigate("New_teacher")
    }
    var EditProduct = (data) => {
        navigate(`EditTeacher/${data._id}`)
    }
    var ViewProduct = (data) => {
        navigate(`ViewTeacher/${data._id}`)
    }

    const [product, setproduct] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        dataLoad()
    }, [])

    let dataLoad = async () => {
        setloading(true)
        let date = await axios.get(`${env.API}/users?limit=100&offset=0`)
        setproduct(date.data)
        setloading(false)

    }

    let dataDelete = async (id) => {
        try {
            let ask = window.confirm("Boss Are you sure to Delete.?")
            if(ask){
                await axios.delete(`${env.API}/users/${id}`)
            }

            let index = product.findIndex((obj)=>obj.id===id)
            product.splice(index,1)
            setproduct([...product])
            
        } catch (error) {

        }
    }

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Data's Creations</h1>
                <button onClick={() => { CreateProduct() }} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    Create New Data</button>
            </div>
            {
                loading ? <span>Loading....</span> : <div className="row">
                    <div className="card shadow mb-4">
                        <div className="card-header py-2">
                            <h6 className="m-0 font-weight-bold text-primary">ALL INFO</h6>
                        </div>

                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>#Sl</th>
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>Number</th>
                                            <th>Job</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>#Sl</th>
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>Number</th>
                                            <th>Job</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            product?.map((value, index) => {
                                                return (
                                                    <>
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{value.name}</td>
                                                            <td>{value.gender}</td>
                                                            <td>{value.number}</td>
                                                            <td>{value.Job}</td>
                                                            <td>
                                                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                                                    <button onClick={() => { ViewProduct(value) }} type="button" class="btn btn-primary m-1">View</button>
                                                                    <button onClick={() => { EditProduct(value) }} type="button" class="btn btn-warning m-1">Edit</button>
                                                                    <button onClick={() => { dataDelete(value._id) }} type="button" class="btn btn-danger m-1">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Teacher