grpc-crud
==================================
Node, gRPC and Postgres CRUD example.

## Getting started

```sh
# Clone the repository
git clone git@github.com:pinceladasdaweb/grpc-crud.git
cd grpc-crud

# Go to folder client and copy the file .env.example to .env
cp .env.example .env

# Install client dependencies
npm install

# Start client
npm start

# Go to folder server and copy the file .env.example to .env
cp .env.example .env

# Fill the variables DB_USER and DB_PASSWORD
DB_USER=
DB_PASSWORD=

# Install server dependencies
npm install

# Run migration and seed
npm run migrate:latest
npm run seed:run

# Start server
npm start
```

## How to use

```sh
# List all products
curl http://127.0.0.1:3000/api/products

# Read product
curl http://127.0.0.1:3000/api/products/1

# Create product
curl -X POST -d '{"name":"lamp","price":"29.99"}' \
    -H "Content-Type: application/json" http://127.0.0.1:3000/api/products
    
# Update product
curl -X PUT -d '{"name":"lamp","price":"49.99"}' \
    -H "Content-Type: application/json" http://127.0.0.1:3000/api/products/3
    
# Delete product
curl -X DELETE http://127.0.0.1:3000/api/products/3
```

License
-------
MIT
