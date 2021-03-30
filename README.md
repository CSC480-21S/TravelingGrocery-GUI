# Jeff\'s Repo
Each folder is a different ReactJS project that I was working on.

## How to run and setup a project
1. Open terminal, change directory to one of the folders listed, ex: `w3-hello-world`
2. Run `npm install`
3. Open a second terminal, change directory to same one.
4. In second terminal, type `json-server -p 8000 data/db.json`. This will start json-server on port 8000. The .json filename might be different than `db.json` in some projects. Just change directory/filename accordingly.
5. Type `npm start` in first terminal.

## Project Folder Descriptions
1. `w3-hello-world`
	* I followed tutorial at https://youtu.be/w7ejDZ8SWv8.

2. `w5-navbar-routing`
	* Navigation bar with routing to different endpoints.
	
3. `w6-offline-storage`
	* Mock direction data put in data/db.json, hosted using JSON server.
	* Direction data viewable offline by putting data in localStorage.

4. `w7-navbar-improved`
	* Beautified the navbar.

5. `w7-navigation`
	* Sends GET request to JSON server, gets mock list of mock directions that follow endpoint doc spec. , displays those directions step by step.

6. `w8-joined`
	* Justin's login code and grocery list CRUD joined with my code
	* Navigation component sends POST request to `http://pi.cs.oswego.edu:9081/store/nav`

7. `w8-nologin`
	* Doesn't have any of Justin's code
	* Navigation component sends POST request to `http://pi.cs.oswego.edu:9081/store/nav`

8. `w9-navigation-navbar-new-recruits`
	* Meant for new GUI recruits to use
	* Only contains navigation component and navbar, super minimal
	* No local JSON server stuff, we should try to use only actual endpoints from now on
	* Navigation component sends POST request to `http://pi.cs.oswego.edu:9081/store/nav`

## How to get NodeJS installed on CS account
1. Visit `https://nodejs.org/en/download/`and download `Linux Binaries (x64)`
2. Open FileZilla or similar program
3. Navigate to `/home/jcho4/.local/lib/`
4. Create a new directory there called `nodejs`, so after you will have a path of `/home/jcho4/.local/lib/nodejs` available.
5. Copy downloaded file `node-v14.16.0-linux-x64.tar.xz` to `/home/jcho4/.local/lib/nodejs`
6. Open terminal, SSH into CS account, change directory to `/home/jcho4/.local/lib/nodejs`.
7. Type command `tar -xvf node-v14.16.0-linux-x64.tar.xz` to unextract.
8. You can type the commands from here on out at any directory.
9. Type `echo $PATH`, and copy the echoed string this somewhere.
10. This is what is looks like for me. 

`pi:~/Documents/csc480/TravelingGrocery-GUI-Jeff/w8-nologin> echo $PATH`
`/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin`

11. Now we use setenv PATH command. 

Take the echoed path string and append to start of that string the following `/home/jcho4/.local/lib/nodejs/node-v14.16.0-linux-x64/bin:`

What I typed:

`setenv PATH "/home/jcho4/.local/lib/nodejs/node-v14.16.0-linux-x64/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin"`

12. Type `echo $PATH`, the output should be same as what you set.

This is what I get
`pi:~/Documents/csc480/TravelingGrocery-GUI-Jeff/w8-nologin> echo $PATH`

`/home/jcho4/.local/lib/nodejs/node-v14.16.0-linux-x64/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin`

13. Test if its working by typing 

`node -v`
`npm version`

14. You need to repeat step 11 everytime you ssh into CS account again, not sure if theres a fix for this.
