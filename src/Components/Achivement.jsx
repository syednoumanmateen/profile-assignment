import React from 'react'

const Achivement = ({ data }) => {
  return (
    <>
      <div className="row g-0">
        <div className="col-2">
          <div className={`rounded p-2 text-center ${data.bg}`}>
            {data.icon}
            <div className='fs-7 text-light'>level {data.level}</div>
          </div>
        </div>
        <div className="col-9 p-2">
          <div>{data.title}</div>
          <div className="row fs-7 g-0 text-secondary">
            <div className="col-10">
              {data.courses}
            </div>
            <div className="col-2">
              {data.achieve} / {data.total}
            </div>
          </div>
          <div className="progress" style={{ height: "8px" }} role="progressbar">
            <div className={`progress-bar text-bg-warning`} style={{ width: `${data.progress}%` }}></div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Achivement