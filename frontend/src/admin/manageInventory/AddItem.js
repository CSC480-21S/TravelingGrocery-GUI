import React, { useEffect, useState } from "react";
import {MenuItem, TextField} from "@material-ui/core";
import Select from 'react-select';
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";



const AddItem = () => {

    const [selectedOptionAsile, setSelectedOptionAsile] = useState(null);
    const [selectedOptionRack, setSelectedOptionRack] = useState(null);
    const [selectedOptionShelf, setSelectedOptionShelf] = useState(null);
    const [itemName, setitemName] = useState(null);
    const [quantity, setquantity] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onChange = (event) => {
        setitemName(event.target.value);
    };

    const onChange2 = (event) => {
        setquantity(event.target.value);
    };

    const button_style = {
        background: "#222258",
        borderRadius: "10px",
        fontFamily: "Inter",
        fontWeight: "500px",
        color: "#FFFFFF",
        height: "40px",
        width: "100%",

        };

    const asiles = [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3 ,label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7 ,label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
        { value: 10, label: '10' },
        { value: 11 ,label: '11' },
        { value: 12, label: '12' },
        { value: 'Pharmacy', label: 'Pharmacy' },
        { value: 'Dairy', label: 'Dairy' },
        { value: 'Frozen Food' ,label: 'Frozen Food' },
        { value: 'Cheese', label: 'Cheese' },
        { value: 'Deli', label: 'Deli' },
        { value: 'Produce', label: 'Produce' },

    ];

    const Rack = [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3 ,label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
    ];

    const Shelf = [
        { value: 0, label: '0' },
        { value: "top", label: 'top' },
        { value: "middle", label: 'middle' },
        { value: "bottom",label: 'bottom' },
    ];

    const buttonClicked = () => {


        if(selectedOptionAsile == null || selectedOptionRack == null || selectedOptionShelf == null || itemName == null || quantity == null)
        {
            alert("Make sure you entered all information!")
            return
        }
        else if(isNaN(quantity))
        {
            alert("You must enter a number for quantity!")
            return
        }
        else if(selectedOptionAsile === "" || selectedOptionRack === "" || selectedOptionShelf === "" || itemName === "" || quantity === "")
        {
            alert("Make sure you entered all information!")
            return
        }

        //Do a POST request to create the item
        console.log(selectedOptionAsile.value)
        console.log(selectedOptionRack.value)
        console.log(selectedOptionShelf.value)
        console.log(itemName)
        console.log(quantity)
        handleClickOpen()
    }

    return(
        <div>
            <h1 style={{textAlign: 'center', fontSize: '120%'}}> Manage Inventory </h1>
            <h1 style={{fontSize: '100%', paddingLeft: '20px'}}> Add Item </h1>

        <div style={{padding: '20px'}}>
            <h1 style={{fontSize: '80%'}}> Item Name</h1>
            <TextField
                id="ItemName"
                label="Enter Item Name..."
                value={itemName || ""}
                onChange={onChange}
                fullWidth={true}
                variant="outlined"
                inputProps={{ style: {backgroundColor: '#F6F6F6'}}}
            />
        </div>

            <div style={{padding: '20px'}}>
                <h1 style={{fontSize: '80%'}}> Quantity</h1>
                <TextField
                    id="Quantity"
                    label="Enter Quantity..."
                    value={quantity || ""}
                    onChange={onChange2}
                    fullWidth={true}
                    variant="outlined"
                    inputProps={{ style: {backgroundColor: '#F6F6F6'}}}/>
            </div>

            <div style={{padding: '20px'}}>
                <h1 style={{fontSize: '80%'}}> Location</h1>

                <Select
                    id="Asile" l
                    abel="Enter Aisle"
                    onChange={setSelectedOptionAsile}
                    defaultValue={selectedOptionAsile}
                    options={asiles}
                    placeholder="Enter Aisle" >
                </Select>

                <p></p>
                <Select id="Rack"
                        onChange={setSelectedOptionRack}
                        defaultValue={selectedOptionRack}
                        options={Rack}
                        placeholder="Enter Rack" />

                <p></p>
                <Select
                    id="Shelf"
                    onChange={setSelectedOptionShelf}
                    defaultValue={selectedOptionShelf}
                    options={Shelf}
                    placeholder="Enter Shelf">
                </Select>
            </div>
            <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
                <Button
                    fontSize="small"
                    style={button_style}
                    onClick={buttonClicked}
                >
                    Add Item
                </Button>

            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Item has been added!"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
            </div>
    )
}
export default AddItem;

