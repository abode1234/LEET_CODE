package main

import (
	"fmt"
	"math"
	"testing"
)

// Zigzag conversion function
func convert(s string, numRows int) string {
	if numRows == 1 || numRows >= len(s) {
		return s
	}

	// Initialize rows
	rows := make([]string, int(math.Min(float64(numRows), float64(len(s)))))

	curRow := 0
	goingDown := false

	for i := 0; i < len(s); i++ {
		rows[curRow] += string(s[i])

		// Toggle direction when reaching the top or bottom row
		if curRow == 0 || curRow == numRows-1 {
			goingDown = !goingDown
		}

		// Move up or down
		if goingDown {
			curRow++
		} else {
			curRow--
		}
	}

	// Join all rows to form the final result
	result := ""
	for _, row := range rows {
		result += row
	}

	return result
}

// Function to display zigzag text visually
func displayZigzag(s string, numRows int) {
	if numRows == 1 || numRows >= len(s) {
		fmt.Println(s)
		return
	}

	// Initialize rows
	rows := make([]string, int(math.Min(float64(numRows), float64(len(s)))))

	curRow := 0
	goingDown := false

	for i := 0; i < len(s); i++ {
		rows[curRow] += string(s[i])

		// Toggle direction when reaching the top or bottom row
		if curRow == 0 || curRow == numRows-1 {
			goingDown = !goingDown
		}

		// Move up or down
		if goingDown {
			curRow++
		} else {
			curRow--
		}
	}

	// Display the zigzag pattern row by row
	for _, row := range rows {
		fmt.Println(row)
	}
}

// Main function to run the example and display zigzag
func main() {
	var s string
	var numRows int

	fmt.Print("Enter the text to be zigzagged: ")
	fmt.Scanln(&s)
	fmt.Print("Enter the number of rows: ")
	fmt.Scanln(&numRows)

	fmt.Println("\nZigzag Pattern:")
	displayZigzag(s, numRows)

	result := convert(s, numRows)
	fmt.Println("\nConverted Zigzag string:", result)
}

// Test function
func TestConvert(t *testing.T) {
	tests := []struct {
		input    string
		numRows  int
		expected string
	}{
		{"PAYPALISHIRING", 3, "PAHNAPLSIIGYIR"},
		{"PAYPALISHIRING", 4, "PINALSIGYAHRPI"},
		{"A", 1, "A"},
	}

	for _, test := range tests {
		result := convert(test.input, test.numRows)
		if result != test.expected {
			t.Errorf("convert(%q, %d) = %q; want %q", test.input, test.numRows, result, test.expected)
		}
	}
}
