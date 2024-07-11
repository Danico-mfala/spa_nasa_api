import React from "react";

import { screen, render } from "@testing-library/react";

import Navbar from "../components/Navbar";

describe('redering Navbar', () => {
    test('renders Navbar', () => {
        render(<Navbar />);
    })
})