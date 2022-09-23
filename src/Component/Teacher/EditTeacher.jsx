import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {env} from '../config'

function EditTeacher() {
    
    const params = useParams()
    const formik = useFormik({
        initialValues: {
            name: "",
            gender: "",
            number: "",
            Job: "",
        },
        validate: (value) => {
            var errors = {}

            if (value.name === "") {
                errors.name = "Enter the name"
            }
            return errors
        },
        onSubmit: async (data) => {
            try {
                await axios.put(`${env.API}/users/${params.id}`, data)
                alert("Edit data is Done 'BOSS'")
                
            } catch (error) {

            }
        }
    })

    useEffect(() => {
        ComeData()
    }, [])

    let ComeData = async () => {
        try {
            let set = await axios.get(`${env.API}/users/${params.id}`)
            formik.setValues({
                name: set.data.name,
                gender: set.data.gender,
                number: set.data.number,
                Job: set.data.Job,
            })
        } catch (error) {

        }
    }
    return (
        <div className="container ">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>name</label>
                        <input className="form-control" type={"text"} value={formik.values.name} onChange={formik.handleChange} name="name" />
                        <span style={{ color: "red" }}>{formik.errors.name}</span>
                    </div>
                    <div className="col-lg-6">
                        <label>gender</label>
                        <input className="form-control" type={"text"} value={formik.values.gender} onChange={formik.handleChange} name="gender" />
                    </div>
                    <div className="col-lg-6">
                        <label>number</label>
                        <input className="form-control" type={"text"} value={formik.values.number} onChange={formik.handleChange} name="number" />
                    </div>
                    <div className="col-lg-6">
                        <label>Job</label>
                        <input className="form-control" type={"text"} value={formik.values.Job} onChange={formik.handleChange} name="Job" />
                    </div>
                    <div>
                        <button className="btn btn-danger mt-2 ms-2" type="submit" value="submit" disabled={!formik.isValid} >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditTeacher;