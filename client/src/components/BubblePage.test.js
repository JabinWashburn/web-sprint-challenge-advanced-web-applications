import axiosWithAuth  from './axiosWithAuth'
import {render, screen, waitFor} from '@testing-library/react'
import BubblePage from './BubblePage'
import React from 'react'


const testColors = () => {
    axiosWithAuth()
        .get("/api/colors")
        .then((response) => setColorList(response.data))
        .catch((error) => console.log(error.response.data))
};

let mockGetColors = testColors()

jest.mock(mockGetColors)
console.log(mockGetColors)

const mockData = [
    {
        color: "aliceblue",
        code: {
            hex: "#f0f8ff",
        },
        id: 1,
    },
    {
        color: "limegreen",
        code: {
            hex: "#99ddbc",
        },
        id: 2,
    },
    {
        color: "aqua",
        code: {
            hex: "#00ffff",
        },
        id: 3,
    },
    {
        color: "aquamarine",
        code: {
            hex: "#7fffd4",
        },
        id: 4,
    },
    {
        color: "lilac",
        code: {
            hex: "#9a99dd",
        },
        id: 5,
    },
    {
        color: "softpink",
        code: {
            hex: "#dd99ba",
        },
        id: 6,
    },
    {
        color: "bisque",
        code: {
            hex: "#dd9a99",
        },
        id: 7,
    },
    {
        color: "softyellow",
        code: {
            hex: "#dcdd99",
        },
        id: 8,
    },
    {
        color: "blanchedalmond",
        code: {
            hex: "#ffebcd",
        },
        id: 9,
    },
    {
        color: "blue",
        code: {
            hex: "#6093ca",
        },
        id: 10,
    },
    {
        color: "blueviolet",
        code: {
            hex: "#8a2be2",
        },
        id: 11,
    },
]

test("Fetches data and renders the bubbles", async () => {
    // Finish this test
    const { rerender } = render(<BubblePage colors={[]} />)

    rerender(<BubblePage missions={mockData} />)

    expect(await screen.findByText(/bubbles/i)).toBeInTheDocument()
    expect(await screen.findByText(/colors/i)).toBeInTheDocument()
})