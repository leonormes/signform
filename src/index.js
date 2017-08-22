'use strict';
import './styles.css';
import $ from 'jquery';

$('form').submit(function(e) {
	e.preventDefault();
	const formData = document.signup.elements;
	const formValues = getFormInfo(formData);
	writePupilRecord(formValues);
	removeForm();
	formResponse();
	return false;
});

/**
 * getFormInfo
 * Interates through the user entered data
 *
 * @param {object} formData - entered data
 * @returns {object} object ready to send to FB
 */
function getFormInfo(formData) {
	const formInfo = {};
	formInfo.adultfname = formData['adultfname'].value;
	formInfo.adultsurname = formData['adultsurname'].value;
	formInfo.email = formData['email'].value;
	formInfo.phone = formData['phone'].value;
	formInfo.childfname = formData['childfname'].value;
	formInfo.childsurname = formData['childsurname'].value;
	formInfo.dob = formData['dob'].value;
	formInfo.days = dayChoices();
	formInfo.startDate = formData['startdate'].value;
	formInfo.hasStarted = false;
	formInfo.status = 'Waiting';
	formInfo.timeStamp = firebase.database.ServerValue.TIMESTAMP;
	const allergies = document.signup.elements['allergies'];
	formInfo.allergies = allergies.value === 'true';
	const photos = document.signup.elements['photos'];
	formInfo.photos = photos.value === 'true';
	return formInfo;
};

/**
 * dayChoices
 *
 * @returns {array} days user wants
 */
function dayChoices() {
	const days = [];
	const choices = $.makeArray($('input[name=days]:checked'));
	choices.forEach((d) => {
		days.push(d.value);
	});
	return days;
};
const database = firebase.database();

/**
 * writePupilRecord
 *
 * @param {object} pupil - entered form data
 * @returns {null} nothing
 */
function writePupilRecord(pupil) {
	database.ref('pupils/').push(pupil);
	return;
};

/**
 * removeForm
 *
 * @returns {null} an action
 */
function removeForm() {
	$('.content_form').remove();
};

/**
 * formResponse
 *
 * @returns {null} nothing
 */
function formResponse() {
	const messageBox = document.createElement('div');
	const messageText = document.createTextNode('Form Sent. Thank you');
	messageBox.appendChild(messageText);
	const page = $('body')[0];
	page.appendChild(messageBox);
}

