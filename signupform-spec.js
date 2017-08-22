"use strict";

describe("todo.e2e", function() {
    var SUBMIT_TODO_BUTTON = "#submit-todo-button";
    var TODO_MODEL = "todosCtrl.todo.todoMessage";
    var CLOSE_TODO = ".todo-done";

    beforeEach(function() {
        browser.driver.get("http://localhost:8080/");
    })

    describe("creation", function() {
        it("should have the right title", function() {
            expect(browser.driver.getTitle()).toEqual("Sign Up Form");
        })

        it("should accept a user input for name", function() {
            element(By.css('#adultfname')).sendKeys('John');
            browser.pause();
            //expect(browser..k.toEqual("John");
        })
    })
})
