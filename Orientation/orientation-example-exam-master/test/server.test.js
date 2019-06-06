'use strict';

const request = require('supertest');
const test = require('tape');
const app = require('../server');  // === const express = require('express');

test('get /api/links', (t) => {
  const message = 'testing';
  request(app)
    .get(`/api/links`)
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      const expected = [{ id: 8, url: 'google.com', alias: 'gugli', hitCount: 7 }];
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');  // === deepEqual, 
      t.end();
    });
  });


  test('get /api/links', (t) => {
    const message = 'testing';
    request(app)
      .post(`/api/links`)
      .send({
        url:"http:google.com", alias: 'google'
      })
      .expect('Content-type', /json/)
      .expect(201)
      .end((err, res) => {
        const expected = [{ id: 8, url: 'google.com', alias: 'gugli', hitCount: 7 }];
        const actual = res.body;

        t.error(err, 'No error');
        t.same(actual, expected, 'Received expected answer');  // === deepEqual, 
        t.end();
      });
    });


/*   app.get('/user', function(req, res) {
    res.status(200).json({ name: 'tobi' });
  });
  
  
  request(app)
    .get('/user')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    .end(function(err, res) {
      if (err) throw err;
    }); */