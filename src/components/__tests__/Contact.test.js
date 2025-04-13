import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us page test cases",()=>{
    test('should load Contact component on JSDOM', () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument()
     })
     // instead of 'test' we use 'it' also -->
     it('should load button inside Contact component ', () => {
        render(<Contact/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument()
     })
    
     test('should load input name inside Contact component  ', () => {
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("name")
        expect(inputName).toBeInTheDocument()
     })
    
     test('should load 2 input boxes on the Contact component ', () => {
        render(<Contact/>);
    
        //querying
        const inputBoxes = screen.getAllByRole("textbox")
    
        // console.log(inputBoxes.length)
        //Assertion
        expect(inputBoxes.length).not.toBe(3)
    
        expect(inputBoxes.length).toBe(2)
     })
})
