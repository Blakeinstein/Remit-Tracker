package main

import (
	"flag"
	"fmt"
	"os"
	"remit_tracker_server/config"
	"remit_tracker_server/server"
)

func main() {
	environment := flag.String("e", "dev", "")
	flag.Usage = func() {
		fmt.Println("Usage: server -e {mode}")
		os.Exit(1)
	}
	flag.Parse()
	config.Init(*environment)
	server.Init()
}
