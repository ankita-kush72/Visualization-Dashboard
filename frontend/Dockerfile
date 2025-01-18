FROM node:22.5.1-alpine3.20

# RUN apt-get update 
# RUN apt-get install -y gcc curl wget telnet
# RUN rm -rf /var/lib/apt/lists/*

# Set working Directory
WORKDIR /code/app

# Copy project code
COPY . /code/app
# COPY . 

# Decide and expose Port in which python code will be running
EXPOSE 5173

# Run Project
ENTRYPOINT ["/bin/sh", "-c", "/code/app/start.sh"]






