"use strict";

describe("Fill in Sign up form", function() {

	beforeEach(function() {
		browser.driver.get("http://localhost:8080/");
	})

	describe("Fill out form", function() {
		it("should have the right title", function() {
			expect(browser.driver.getTitle()).toEqual("Sign Up Form");
			browser.pause();
		})

		it("should accept a user input for first name", function() {
			browser.driver.findElement(by.id('adultfname')).sendKeys('John');
		})

		it("should accept a user input for  surname", function() {
			browser.driver.findElement(by.id('adultsurname')).sendKeys('Bunion');
		})

		it("should accept a user input for email", function() {
			browser.driver.findElement(by.id('email')).sendKeys('let@test.com');
		})
	})
})

