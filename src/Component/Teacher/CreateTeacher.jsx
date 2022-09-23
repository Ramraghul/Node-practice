import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import {env} from '../config'

function CreateTeacher() {
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
            } if (value.name.length < 5) {
                errors.name = "Enter the Above five letter"
            }

            return errors
        },
        onSubmit: async (total) => {
            await axios.post(`${env.API}/post`, total)
            alert("New Data Created Done 'BOSS'")
        }
    })
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

export default CreateTeacher