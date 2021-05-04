import React from 'react';
import "../styles/FAQ.css";

const FAQAdmin = () => {
    document.title = "FAQ";

    //add a q about how to view employee analytics
    return (
        <div>
            <h2 className="h1">Frequently Asked Questions:</h2>

            <h4 className="h2">Q: How do I assign employees to shop Remote Customer lists?
            <p className="p">A: Click the "Assign Orders" button. From the list of available orders, select the orders" you wish to assign to one employee by clicking on each order. Click the "Assign Orders button at the bottom of the list. From the list of available employees, select the employee shopper you wish to assign the selected orders to by clicking on the employee, and after selecting the specific employee, click the "Confirm" button.</p>
            </h4>

            <h4 className="h2">Q: How do I add an item to inventory?
            <p className="p">A: Click the "Manage Inventory" button, click the "Add Item" button, complete the Add Item form. Fill in the Item Name and Quantity fields, then click the "Add Item" button.</p>
            </h4>

            <h4 className="h2">Q: How do I add new Employee Shoppers?
            <p className="p">A: Click the "Employees" button, then select "Add Employee". Type the Employee's email in the Email field, then click the "Add Employee" button.</p>
            </h4>

            <h4 className="h2">Q: How do I view the analytics for an Employee Shopper?
            <p className="p">A: Click the "Analytics" button. Type the Employee's email in the User field, then click the "Get Analytics" button.</p>
            </h4>
        </div>
    );
};
export default FAQAdmin;
