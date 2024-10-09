CREATE DATABASE todolist;

CREATE TABLE tarefas(
	id INT PRIMARY KEY,
	nomeDoResponsavel VARCHAR(100) NOT NULL,
	descricao TEXT NOT NULL,
	statusTarefa VARCHAR(50) NOT NULL,
	dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


`
HTTP

GET pra pegar dados

POST pra criar dados

PUT pra atualizar dados

DELETE pra deletar dados

`

-- De forma estrutural
`
-- Comandos SQL
show databases;
show tables;
desc tables;
desc databes;

create equivalete ao post 

alter (alter table)

drop 

`

-- De forma funcional

`
SELECT * FROM equivalente ao GET

INSERT INTO equivalente ao POST

UPDATE equivalente ao PUT

DELETE equivalente ao DELETE
`


INSERT INTO tarefas (nomeDoResponsavel,descricao,statusTarefa) 
VALUES ('João','Estudar Docker','Pendente'),
('Maria','Estudar Docker','Pendente'),
('José','Estudar Docker','Pendente'),
('Ana','Estudar Docker','Pendente'),
('Pedro','Estudar Docker','Pendente');

