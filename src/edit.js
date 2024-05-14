import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useState } from "@wordpress/element";
import './editor.scss';
import {  } from "milligram/dist/milligram.css";

export default function Edit({ attributes, setAttributes }) {
	const { users } = attributes;

	const [ formObj, setFormObj ] = useState({ fName: "", lName: "", city: "", gender: "" });

	const formSubmitHandler = (e) => {
        e.preventDefault();
		const newUsers  = [ ...users ];
		newUsers.push(formObj);
		setAttributes({ users: newUsers });
    }

	const onChangeFormHandler = ( property, value ) => {
		setFormObj( ( preObj ) => ( { ...preObj, [ property ]: value } ) );
	}

	const onDeleteItem = (id) => {
		const newUser = [ ...users ];
		newUser.splice( id, 1 );
		console.log( newUser );
		setAttributes( { users: newUser });
	}
	
	return (
		<div { ...useBlockProps() }>
			<form onSubmit={formSubmitHandler}>
				<div>
					<input type="text" onChange={(e) => onChangeFormHandler("fName", e.target.value)} placeholder="Please enter your first name" value={formObj.fName} />
					<br /><br />
					<input type="text" onChange={(e) => onChangeFormHandler("lName", e.target.value)} placeholder="Please enter your first name" value={formObj.lName} />
				</div>
				<br />
				<div>
					<select value={formObj.city}  onChange={(e) => onChangeFormHandler("city", e.target.value)}>
						<option value="">Choose a city</option>
						<option value="brahmanbaria">Brahmanbaria</option>
						<option value="dhaka">Dhaka</option>
					</select>
				</div>
				<br />
				<div>
					<input type="radio" onChange={(e) => onChangeFormHandler("gender", 'Male')} checked={formObj.gender === "Male" }  value="Male" />Male<br />
					<input type="radio" onChange={(e) => onChangeFormHandler("fName", 'Female')} checked={formObj.gender === "Female" }  value="Female" />Female
				</div><br />
				<input type="submit" value="Submit" />
			</form>
			<br />
			<br />
			<table>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>City</th>
						<th>Gender</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((item, i) => (
						<tr key={i}>
							<td>{item.fName}</td>
							<td>{item.lName}</td>
							<td>{item.city}</td>
							<td>{item.gender}</td>
							<td><button onClick={() => onDeleteItem(i)}>Delete</button></td>
						</tr>
					))}
				</tbody>			
				</table>
		</div>
	);
}
