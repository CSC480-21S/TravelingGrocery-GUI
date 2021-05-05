import React from 'react';
import "../styles/FAQ.css";

const FAQUser = () => {
    document.title = "FAQ";
    return (
        <div className="FAQ">
            <h2 className="h1">Frequently Asked Questions:</h2>
            <h4 className="h2">Q: How do I create a list?
                <p className="p">A: From the dashboard page, click the plus symbol, enter the name of the list, and hit "Create New List".</p>
                </h4>
            

            <h4 className="h2">Q: How do I add an item to a list?
            <p className="p">A: From the list page, click the "edit" button at the top of the list to add items, click the "+ Add Item" button at the top of the list, then enter the item name in the search bar at the top and hit enter.</p>
            </h4>

            <h4 className="h2">Q: How do I remove an item from a list?
            <p className="p">A: From the list page, click on the "Edit" button to make changes to your list, select the item(s) to be removed by clicking on them, click the "Delete" button at the top of the list. Click the "Save Changes" button located at the bottom of the list.</p>
            </h4>

            <h4 className="h2">Q: How do I edit item quantity?
            <p className="p">A: Click the "Edit" button at the top of the list, locate the desired item within the list, then use the "+" and "-" buttons to adjust the item quantities.</p>
            </h4>

            <h4 className="h2">Q: How do I receive in-store navigation to shop a list?
            <p className="p">A: From the list, go to the bottom of the list and click the "Start Shopping" button to open the navigation feature of the app. Click the "Next" button to receive directions to the next item on the list. Use the "Back" button to return to the directions of the previous button. Use the "Exit" button to quit the navigation entirely.</p>
            </h4>

            <h4 className="h2">Q: How do I receive offline navigation for a list?
            <p className="p">A: Begin shopping the list, then select "Exit". Now you can navigate that same list at a later time by selecting "Offline Navigation" from the Navigation Bar at the top of the screen.</p>
            </h4>

            <h4 className="h2">Q: How do I share a list?
            <p className="p">A: From the list, click the "share" button above the first item. Then, enter the email of the person you would like the list to be shared with under "Option 1". Click the "Share" button.</p>
            </h4>

            <h4 className="h2">Q: How do I request a shopper?
            <p className="p">A: From the list, click the "share" button above the first item. Then, click the "Request a Shopper" button.</p>
            </h4>
        </div>
    );
};
export default FAQUser;
