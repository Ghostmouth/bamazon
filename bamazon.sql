CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL (10, 2) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Bucket of Tar', 'Cosmetics', 29.99, 300), 
       ('Gargling Water', 'Cosmetics', 4.99, 100),
       ('Accessory Storage Bin', 'Accessories', 12.99, 80),
       ('Used Star Wars Toys', 'Toys', 7.99, 500),
       ('Esteban DVD', 'Entertainment', 17.99, 300),
       ('Axe *HOT ITEM*', 'Dangerous Weapons', 2.99, 30),
       ('Minnesota Pond Scum', 'IPA', 7.50, 200),
       ('Arby Doll', 'Toys', 8.99, 300),
       ('Bamazon Gift Card', 'Smart Purchases', 25.00, 500),
       ('A Bike', 'Toys', 80.00, 400);



