ALTER TABLE LOGIN
DROP COLUMN SENHA_LOGIN;

ALTER TABLE LOGIN
ADD COLUMN SENHA_LOGIN VARCHAR(100) NOT NULL;

ALTER TABLE USUARIO
DROP COLUMN SENHA;

ALTER TABLE USUARIO
ADD COLUMN SENHA VARCHAR(100) NOT NULL;
