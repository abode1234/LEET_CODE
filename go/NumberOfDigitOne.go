package main

import "fmt"

func countDigitOne(n int) int {

    count  := 0
    factor := 1

    for n/factor > 0 {
        lower := n - (n/factor)*factor // Digits to the right of the current place
        current := (n / factor) % 10   // Current digit
        higher := n / (factor * 10)    // Digits to the left of the current place

        if current == 0 {
            count += higher * factor
        } else if current == 1 {
            count += higher*factor + lower + 1
        } else {
            count += (higher + 1) * factor
        }

        factor *= 10
    }

    return count
}

func main() {
    fmt.Println(countDigitOne(13))
    fmt.Println(countDigitOne(0))
    fmt.Println(countDigitOne(100))
}
