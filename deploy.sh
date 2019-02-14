#!/bin/bash

# Build the project.

echo -e "\033[0;32mBuilding React Project and deploying to GH-Pages...\033[0m"
npm run deploy


echo -e "\033[0;32mDeploying Source to GitHub...\033[0m"

git add .

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master
