import React from 'react';
import "../styles/FAQ.css";

const FAQEmployee = () => {
    document.title = "FAQ";

    return (
        <div>
            <h2 className="h1">Frequently Asked Questions:</h2>
            <h4 className="h2">Q: How do I change my Shopping Availability Status?
            <p className="p">A: Click the "Toggle Active" button.</p>
            </h4>

            <h4 className="h2">Q: How do I shop assigned lists?
            <p className="p">A: Click the "Your Orders" button, select the available orders to be shopped, then click the "Start Shopping" button located at the bottom of the orders list. Click the "Next" button to receive directions to the next item on the list. Use the "Back" button to return to the directions of the previous button. Use the "Exit" button to quit the navigation entirely. Once you have reached the last item on your list, press the "Next" button once more. Click the "Finish" button, then click the checkmark button once you have completed your shopping trip.  </p>
            </h4>
        </div>
    );
};
export default FAQEmployee;
