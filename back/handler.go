package main

import (
	"github.com/orcastor/orcas/core"
	"github.com/orcastor/orcas/rpc/util"

	"github.com/gin-gonic/gin"
)

var hanlder = core.NewLocalHandler()

func addUser(ctx *gin.Context) {
	var req struct {
	}
	ctx.BindJSON(&req)
	util.Response(ctx, gin.H{})
}
