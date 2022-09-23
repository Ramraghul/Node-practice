import React from 'react'

function Dashcard({ data }) {
    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={`card border-left-${data.theme} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${data.theme} text-uppercase mb-1`}>
                                {data.name}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{data.value}</div>
                        </div>
                        {
                            data.isBar ?
                                <div className="col">
                                    <div className="progress progress-sm mr-2">
                                    <div className="progress-bar bg-info" role="progressbar" style={{width:"50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div> : ""
                        }
                        <div className="col-auto">
                            {data.icon}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashcard