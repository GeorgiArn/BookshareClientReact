## Bookshare

Bookshare is an innovative web platform in which you can upload your current books and eventually exchange them with other users

### Project structure

The client side consists of different react components distributed in pages (which are also components 😃). Each page corresponds to a different route, set up in the Navigation.js file. The client actively communicates with the backend through HTTP requests. You can access the rest api here: https://github.com/GeorgiArn/BookshareRestApi

### Public Part
```
- Anonymous user
- User can access home page where he can find the most exchanged and newest books
- User can search books through the search engine
- User can access book details page
- User has access to register page.
- User has access to login page.
```

### Private Part
```
- Authorized user
- User has access to his own library in which he can add new books
- User can request a book from other users
- User can accept a book request from other users
- User can access request info page
- User has all of the anonymous user privileges except accessing register and login page
```
