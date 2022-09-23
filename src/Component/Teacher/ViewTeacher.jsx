import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {env} from '../config'

function ViewTeacher() {
    let params = useParams()
    // let [serch, setserch] = useSearchParams()

    let [demo, setDemo] = useState({})

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        try {
            let pro = await axios.get(`${env.API}/users/${params.id}`)
            setDemo(pro.data)
        } catch (error) {

        }
    }
    return (
        <>
            <span style={{ width: "20rem" }} className="d-grid" >
                <h3>{demo.name}</h3>
                <h3>{demo.gender}</h3>
                <h3>{demo.number}</h3>
                <h3>{demo.Job}</h3>
            </span>
        </>
    );
}

export default ViewTeacher;
