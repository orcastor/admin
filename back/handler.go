package main

import (
	"net/http"

	"github.com/orcastor/orcas/core"
	"github.com/orcastor/orcas/rpc/middleware"
	"github.com/orcastor/orcas/rpc/util"

	"github.com/gin-gonic/gin"
)

var hanlder = core.NewLocalHandler()

func login(ctx *gin.Context) {
	var req struct {
		UserName string `json:"u"`
		Password string `json:"p"`
	}
	ctx.BindJSON(&req)
	_, u, b, err := hanlder.Login(ctx.Request.Context(), req.UserName, req.Password)
	if err != nil {
		util.AbortResponse(ctx, 100, err.Error())
		return
	}
	if u.Role != core.ADMIN {
		ctx.AbortWithStatusJSON(http.StatusForbidden, gin.H{
			"code": http.StatusForbidden,
			"msg":  "no permission",
		})
		return
	}
	token, _, err := middleware.GenerateToken(u.Usr, u.ID, u.Role)
	if err != nil {
		util.AbortResponse(ctx, 100, err.Error())
		return
	}
	util.Response(ctx, gin.H{
		"u":            u,
		"b":            b,
		"access_token": token,
	})
}

func addUser(ctx *gin.Context) {
	var req struct {
	}
	ctx.BindJSON(&req)
	util.Response(ctx, gin.H{})
}
