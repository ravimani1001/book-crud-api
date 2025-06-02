# 📚 Bookstore REST API

A simple and modularized REST API for managing books, built using **Node.js**, **Express.js**, and **MongoDB**.

This API allows you to:
- Create, Read, Update, and Delete (CRUD) books
- Filter books by title (with **partial and case-insensitive search**)

---

## Live API Deployment

The Bookstore API is deployed and accessible at:

**Base URL:**  
[https://book-crud-api-production.up.railway.app/api/books](https://book-crud-api-production.up.railway.app/api/books)

Use this base URL to test the following endpoints:

- `GET /api/books` — List all books  
- `POST /api/books` — Add a new book  
- `PUT /api/books/:id` — Update a book  
- `DELETE /api/books/:id` — Delete a book  


## Postman Collection

You can download and import the Postman collection to easily test the API:

[BookstoreAPI.postman_collection.json](./postman/BookstoreAPI.postman_collection.json)


---

## 🚀 Features

- 📖 CRUD operations for books
- 🔍 Filter/search by title using regex
- ✅ Modular structure (controllers, routes, models)
- 📦 Environment variable support via `.env`

---

## 🧾 Book Schema

Each book document includes:

```json
{
  "title": "string",
  "author": "string",
  "price": "number",
  "publishedDate": "date"
}
```

> `publishedDate` supports  `YYYY-MM-DD` format.

---

## 📂 Project Structure

```
bookstore-api/
├── controllers/
│   └── bookController.js
├── models/
│   └── Book.js
├── routes/
│   └── bookRoutes.js
├── config/
│   └── db.js
├── .env
├── app.js
├── package.json
└── README.md
```



---

## 🔗 API Endpoints

| Method | Endpoint          | Description             |
|--------|-------------------|-------------------------|
| GET    | `/api/books`      | Get all books or search by title |
| POST   | `/api/books`      | Add a new book          |
| PUT    | `/api/books/:id`  | Update a book by ID     |
| DELETE | `/api/books/:id`  | Delete a book by ID     |

---

## 🔍 Search Books by Title

You can use the `title` query param to search books.

### Example:
```http
GET /api/books?title=atomic
```

This will return all books with titles matching `"atomic"` (case-insensitive, partial matches supported).

---

## 🧪 Testing the API

You can test the endpoints using:
- **Postman Desktop** (recommended)
- Or Frontend Client

> Import the provided Postman collection: `bookstore-api.postman_collection.json`

---

## 📦 Sample JSON for Adding Book

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "price": 299,
  "publishedDate": "16-10-1988"
}
```

---

## 💡 Improvements to Explore

- Add pagination support
- Add author schema with reference
- Implement authentication for CRUD routes
- Add genre/tag filtering
- Deploy to Render/Railway

---

## 🧑‍💻 Author

**Ravi Mani**

- GitHub: [@ravimani1001](https://github.com/ravimani1001)
- Fiverr: [ravi_mani_](https://www.fiverr.com/ravi_mani_)

---

