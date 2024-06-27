# Node - Image Upload

This is a project, a node app that was created to learn how to send files to the server side and store them appropriately.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

## The challenge

The challenge involved creating an application that enables transfering of data(files) to the server side, creating a frontend to test the application while storing the file appropriately and also fetching the stored files to display on the client side.

### Links

- Solution URL: [Add solution URL here](https://github.com/airxist/image-upload)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Node](https://reactjs.org/) - JS library
- [Express](https://nextjs.org/) - React framework

### What I learned

Actually I enjoyed this project, because of the new knowledge it brings. I haven't worked with files before when it comes to the client side input element. So working on it in this project gave me first hand knowledge of what working with files look like and how to transfer the collected data to the server side using the `new FormData()` api.

```js
const photoFile = e.target.files[0];
const formData = new FormData();
formData.append('photo',photoFile);
```

Well the server side brought something unprecedented, as a developer still honing my skill on the backend, this project exposed me to files collection on the server side. Normally I have worked with inputs that involved text, password, email, numbers, e.t.c. This was quite different. Had difficulty retrieving the send file on the backend. After some time of research, I found out that to receive file from the client side, I needed a package that will retrieve the file and pass it on the file property of the req parameter and that introduced me to express-fileupload

```bash
npm i express-fileupload
```

After Installation, just as I said I was able to retrieve and store the file in a folder created in the public folder of the project and that was for storing files locally. Now I was posed with another challenge of not storing files locally. That introduced me to cloudinary

```bash
npm i cloudinary
```
## Author

- Website - [Ofurum Josemaria](https://www.your-site.com)
- Frontend Mentor - [@Da-Hubb](https://www.frontendmentor.io/profile/Da-Hubb)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
- LinkedIn - [Ofurum Josemaria](https://www.linkedin.com/in/josemaria-ofurum-07b878201/)

## Acknowledgments

A big thanks to FreeCodeCamp

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

