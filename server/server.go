package server

import (
	"log"
	"remit_tracker_server/config"
)

func Init() {
	config := config.GetConfig()
	r := SetupRouter()
	err := r.Run(config.GetString("server.port"))
	if err != nil {
		log.Fatal(err)
	}
}
