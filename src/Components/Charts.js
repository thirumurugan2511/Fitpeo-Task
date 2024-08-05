import React from 'react';
import './Charts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Dropdown from 'react-bootstrap/Dropdown';

const data = [
  { name: '5', uv: 15000 },
  { name: '9', uv: 10000 },
  { name: '11', uv: 14000 },
  { name: '13', uv: 12000 },
  { name: '15', uv: 5000 },
  { name: '17', uv: 6000 },
  { name: '19', uv: 7000 },
  { name: '21', uv: 8000 },
  { name: '23', uv: 9000 },
  { name: '25', uv: 11000 },
  { name: '27', uv: 13000 },
];

const Charts = () => {
  return (
    <div className="row">
      <div className="col-lg-8 mb-3" >
        <div className='charts-div'>
            <div className='d-flex justify-content-between align-items-center'>
                <h4 className='text-white my-3 ms-3'>Activity</h4>
                <Dropdown>
                    <Dropdown.Toggle className='btn-dd me-2' variant="success" id="dropdown-basic">
                        Weekly
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Yearly</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Daily</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <BarChart
            width={900}
            height={200}
            data={data}
            margin={{
                top: 5, right: 5, left: 5, bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#06c0dc" />
            </BarChart>
        </div>
      </div>
      <div className="col-lg-4 text-white mb-3">
        <div className='p-4 right-det-menu'>
            <div className="mb-5">
            <i class="fa-solid fa-location-crosshairs fl-icon me-2"></i> Goals <span className='float-end'> <i class="fa-solid fa-greater-than fgt-icon"></i> </span>
            </div>
            <div className="mb-5">
            <i class="fa-solid fa-burger fb-icon me-2"></i> Popular Dishes <span className='float-end'> <i class="fa-solid fa-greater-than fgt-icon"></i> </span>
            </div>
            <div className="mb-2">
            <i class="fa-solid fa-bowl-rice fm-icon me-2"></i> Menus <span className='float-end'> <i class="fa-solid fa-greater-than fgt-icon"></i> </span>
            </div>
        </div>
      </div>
    </div>
  );
};



export default Charts