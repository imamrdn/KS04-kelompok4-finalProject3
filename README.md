# INJS-KS04-kelompok4-finalProject3
### BackEnd menggunakan Express 
### TOKO BELANJA
### Base Url : <https://fp3-production.up.railway.app>

 "Aplikasi ini terdapat seseorang admin dan banyak customer yang memiliki wewenang untuk melakukan proses **CRUD** terhadap category dan product hanyalah admin saja. Sedangkan customer hanya bisa melakukan proses pembelian product dan melihat data transaksi pembeliannya, customer juga dapat melakukan top-up saldo untuk menambahkan saldo."


* * *
##
# User
- Register (POST) : https://fp3-production.up.railway.app/users/register/
- Login (POST) : https://fp3-production.up.railway.app/users/login/
- Topup (PATCH) : https://fp3-production.up.railway.app/users/topup
- Delete (DELETE) : https://fp3-production.up.railway.app/users/:id

# Kategori
- GetAll (GET) : https://fp3-production.up.railway.app/categories/
- Create (POST) : https://fp3-production.up.railway.app/categories/
- Delete (DELETE) : https://fp3-production.up.railway.app/categories/:id


# Product
- Create (POST) : https://fp3-production.up.railway.app/products/
- GetAll (GET) : https://fp3-production.up.railway.app/products/
- UpdateAll (PUT) : https://fp3-production.up.railway.app/products/:id
- UpdateById (PUT) : https://fp3-production.up.railway.app/products/:id
- Delete (DELETE) : https://fp3-production.up.railway.app/products/:id


# Transaction-History
- Create (POST) : https://fp3-production.up.railway.app/transactions/
- GetAll (GET) : https://fp3-production.up.railway.app/transactions/user
- Admin (GET) : https://fp3-production.up.railway.app/transactions/admin
- TransactionId (GET) : https://fp3-production.up.railway.app/transactions/:id
