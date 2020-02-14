import axios from 'axios';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import API_URL from '../../config/apiUrl';

export const FETCH_STAFF_START = 'FETCH_STAFF_START';
export const FETCH_STAFF_SUCCESS = 'FETCH_STAFF_SUCCESS';
export const FETCH_STAFF_FAILURE = 'FETCH_STAFF_FAILURE';
export const FETCH_NEXTAVAILABLEID = 'FETCH_NEXTAVAILABLEID';

export const getStaffTable = () => dispatch => {
	dispatch({ type: FETCH_STAFF_START });
	axios
		.get(`${API_URL}/staff`)
		.then(res => {
			console.log(res);
			const ids = res.data.map(each => {
				return each.id;
			});
			ids.sort((a, b) => {
				return a - b;
			});
			const nextAvailableID = ids[ids.length - 1] + 1;
			dispatch({ type: FETCH_STAFF_SUCCESS, payload: res.data });
			dispatch({ type: FETCH_NEXTAVAILABLEID, payload: nextAvailableID });
		})
		.catch(err => {
			console.log('err', err);
			dispatch({ type: FETCH_STAFF_FAILURE, payload: err.payload });
		});
};

export const FETCH_STAFFBYID_START = 'FETCH_STAFFBYID_START';
export const FETCH_STAFFBYID_SUCCESS = 'FETCH_STAFFBYID_SUCCESS';
export const FETCH_STAFFBYID_FAILURE = 'FETCH_STAFFBYID_FAILURE';

export const getStaffById = id => dispatch => {
	dispatch({ type: FETCH_STAFFBYID_START });
	axios
		.get(`${API_URL}/staff/${id}`)
		.then(res => {
			console.log('SINGLE STAFF', res);
			dispatch({
				type: FETCH_STAFFBYID_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			console.log(err);
			dispatch({
				type: FETCH_STAFFBYID_FAILURE,
				payload: err.data
			});
		});
};

export const EDIT_STAFFBYID_START = 'EDIT_STAFFBYID_START';
export const EDIT_STAFFBYID_SUCCESS = 'EDIT_STAFFBYID_SUCCESS';
export const EDIT_STAFFBYID_FAILURE = 'EDIT_STAFFBYID_FAILURE';

export const toggleStaffEditComponent = () => dispatch => {
	dispatch({ type: EDIT_STAFFBYID_START });
};

export const editStaffById = (id, state) => dispatch => {
	axios
		.put(`${API_URL}/staff/${id}`, state)
		.then(res => {
			dispatch({
				type: EDIT_STAFFBYID_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: EDIT_STAFFBYID_FAILURE,
				payload: err.data
			});
		});
};

export const ADD_STAFF_START = 'ADD_STAFF_START';
export const ADD_STAFF_SUCCESS = 'ADD_STAFF_SUCCESS';
export const ADD_STAFF_FAILURE = 'ADD_STAFF_FAILURE';

export const toggleAddStaffComponent = () => dispatch => {
	dispatch({ type: ADD_STAFF_START });
};

export const addStaff = staff => dispatch => {
	const { admin, active } = staff;
	const staffNew = {
		...staff,
		admin: admin.value,
		active: active.value
	};
	axios
		.post(`${API_URL}/staff`, staffNew)
		.then(res => {
			const staffAdded = res.data;
			dispatch({ type: ADD_STAFF_SUCCESS, payload: staffAdded });
		})
		.catch(err => {
			console.log('err', err);
			dispatch({ type: ADD_STAFF_FAILURE, payload: err.payload });
		});
};

export const SET_FILTER_STAFF = 'SET_FILTER_STAFF';

export const filterStaffTable = searchTerm => dispatch => {
	dispatch({ type: SET_FILTER_STAFF, payload: searchTerm });
	dispatch({ type: FETCH_STAFF_START });
	axios
		.get(`${API_URL}/staff`)
		.then(res => {
			searchTerm = searchTerm.toLowerCase();
			let staffList = res.data;
			staffList = staffList.filter(staff => {
				if (staff.name && staff.name.toLowerCase().match(searchTerm)) {
					return true;
				}
				if (
					staff.short_name &&
					staff.short_name.toLowerCase().match(searchTerm)
				) {
					return true;
				}
				if (staff.id && staff.id.toString().match(searchTerm)) {
					return true;
				}
				if (staff.cpr && staff.cpr.toString().match(searchTerm)) {
					return true;
				}
				if (
					staff.mobile_number &&
					staff.mobile_number.toString().match(searchTerm)
				) {
					return true;
				}
				if (staff.accent && staff.accent.toLowerCase().match(searchTerm)) {
					return true;
				}
				if (
					staff.teaching_rate &&
					staff.teaching_rate.toLowerCase().match(searchTerm)
				) {
					return true;
				}
				if (staff.gender && staff.gender.toLowerCase().match(searchTerm)) {
					return true;
				}
				if (
					staff.birthdate &&
					staff.birthdate.toLowerCase().match(searchTerm)
				) {
					return true;
				}
				return false;
			});
			dispatch({ type: FETCH_STAFF_SUCCESS, payload: staffList });
		})
		.catch(err => {
			console.log('err', err);
			dispatch({ type: FETCH_STAFF_FAILURE, payload: err.payload });
		});
};
