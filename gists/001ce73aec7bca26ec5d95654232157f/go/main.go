package main

import (
	"fmt"
	"time"
)

func calc(n uint64) float64 {
	piOver4 := 0.0
	for i := uint64(0); i < n; i++ {
		term := 1.0 / (2.0*float64(i) + 1.0)
		if i%2 == 0 {
			piOver4 += term
		} else {
			piOver4 -= term
		}
	}
	return piOver4 * 4.0
}

func main() {
	sum := 0.0
	for i := 0; i < 20; i++ {
		start := time.Now()

		for i := 0; i < 1000; i++ {
			sum += calc(1000000)
		}

		duration := time.Since(start)
		fmt.Println(duration)
	}
	fmt.Println(sum)
}
