#!/bin/bash
wettyPort="3333"
wettyDir="/usr/_myEnv"
wettyStartCommand="/usr/bin/node app.js -p $wettyPort"

systemctlConfig="[Unit]
Description=web term

[Service]
Type=simple
WorkingDirectory=$wettyDir/wetty
ExecStart=$wettyStartCommand
Restart=always
RestartSec=5";


cd $wettyDir
git clone https://github.com/krishnasrinivas/wetty.git
cd wetty
npm install

echo "Configuring wetty as systemctl service..";
echo "$systemctlConfig" > /etc/systemd/system/_wetty.service
systemctl start "_wetty"
systemctl enable "_wetty"

systemctl status _wetty

echo "Done! Running on $wettyPort";

