import React, {  useState } from "react";
import { TextField} from "@material-ui/core";
import Select from 'react-select';
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import {store_addItems} from '../../api/api'

const AddItem = () => {
    const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;
    // Non selected
    const [itemName, setitemName] = useState(null);
    const [itemDescription, setItemDescription] = useState("");
    // Selected, controlled user input
    const [selectedOptionSaleBool, setSelectedOptionSaleBool] = useState(null)
    const [selectedOptionAisle, setSelectedOptionAisle] = useState(null);
    const [selectedOptionRack, setSelectedOptionRack] = useState(null);
    const [selectedOptionShelf, setSelectedOptionShelf] = useState(null);
    const [selectedOptionItemStockBool, setSelectedOptionItemStockBool] = useState(null);
    const [selectedOptionDepartmentName, setSelectedOptionDepartmentName] = useState("");
    const [selectedOptionSide, setSelectedOptionSide] = useState(null);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onChangeItemName = (event) => {
        setitemName(event.target.value);
    };

    const onChangeItemDescription = (event) => {
        setItemDescription(event.target.value);
    }

    const button_style = {
        background: "#222258",
        borderRadius: "10px",
        fontFamily: "Inter",
        fontWeight: "500px",
        color: "#FFFFFF",
        height: "40px",
        width: "100%",
    };

    const aisles = [
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
        { value: "none", label: 'none' },
        { value: "top", label: 'top' },
        { value: "middle", label: 'middle' },
        { value: "bottom",label: 'bottom' },
    ];

    const Side = [
        { value: "none", label: 'none' },
        { value: "left", label: 'left' },
        { value: "right", label: 'right' },
    ];

    const Department = [
        { value: "Aisles", label: 'Aisles' },
        { value: "Bakery", label: 'Bakery' },
        { value: "Beverage", label: 'Beverage' },
        { value: "Checkout", label: 'Checkout' },
        { value: "Cafe", label: 'Cafe' },
        { value: "Dairy", label: 'Dairy' },
        { value: "Entrance", label: 'Entrance' },
        { value: "Frozen", label: 'Frozen' },
        { value: "Health and Beauty", label: 'Health and Beauty' },
        { value: "Meat", label: 'Meat' },
        { value: "Pharmacy", label: 'Pharmacy' },
        { value: "Produce", label: 'Produce' },
        { value: "Seafood", label: 'Seafood' },
    ];

    const ItemStockBool = [
        { value: true, label: 'In stock' },
        { value: false, label: 'Out of stock' },
    ]

    const SaleBool = [
        { value: true, label: 'On Sale' },
        { value: false, label: 'Not On Sale' },
    ]


    const buttonClicked = async () => {

        if (selectedOptionDepartmentName.value !== "Aisles") {

            if (itemName == null ||
                selectedOptionItemStockBool == null || selectedOptionDepartmentName.value === "" ||
                selectedOptionSaleBool == null) {
                alert("Make sure you entered all information!")
                return
            }

        } else {
            if (itemName == null || selectedOptionAisle == null ||
                selectedOptionRack == null || selectedOptionShelf == null ||
                selectedOptionItemStockBool == null || selectedOptionDepartmentName.value === "" ||
                selectedOptionSide == null || selectedOptionSaleBool == null) {
                alert("Make sure you entered all information!")
                return
            }
        }

        let items;
        if (selectedOptionDepartmentName.value !== "Aisles") {
            items = {
                "NewItems": [
                    {
                        "itemName": itemName,
                        "itemDescription": itemDescription,
                        "itemStockBool": selectedOptionItemStockBool.value,
                        "saleBool": selectedOptionSaleBool.value,
                        "departmentName": selectedOptionDepartmentName.value,
                        "aisle": 0,
                        "rack": 0,
                        "shelf": "none",
                        "side": "none"
                    }
                ]
            }
        } else {
            items = {
                "NewItems": [
                    {
                        "itemName": itemName,
                        "itemDescription": itemDescription,
                        "itemStockBool": selectedOptionItemStockBool.value,
                        "saleBool": selectedOptionSaleBool.value,
                        "departmentName": selectedOptionDepartmentName.value,
                        "aisle": selectedOptionAisle.value,
                        "rack": selectedOptionRack.value,
                        "shelf": selectedOptionShelf.value,
                        "side": selectedOptionSide.value
                    }
                ]
            }
        }


        console.log(JSON.stringify(items))
        const test = await store_addItems(items, token)
        console.log(test)
        if(test === undefined)
        {
            alert("Opps something went wrong! Item might already exist!")

        }
        else
        {
            handleClickOpen()
            setitemName("")
            setItemDescription(null)
            setSelectedOptionItemStockBool(null)
            setSelectedOptionSaleBool(null)
            setSelectedOptionDepartmentName("")
            setSelectedOptionAisle(null)
            setSelectedOptionRack(null)
            setSelectedOptionShelf(null)
            setSelectedOptionSide(null)
        }


    }

    return(
        <div>
            <h1 style={{textAlign: 'center', fontSize: '120%'}}> Add Item </h1>

            <div style={{padding: '20px'}}>
                <h1 style={{fontSize: '80%'}}> Item Details</h1>
                <TextField
                    id="ItemName"
                    label="Enter Item Name..."
                    value={itemName}
                    onChange={onChangeItemName}
                    fullWidth={true}
                    variant="outlined"
                    inputProps={{ style: {backgroundColor: '#F6F6F6'}}}
                />
                <p></p>
                <TextField
                    id="ItemDescription"
                    label="Enter Item Description..."
                    value={itemDescription || ""}
                    onChange={onChangeItemDescription}
                    fullWidth={true}
                    variant="outlined"
                    inputProps={{ style: {backgroundColor: '#F6F6F6'}}}
                />
                <p></p>
                <Select
                    id="Sale" 
                    onChange={setSelectedOptionSaleBool}
                    value={selectedOptionSaleBool}
                    options={SaleBool}
                    placeholder="Select Sale" >
                </Select>
            </div>

            <div style={{padding: '20px'}}>
                <h1 style={{fontSize: '80%'}}> Location</h1>

                <Select
                    id="Department"
                    onChange={setSelectedOptionDepartmentName}
                    value={selectedOptionDepartmentName}
                    options={Department}
                    placeholder="Select Department"/>
                <p/>

                {"Aisles" === selectedOptionDepartmentName.value  &&  <Select
                    id="Aisle"
                    onChange={setSelectedOptionAisle}
                    value={selectedOptionAisle}
                    options={aisles}
                    placeholder="Select Aisle" >
                </Select>}

                <p/>
                {"Aisles" === selectedOptionDepartmentName.value &&  <Select id="Rack"
                    onChange={setSelectedOptionRack}
                    value={selectedOptionRack}
                    options={Rack}
                    placeholder="Select Rack" />}

                <p/>
                {"Aisles" === selectedOptionDepartmentName.value  &&  <Select
                    id="Shelf"
                    onChange={setSelectedOptionShelf}
                    value={selectedOptionShelf}
                    options={Shelf}
                    placeholder="Select Shelf"/>}

                <p/>
                {"Aisles" === selectedOptionDepartmentName.value  &&  <Select
                    id="Side"
                    onChange={setSelectedOptionSide}
                    value={selectedOptionSide}
                    options={Side}
                    placeholder="Select Side"/>}

            </div>

            <div style={{padding: '20px'}}>
                <h1 style={{fontSize: '80%'}}> Stock</h1>
                <Select
                    id="ItemStockBool"
                    onChange={setSelectedOptionItemStockBool}
                    value={selectedOptionItemStockBool}
                    options={ItemStockBool}
                    placeholder="Select Stock"/>
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