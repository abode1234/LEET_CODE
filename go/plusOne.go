package main

import "fmt"


func plusOne(digits []int) []int {

     lastIdx := len(digits) - 1

   for  idx := lastIdx; idx >= 0; idx-- {

       if digits[idx] <9 {

           digits[idx]++
           return digits
       }

       digits[idx] = 0

       if idx == 0 {
            digits = append([]int{1}, digits...)
           return digits
       }

   }
   return digits
   }

func main() {
    fmt.Println(plusOne([]int{1,2,3}))
    fmt.Println(plusOne([]int{4,3,2,1}))
    fmt.Println(plusOne([]int{9}))
    fmt.Println(plusOne([]int{9,9,9}))
}
