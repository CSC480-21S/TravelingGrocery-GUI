import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class Modal extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }

        // The gray background
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
        };

        // The modal "window"
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 50,
            margin: '0 auto',
            padding: 30,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
        };
        

        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>
                    {this.props.children}

                    <div className="footer">
                        <Link to={{
                            pathname: '/home',

                        }} style={{ textDecoration: 'none' }}> 
                        <button className="modalButtons" onClick={this.props.onClose}>
                            Close
            </button>
                            </Link>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};


export class Confirmation extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }

        // The gray background
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50,
            overflowY: 'scroll'
        };

        // The modal "window"
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 50,
            margin: '0 auto',
            padding: 30,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
        };


        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>
                    {this.props.children}

                    <div className="footer">
                        <button className="modalButtons" onClick={this.props.onCloseDeny} style={{marginRight: "100px"}}>
                            No
                        </button>
                        <button className="modalButtons" onClick={this.props.onCloseConfirm}>
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Confirmation.propTypes = {
    onCloseDeny: PropTypes.func.isRequired,
    onCloseConfirm: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;