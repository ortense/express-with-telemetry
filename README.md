# POC express-node-metrics

A experiment with [express-node-metrics](https://www.npmjs.com/package/express-node-metrics)

This repository contains a "in memory CRUD" writed with express

## instalation

This project use [node-gyp](https://github.com/nodejs/node-gyp) to compile the `node-express-metrics`, because of that you will also need to install:

### On Unix

   * `python` (`v2.7` recommended, `v3.x.x` is __*not*__ supported)
   * `make`
   * A proper C/C++ compiler toolchain, like [GCC](https://gcc.gnu.org)

### On Mac OS X

   * `python` (`v2.7` recommended, `v3.x.x` is __*not*__ supported) (already installed on Mac OS X)
   * [Xcode](https://developer.apple.com/xcode/download/)
     * You also need to install the `Command Line Tools` via Xcode. You can find this under the menu `Xcode -> Preferences -> Downloads`
     * This step will install `gcc` and the related toolchain containing `make`

### On Windows

#### Option 1

Install all the required tools and configurations using Microsoft's [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools) using `npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe (run as Administrator).

#### Option 2

Install tools and configuration manually:
   * Visual C++ Build Environment:
     * Option 1: Install [Visual C++ Build Tools](http://landinghub.visualstudio.com/visual-cpp-build-tools) using the **Default Install** option.

     * Option 2: Install [Visual Studio 2015](https://www.visualstudio.com/products/visual-studio-community-vs) and select *Common Tools for Visual C++* during setup. This also works with the free Community and Express for Desktop editions.  

   * Install [Python 2.7](https://www.python.org/downloads/) (`v3.x.x` is not supported), and run `npm config set python python2.7` (or see below for further instructions on specifying the proper Python version and path.)
   * Launch cmd, `npm config set msvs_version 2015`


### After intall and configura C/C++ compiler and python 2.7

Use the command `npm i` to install all dependencies and `npi start` to run this project


## routes

### API

 - POST /api
    - send a JSON body to save in memory
 - GET /api
    - list all objects in memory
 - GET /api/:id
    - get object by id
 - PUT /api/:id
    - send a JSON body to update an object
 - DELETE /api/:id
    - delete an object

If you want force an error send a invalid JSON body on POST or PUT

### Metrics

 - GET /metrics
 - GET /metrics/process
 - GET /metrics/internal
 - GET /metrics/api