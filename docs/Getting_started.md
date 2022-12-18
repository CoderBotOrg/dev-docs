# Getting started

CoderBot, when in "production" runs in containers hosted on the BalenaOS. To prepare a production runtime, see [Deployment](./Deployment.md) guide.

The following guide is about preparing an environment suitable for development of frontend (WebApp) and backend CoderBot components.

## Choose your development environment

Although a complete environment will be composed of a workstation running nodejs and an IDE and a Raspberry Pi running the Raspberry OS (Linux Debian), it is possible to use a "stub" running in a container on the workstation in order to avoid the requirement of the Raspberry Pi while developing just the frontend. 

These are the possible choices of development environment.

### Web App on Raspberry Pi, backend on Raspberry Pi

The most complete and preferred development environment, it enables development of both components.

1. flash a micro-sd card (at least 8GB RAM, possibly class 10) with the latest release of the Raspberry OS (32bit), using the [Raspberry-provided desktop app](https://www.raspberrypi.com/software/). Do not forget to enable ssh and the WiFi connection configuration.
2. login via ssh to the Raspberry Pi, [download the script to install requirements](https://github.com/CoderBotOrg/system-install/archive/refs/heads/master.zip)
3. run the `install_dev.sh` script in the `system-install` directory.

After the script has been executed, a directory named `coderbot` should be present in the `/home/pi` path.

### Web App on workstation, backend on local docker (stub)


### Web App on workstation, backend on Raspberry Pi


## Installation

### Workstation

### Raspberry Pi

## Make a change


