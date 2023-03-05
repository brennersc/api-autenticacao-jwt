
# Api Autenticação JWT - TypeScript

  

## Configuração do projeto

 1. Clone o projeto em seu computador.
 2.  Acesse o projeto pelo terminal.
 3. Configure o .env com suas credencias do banco de dados mysql.

	- Renomeei o arquivo `.env.exemple` para `.env`

    DB_HOST= <ip local>
    DB_PORT= <porta local do banco>
    DB_USER= <usuario para acessar o banco>
    DB_PASS= <senha do usuario>
    DB_NAME= <nome do banco>
    
    PORT= <porta para acesar o projeto>
    
    JWT_PASS= <token>

 4. Tenha em seu computador instalado o NODE e MYSQL.

## Execute os seguintes comando para iniciar o projeto

Nesse projeto estamos trabalhando com [migrations](https://juniorb2s.medium.com/migrations-o-porque-e-como-usar-12d98c6d9269) para facilitar a manipulação do banco de dados

    npm run migration:generate
    npm run migration:run
    
Resposta para obter sucesso

    > api-autenticacao-jwt@1.0.0 migration:generate
    > typeorm-ts-node-commonjs -d ./src/database/data-source.ts migration:generate ./src/migrations/default
    
    > api-autenticacao-jwt@1.0.0 migration:run    
    > typeorm-ts-node-commonjs -d ./src/database/data-source.ts migration:run
    
    query: SELECT  VERSION() AS  `version`    
    query: SELECT * FROM  `INFORMATION_SCHEMA`.`COLUMNS`  WHERE  `TABLE_SCHEMA` = 'SEU BANCO'  AND  `TABLE_NAME` = 'migrations'    
    query: CREATE  TABLE  `migrations` (`id`  int  NOT NULL AUTO_INCREMENT, `timestamp`  bigint  NOT NULL, `name`  varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB    
    query: SELECT * FROM  `SEU BANCO`.`migrations`  `migrations`  ORDER BY  `id`  DESC    
    query: START TRANSACTION    
    query: CREATE  TABLE  `users` (`id`  int  NOT NULL AUTO_INCREMENT, `name`  varchar(255)55) NOT NULL, `email`  varchar(255) NOT NULL, `password`  varchar(255) NOT NULL, QUE    
    UNIQUE  INDEX  `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENnnoGINE=InnoDB NOT NULL, `email`  varchar(255) NOT NULL, `password`  varchar(255) NOT NULL, UNIQUE  INDEX  `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGI    
    query: INSERT INTO  `SEU BANCO`.`migrations`(`timestamp`, `name`) VALUES (?, ?) -- PA PARAMETERS: [1677939300025,"default1677939300025"] RAMETERS: [1677939300025,"default1677939300025"]    
    Migration default1677939300025 has been executed successfully.    
    query: COMMIT

Verifique no banco se foram criadas as tabelas 
	- migration
	- users
	
Rode o comando para executar o projeto

    npm run dev
Resposta para obter sucesso

    > api-autenticacao-jwt@1.0.0 dev
    > nodemon --exec ts-node ./src/index.ts    
	    [nodemon] 2.0.19
	    [nodemon] to restart at any time, enter `rs`
	    [nodemon] watching path(s): *.*
		[nodemon] watching extensions: ts,json
	    [nodemon] starting `ts-node ./src/index.ts`
	    [nodemon] restarting due to changes...
	    [nodemon] starting `ts-node ./src/index.ts
