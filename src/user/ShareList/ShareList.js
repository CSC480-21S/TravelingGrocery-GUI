import "../../App.css";
import "./ShareList.css";

import React, { Component } from "react";
import Modal, { Confirmation } from "./AlertDialogue";
import { connect } from 'react-redux';

class ShareList extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            value: "Enter email...",
            isOpenStockWarning: false,
            isOpenShopper: false,
            isOpenShare: false,
            nextModal: 0,
            badEmail: false,
        }
        //event handlers for the textbox
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onBlur = this.onBlur.bind(this);
        //handlers for the buttons
        this.clickButton = this.clickButton.bind(this);
        this.requestShopper = this.requestShopper.bind(this);
        document.title = "Share List";
    }

    //const history = useHistory();

    handleChange(e) { 
        this.setState({ value: e.target.value})
    }

    handleClick(e) {
        if (e.target.value == "Enter email...") {
            this.setState({ value: "" })
        }
    }

    onBlur(e) {
        if (e.target.value == "") {
            this.setState({value: "Enter email..."})
        }
    }

    //button handlers
    clickButton() {
        //dunno what to put here to get it to talk to the endpoint
        this.setState({ isOpenStockWarning: true, nextModal: 1 });
    }

    requestShopper() {
        //i want to just run clickButton with a preset address, however I need a unique pop-up so a workaround is needed 
        //(either dupe if short or add a bool to the state checking the origin if long)
        this.setState({ isOpenStockWarning: true, nextModal: 2 });
    }

    closeConfirm = () => {
        //set up to add to the default list
        this.turnOffStockWarning();
    }

    turnOffStockWarning = () => {
        if (this.state.isOpenStockWarning) {
            this.setState({ isOpenStockWarning: false });
            //nextModal has three states: 0 (none), 1 (confirmed share), 2 (confirmed shopper)
            if (this.state.nextModal == 1) {
                this.setState({ nextModal: 0, isOpenShare: true });
            }
            if (this.state.nextModal == 2) {

                this.setState({ nextModal: 0, isOpenShopper: true });
            }
        }
    }

    turnOffShopper = () => {
        this.setState({
            isOpenShopper: false
        });
    }

    turnOffShare = () => {
        this.setState({
            isOpenShare: false
        });
    }

    render() {
        //// Don't show anything until the ShoppingListID is loaded
        //if (!this.props.shoppingID) return null;
        //<p>{this.props.shoppingID}</p>

        return (
            <div>               
                <h1 className="title">Share List</h1>

                <p className="text">OPTION 1:</p>
                
                <input
                    className="textbox"
                    type="text"
                    value={this.state.value}
                    onClick={this.handleClick}
                    onChange={this.handleChange}
                    onBlur={this.onBlur}
                />
                <p className="error" style={this.state.badEmail ? {} : { visibility: 'hidden' }}>Invalid email address</p>

                <button className="buttons" onClick={this.clickButton}>Share</button>

                <br />
                <br />

                <p className="text">OPTION 2:</p>
                <button className="buttons" onClick={this.requestShopper}>Request Shopper</button>

                <Confirmation show={this.state.isOpenStockWarning}
                    onCloseDeny={this.turnOffStockWarning} onCloseConfirm={this.closeConfirm}>
                    <p className="text">Items may go OUT OF STOCK by the time the list is shopped.</p>
                    <p className="text">Would you like to add the OUT OF STOCK items to your next list?</p>
                </Confirmation>
                <Modal show={this.state.isOpenShare}
                    onClose={this.turnOffShare}>
                    <p className="text"> Your list has been shared! </p>
                </Modal>
                <Modal show={this.state.isOpenShopper}
                    onClose={this.turnOffShopper}>
                    <p className="text">Your shopper request has been accepted.</p>
                </Modal>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    shoppingID: state.active_list.shoppingListID
})


/**
 * Use Redux's "connect" HOC to pass props into your component.
 */
export default connect(mapStateToProps)(ShareList);