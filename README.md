# Jeff\'s Repo
Each folder is a different ReactJS project that I was working on.

## How to run
1. Open terminal, change directory to one of the folders listed, ex: `w3-hello-world`
2. Run `npm install`
3. Open a second terminal, change directory to same one.
4. In second terminal, type `json-server -p 8000 data/db.json`. This will start json-server on port 8000.
5. Type `npm start` in first terminal.

## Folder List

1. `w3-hello-world`
	* I followed tutorial at https://youtu.be/w7ejDZ8SWv8. I did this to gain experience on ReactJS.

2. `w5-navbar-routing`
	* Navigation bar with routing to different endpoints on the navigation links.
	
3. `w6-offline-storage`
	* Mock direction data put in data/db.json, hosted using JSON server.
	* Direction data viewable offline by putting data in localStorage.

4. `w7-navbar-improved`
	* Logo in top left corner, background color #333399
	* Navigation text links and hamburger menu when window size small is in top right corner
	* Search component in center of screen below navbar
	* Developer link in navbar has stuff from `w6-offline-storage`, where I tested offline stuff
