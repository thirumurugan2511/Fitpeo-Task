import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Order.css'

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { customer: 'Jane Cooper', orderNo: '48967586', amount: '$385.02', status: 'Delivered' },
  { customer: 'Guy Hawkins', orderNo: '78569215', amount: '$45.88', status: 'Cancelled' },
  { customer: 'Kristin Watson', orderNo: '20967532', amount: '$85.00', status: 'Pending' },
  { customer: 'Cody Fisher', orderNo: '95716520', amount: '$545.00', status: 'Delivered' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

const feedbacks = [
  { name: 'Jenny Wilson', rating: 4, feedback: 'The food was excellent and so was the service The food was excellent and so was the service...' },
  { name: 'Dianne Russell', rating: 5, feedback: 'We enjoyed the Eggs Benedict served on homemade We enjoyed the Eggs Benedict served on homemade...' },
  { name: 'Devon Lane', rating: 4, feedback: 'Normally wings are wings, but theirs are lean Normally wings are wings, but theirs are lean...' },
];

const Order = () => {
  return (
      <div className="row">
        <div className="col-md-8 mb-3">
          <div className='recent-div'>
            <h4 className='text-white'>Recent Orders</h4>
            <table className="table custom-table table-dark table-hover p-2">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Order No.</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.customer}</td>
                    <td>{order.orderNo}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`badge ${order.status === 'Delivered' ? 'bg-success' : order.status === 'Cancelled' ? 'bg-danger' : 'bg-warning'}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-4  mb-3">
          <div className='recent-div'>
            <h4 className='text-white mb-3'>Customer's Feedback</h4>
            <div className="">
              {feedbacks.map((feedback, index) => (
                <div key={index} className="">
                  <h5 className='text-white'>{feedback.name}</h5>
                  <div>
                    {Array.from({ length: feedback.rating }).map((_, i) => (
                      <span key={i} className="text-warning">&#9733;</span>
                    ))}
                    {Array.from({ length: 5 - feedback.rating }).map((_, i) => (
                      <span key={i} className="text-secondary">&#9733;</span>
                    ))}
                  </div>
                  <p className='text-white fs-12'>{feedback.feedback}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

// ReactDOM.render(<Dashboard />, document.getElementById('root'));

export default Order
