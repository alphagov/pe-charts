FROM node
RUN apt-get update -qq
RUN apt-get install -y wget curl tar gzip firefox-esr
RUN mkdir -p /opt/geckodriver
WORKDIR /opt/geckodriver
RUN wget https://github.com/mozilla/geckodriver/releases/download/v0.29.1/geckodriver-v0.29.1-linux64.tar.gz
RUN tar -xvzf geckodriver*
RUN chmod +x geckodriver
ENV PATH=${PATH}:/opt/geckodriver:.
RUN npm install -g gulp http-server
WORKDIR /usr/src
