const express = require('express')
const path = require('path')
const http = require('http')
const CONST = process.env.PORT || 3000
const socket = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socket(server)


