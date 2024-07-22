# /bin/bash

echo Removing Node Modules
rm ./node_modules -r
echo Installing dependencies
npm install
echo Starting app
npm run dev
