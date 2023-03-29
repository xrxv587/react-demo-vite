// const express = require('express');
import express from 'express';
import login from './routers/login';
import todo from './routers/todo';

const app = express();
app.use('/request', [ login, todo ]);

app.listen(5500, () => {
	console.log('on 5500');
});