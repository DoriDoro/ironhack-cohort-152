# install api mockup tool

$ [sudo] npm install -g json-server

# init the project via npm

$ mkdir 1_json_server
$ cd 1_json_server
$ npm init -y

# create a file to seed json-server

$ touch fake-db.json

# then copy the course's JSON object below in fake-db.json

# last, launch json-server in watch mode on port 7777

$ json-server --watch fake-db.json --port 7777

<!---

 {
   "cities":[
      {
         "id":1,
         "name":"Barcelona"
      },
      {
         "id":2,
         "name":"Madrid"
      },
      {
         "id":3,
         "name":"Miami"
      },
      {
         "id":4,
         "name":"Paris"
      }
   ],
   "courses":[
      {
         "id":1,
         "name":"WebDev",
         "type":"Full Time"
      },
      {
         "id":2,
         "name":"WebDev",
         "type":"Part Time"
      },
      {
         "id":3,
         "name":"UX/UI",
         "type":"Full Time"
      },
      {
         "id":4,
         "name":"UX/UI",
         "type":"Part Time"
      }
   ],
   "bootcamps":[
      {
         "id":1,
         "cityId":1,
         "courseId":1
      },
      {
         "id":2,
         "cityId":2,
         "courseId":2
      },
      {
         "id":3,
         "cityId":3,
         "courseId":1
      },
      {
         "id":4,
         "cityId":4,
         "courseId":2
      },
      {
         "id":5,
         "cityId":2,
         "courseId":3
      },
      {
         "id":6,
         "cityId":3,
         "courseId":4
      },
      {
         "id":7,
         "cityId":1,
         "courseId":3
      }
   ]
}

-->