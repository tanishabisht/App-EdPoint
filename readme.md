# EdPoint
## Student Mentor System
The link to the website is: https://tanishabisht.github.io/EdPoint-FrontEnd-

## API Requirements
This application requires the following APIs and the respective JSON objects they return.

1. localhost:3000/courses/{username}/all
```
const allCoursesVals = [
    {
        id:0, 
        category:'COURSES', 
        title:'WEB DEVELOPMENT', 
        topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', 
        borderColor:'#f17a7e',
        bgColor:'#f17a7e', 
        username:username, 
        inDesc:'Sed ut perspiciatis unde omnis iste nm accusantium s iste natus error sit voluptatem.', 
        inBorderColor:'#f17a7e', 
        inBgColor:'#fff', 
        inTextColor:'#f17a7e'
    },
    {
        id:0, 
        category:'ENROLLED', 
        title:'WEB DEVELOPMENT', 
        topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', 
        borderColor:'#ffc94b', 
        bgColor:'#ffc94b', 
        username:username, 
        name:'Tanisha Bisht', 
        inDesc:'Sed ut perspiciatis unde omnis iste natus eor sit voluptatem.', 
        inBorderColor:'#ffc94b', 
        inBgColor:'#fff', 
        inTextColor:'#ffc94b'
    }
]
```

2. localhost:3000/courses/{username}?category=ENROLLED
```
const coursesVals = [
    {
        id:0, 
        category:'COURSES', 
        title:'WEB DEVELOPMENT', 
        topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', 
        borderColor:'#f17a7e',
        bgColor:'#f17a7e', 
        username:username, 
        inDesc:'Sed ut perspiciatis unde omnis iste natusptatem accusantium s iste natus error sit voluptatem.', 
        inBorderColor:'#f17a7e', 
        inBgColor:'#fff', 
        inTextColor:'#f17a7e'
    }
]
```

3. localhost:3000/courses/{username}?category=COURSES
```
const enrolledVals = [
    {
        id:0, 
        category:'ENROLLED', 
        title:'WEB DEVELOPMENT', 
        topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', 
        username:username, 
        name:'Tanisha Bisht', 
        inDesc:'Sed ut perspiciatis unde omnis iste natus eor sit voluptatem.', 
        inBorderColor:'#ffc94b', 
        inBgColor:'#fff', 
        inTextColor:'#ffc94b'
    }
]
 ```


4. localhost:3000/courses/all
```
const ALLcourses = [
    {
        id:0, 
        category:'ENROLLED', 
        title:'WEB DEVELOPMENT', 
        topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', 
        name:'Tanisha Bisht', 
        inDesc:'Sed ut perspiciatis unde omnis iste natus eor sit voluptatem.', 
        inBorderColor:'#ffc94b', 
        inBgColor:'#fff', 
        inTextColor:'#ffc94b'
    }
]
 ```


## Team Mates
1. Tanisha
2. Aakriti
3. Harshita