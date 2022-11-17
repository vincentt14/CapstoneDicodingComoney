import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FiPlusSquare } from "react-icons/fi";

const EditIncomeExpense = () => {
  return (
    <section>
      <div className="container">
        <div className="my-4">
          <h3>
            <a href=""> <FiArrowLeft/> Back to Detail</a>
          </h3>
        </div>

        <div className="content">
          <h1>Edit your income / expense, here</h1>
          <p>Fill your detail income below</p>
          <form className="my-5">
            <input type="text" className="form-control my-4" placeholder="Name" aria-label="Name"></input>
            <input type="text" className="form-control my-4" placeholder="Amount" aria-label="Amount"></input>

            <div className="text-center my-4">
              <div className="row">
                <div className="col-9">
                  <div className="dropdown">
                    <button className="form-control dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Category
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                
                  <button type="button" className="btn btn-primary form-control"> <FiPlusSquare/> New Category</button>
                </div>
              </div>
            </div>

            <textarea className="form-control my-4" placeholder="Description" aria-label="With textarea" style={{height: "120px"}}></textarea>
            <button type="button" className="btn btn-primary form-control">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditIncomeExpense