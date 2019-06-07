'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'istvan',
  password: 'mysqlPractice',
  database: 'aliasdb'
});

connection.connect((err) => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log(`Connected to Database.`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

const mysqlQueryPromise = (mysqlQuery, details) => {
  return new Promise((resolve, reject) => {
    connection.query(mysqlQuery, details,
      (error, data) => {
        error ? reject(error) : resolve(data);
      }
    );
  });
};

app.get('/api/links', (req, res) => {
  mysqlQueryPromise(`SELECT id, url, alias, hitCount FROM alias LIMIT 1`)
    .then(data => res.status(200).json(data))
    .catch(error => console.log(error))
  });
/* connection.query(`SELECT id, url, alias, hitCount FROM alias LIMIT 1`, (err, rows) => {
  if (err) {
    console.log(err.toString());
    res.status(500).send('Database error');
    return;
  }
  res.status(200).json(rows);
}); */

app.post('/api/links', (req, res) => {
  let secretCode;
  mysqlQueryPromise(`SELECT * FROM alias WHERE alias = ?`, [req.body.alias])
    .then(data => {
      if (data.length === 0) { // if alias does not exist
        secretCode = Math.floor(Math.random() * 9999);
        mysqlQueryPromise(`INSERT INTO alias (url, alias, secretCode) VALUES (?, ?, ?);`, [req.body.url, req.body.alias, secretCode])
          .then(status => {
            mysqlQueryPromise(`SELECT * FROM alias WHERE id = ?`, [status.insertId])
              .then(data => res.status(201).json(data))
              .catch(error => console.log(error))
          })
          .catch(error => console.log(error))
      } else {
        res.status(400).send();
      }
    })
    .catch(error => console.log(error))
});
/*  
app.post('/api/links', (req, res) => {
  connection.query(`SELECT * FROM alias WHERE alias = ?`, [req.body.alias], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    if (rows.length === 0) { // if alias does not exist
      let secretCode = Math.floor(Math.random() * 9999);
            connection.query(`INSERT INTO alias (url, alias, secretCode) VALUES (?, ?, ?);`, [req.body.url, req.body.alias, secretCode], (err, status) => {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Database error');
          return;
        }
        connection.query(`SELECT * FROM alias WHERE id = ?`, [status.insertId], (err, rows) => {
          if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
          }
          res.status(201).json(rows);
        });
      });
    } else { // if alias exists
      res.status(400).send();
    }
  });
});
 */

app.delete('/api/links/:id', (req, res) => {
  let reqCode = req.body.secretCode;
  mysqlQueryPromise(`SELECT secretCode FROM alias WHERE id = ?`, [req.params.id])
    .then(data => {
      if (data.length === 0) {
        res.status(404).send();
      } else {
        if (data[0].secretCode === reqCode) {
          mysqlQueryPromise(`DELETE FROM alias WHERE id = ?;`, [req.params.id])
            .then(data => {
              res.status(204).send();
            })
            .catch(error => console.log(error))
        } else {
          res.status(403).send();
        }
      }
    })
    .catch(error => console.log(error))
});

/* 
app.delete('/api/links/:id', (req, res) => {
  connection.query(`SELECT secretCode FROM alias WHERE id = ?`, [req.params.id], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    if (rows.length === 0) {
      res.status(404).send();
    } else {
      if (rows[0].secretCode === reqCode) {
        connection.query(`DELETE FROM alias WHERE id = ?;`, [req.params.id], (err, rows) => {
          if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
          }
          res.status(204).send();
        });
      } else {
        res.status(403).send();
      }
    }
  });
}); */

app.get('/a/:alias', (req, res) => {
  mysqlQueryPromise(`SELECT * FROM alias WHERE alias = ?`, [req.params.alias])
    .then(data => {
      if (data.length === 0) { // if alias does not exist
        res.status(404).send();
      } else { // if alias exists
        mysqlQueryPromise(`UPDATE alias SET hitCount = hitCount + 1 WHERE alias = ?`, [req.params.alias])
          .then(data => {
            mysqlQueryPromise(`SELECT url FROM alias WHERE alias = ?`, [req.params.alias])
              .then(data => {
                res.redirect(data[0].url);
              })
              .catch(error => console.log(error))
          })
          .catch(error => console.log(error))
      }
    })
    .catch(error => console.log(error))
});

/* 
app.get('/a/:alias', (req, res) => {
  connection.query(`SELECT * FROM alias WHERE alias = ?`, [req.params.alias], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    if (rows.length === 0) { // if alias does not exist
      res.status(404).send();
    } else { // if alias exists
      connection.query(`UPDATE alias SET hitCount = hitCount + 1 WHERE alias = ?`, [req.params.alias], (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Database error');
          return;
        }
        connection.query(`SELECT url FROM alias WHERE alias = ?`, [req.params.alias], (err, rows) => {
          if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
          }
          res.redirect(rows[0].url);
        });
      })
    }
  });
}); */

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;