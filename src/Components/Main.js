import React from 'react'
import './Main.css';
import Charts from './Charts';
import Order from './Order';

const Main = () => {
  return (
    <div className="p-3">
        <h2 className="mb-0 white mb-3">Dashboard</h2>
        <div className="dashboard row" >
            <div className="card card-main mb-3 col-lg-2 col-md-3 col-sm-3 col-6">
                <div className="card-content <card-det p-3">
                    <div className="icon mb-1 total-orders"><i class="detail-icon di-1 fa-solid fa-basket-shopping"></i></div>
                    <div className="details">
                        <p className="fs-12 mb-0">Total Orders</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2 className="mb-0 fw-bold">75</h2>
                            <span className="change up">▲ 3%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-main mb-3 col-lg-2 col-md-3 col-sm-3 col-6">
                <div className="card-content <card-det p-3">
                    <div className="icon mb-1 total-delivered"><i class="detail-icon di-2 fa-solid fa-bag-shopping"></i></div>
                    <div className="details">
                        <p className="fs-12 mb-0">Total Delivered</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2 className="mb-0 fw-bold">70</h2>
                            <span className="change down">▼ 3%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-main mb-3 col-lg-2 col-md-3 col-sm-3 col-6">
                <div className="card-content <card-det p-3">
                    <div className="icon mb-1 total-cancelled"><i class="detail-icon di-3 fa-solid fa-bag-shopping"></i></div>
                    <div className="details">
                        <p className="fs-12 mb-0">Total Cancelled</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2 className="mb-0 fw-bold">05</h2>
                            <span className="change up">▲ 3%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-main mb-3 col-lg-2 col-md-3 col-sm-3 col-6">
                <div className="card-content <card-det p-3">
                    <div className="icon mb-1 total-revenue"><i class="detail-icon di-4 fa-solid fa-file-invoice-dollar"></i></div>
                    <div className="details">
                        <p className="fs-12 mb-0">Total Revenue</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2 className="mb-0 fw-bold">$ 12k</h2>
                            <span className="change down">▼ 3%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-main mb-3 col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="card-content d-flex justify-content-between card-det p-3">
                    <div className="details">
                        <p className="fs-12 mb-3">Net Profit</p>
                        <h2 className="mb-1 mt-1 fw-bold">$ 6759.25</h2>
                        <span className="change up">▲ 3%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-circle">
                            <span>70%</span>
                        </div>
                        <p className='mb-0'>*The values here have been rounded off.</p>
                    </div>
                </div>
            </div>
        </div>
        <Charts />
        <Order />
    </div>
  )
}

export default Main