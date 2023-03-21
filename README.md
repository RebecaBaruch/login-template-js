# login-template-js
A project made during a Fatec Web Development class, for trainning JavaScript. It's a simple template for practicing responsiveness and JS events.

![readme me-header (1)](https://user-images.githubusercontent.com/71520936/226642439-24469587-fea8-497d-83a9-4196c3582852.svg)

## Validation
I used some regEx for validating the email and password inputs:
```
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
```

## Logging in
As it's just for experimentation, you can try to logging in using the following user data:
```
const userData = {
    userEmail: "fredbmuniz@gmail.com",
    userPassword: "becaF1lhaLinda"
}
```

The result will be: <br><br>
<img src="https://user-images.githubusercontent.com/71520936/226647144-465ee4ef-e570-4b36-8dd7-e8c38ccf8ffe.svg" width="700px" />

## Deploy
You can try it online at https://login-4equicevq-rebecabaruch.vercel.app/ 
