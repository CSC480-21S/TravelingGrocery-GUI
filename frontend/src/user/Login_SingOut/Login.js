import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { send_Google_User_info } from "../../actions/actions";

import Radio from "@material-ui/core/Radio";
//Images
import logo from "../../images/logo.png";
import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import four from "../../images/four.png";
//API
import { userAccount_login } from "../../api/api";
//Styles
import "./Login.css";
const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [index, setIndex] = useState(0);
	const content = [
		{ image: one, description: "Grocery Shopping made easier with Aisles" },
		{ image: four, description: "Create a List" },
		{ image: three, description: "Share the List" },
		{ image: two, description: "Shop the List" },
	];
	//when Login works
	const onSuccess = async (response) => {
		dispatch(send_Google_User_info(response));
		const token = { token: response.tc.id_token };
		await userAccount_login(token).then((res) => {
			const obj = res.data;
			if (obj.userType === "employee") return history.push("/employee/home");
			if (obj.userType === "admin") return history.push("/admin/home");
			console.log("LOGIN RESPONSE:\n" + JSON.stringify(res.data));
			return history.push("/home");
		});
	};
	//When login is a failute
	const onFailure = (response) => {
		console.log("Error: " + response);
	};

	const handleChange = (event) => {
        setIndex(event.target.value);
        console.log("index is now: " + index)
	};

    const manageIndex = () => {
        if (index == 0) {
            setIndex(1)
            //console.log("index is now: " + 1)
        }
        else if (index == 1) {
            setIndex(2)
            //console.log("index is now: " + 2)
        }
        else if (index == 2) {
            setIndex(3)
            //console.log("index is now: " + 3)
        }
        else if (index == 3) {
            setIndex(0)
            //console.log("index is now: " + 0)
        }

        //(index + 1) > (content.length - 1) ? setIndex(0) : setIndex(index + 1);
        
	};

    useEffect(() => {
        setTimeout(manageIndex, 5000);
    });

	return (
		<div>
			<div id="rectangle">
				<img
					alt=""
					src={logo}
					style={{
						alignContent: "center",
						height: "75px",
						paddingTop: "20px",
					}}
				/>
			</div>
			<div className="infoContainer">
				<img
					className="images"
					src={content[index].image}
					style={{ width: "60%" }}
				/>
				<div className="radioContainer">
					<Radio
						style={{ size: "5px", color: "#222258" }}
						checked={index == 0}
						onChange={handleChange}
						value={0}
						name="radio-button-demo"
						size="small"
					/>
					<Radio
						style={{ size: "5px", color: "#222258" }}
						checked={index == 1}
						onChange={handleChange}
						value={1}
						name="radio-button-demo"
						size="small"
					/>
					<Radio
						style={{ size: "5px", color: "#222258" }}
						checked={index == 2}
						onChange={handleChange}
						value={2}
						name="radio-button-demo"
						size="small"
					/>
					<Radio
						style={{ size: "5px", color: "#222258" }}
						checked={index == 3}
						onChange={handleChange}
						value={3}
						name="radio-button-demo"
						size="small"
					/>
				</div>
				<p className="info">{content[index].description}</p>
				<GoogleLogin
					className="google"
					buttonText="Login with Google"
					onFailure={onFailure}
					onSuccess={onSuccess}
					isSignedIn={true}
					uxMode={"redirect"}
                />
                <p></p>
			</div>
		</div>
	);
};

export default Login;
