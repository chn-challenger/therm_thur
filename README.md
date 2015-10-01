## Set up

```
$ git clone https://github.com/hvenables/thermostat_tueday.git
$ cd thermostat_tueday
$ npm install
```
To run the app
```
$ node server.js
```
Go to http://localhost:3000

#####Something i have learnt
difference between `process.cwd()` and `__dirname`
I found this on stack overflow;

`process.cwd()` returns the current working directory,

i.e. the directory from which you invoked the node command.

`__dirname` returns the directory name of the directory containing the JavaScript source code file

I have learnt about directory structure.
You should put all your css and images and javascript inside a public folder,
This should be put inside a app folder.
