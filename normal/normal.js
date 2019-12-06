const mysql = require('mysql');
const express = require('express');
const lighthouse = require('lighthouse');

let response;

exports.lambdaHandler = async (event) => {

    await processSomeData()

    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Function executed',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
}

function processSomeData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}