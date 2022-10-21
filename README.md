# Leap year project
### By Marius Christian Aastebøl
This project is a part of the software engineering course at HIOF.

## Github Actions
First I created this repo and made it publicly available. Afterwards I clicked on the "actions" tab and chose to create a new workflow. Github suggested node.js based on my files. I chose to accept this suggestion Github created a template file for me: node.js.yml.

The node.js.yml file decides what github actions to run and when to run them. My actions are ran when pushing changes to the master repo and when performing pull requests. The workflow runs on an ubuntu "machine" and it tests for node.js versions 14, 16 and 18. First it installs all dependencies by running ```npm ci```. Afterwards it runs ```npm test``` which runs all my tests. This will in practice run jest with coverage. You can see all logs from my pushes under the "Actions" tab.