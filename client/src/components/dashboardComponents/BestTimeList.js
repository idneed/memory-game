import React, { Component } from 'react'
import axios from 'axios'


export default class BestTimeList extends Component {

  render() {
    return (
      <div className='best-time-section' >
        <h3>Meilleurs temps</h3>
        <table className='best-time-table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Temps</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.timeRecords.length !== 0 &&
              this.props.timeRecords.map((timeRecord,i)=>{

                let colorUser = timeRecord.username === localStorage.getItem("username") && "#F20505"
                let firstUserBg = i === 0 && "#05F2DB";
                return(
                  <tr key={i}>
                    <td style={{color:colorUser,backgroundColor:firstUserBg}} >{i+1}</td>
                    <td style={{color:colorUser,backgroundColor:firstUserBg}} >{timeRecord.username}</td>
                    <td style={{color:colorUser,backgroundColor:firstUserBg}} >{timeRecord.time}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
