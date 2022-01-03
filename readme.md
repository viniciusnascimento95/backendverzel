## Documentação da API 🚀

### Tecnologias

- [Python](https://www.python.org/)
- [Pipenv](https://pipenv.pypa.io/en/latest/)
- [Django](https://www.djangoproject.com/)
- [Django REST framework](https://www.django-rest-framework.org/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [ReactJS](https://reactjs.org/)
- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
- [Mysql](https://www.mysql.com/)


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/viniciusnascimento95/backendverzel
```

Entre no diretório do projeto

```bash
  cd backendverzel
```

### Iniciando backend (Django)

Usando docker e docker-compose funcionando com Docker usando Mysql

```bash
  docker-compose up
```
http://localhost:8000/api/

### Iniciando frontend (ReactJS)

Usando NPM

```bash
  cd frontend

  npm install

  npm start
```

http://localhost:3000/    

#### Resources API 

```json
{
  "users": "http://127.0.0.1:8000/api/users/",
  "modules": "http://127.0.0.1:8000/api/modules/",
  "classes": "http://127.0.0.1:8000/api/classes/"
}
```
Obs: Todas as rotas estão usando token de autenticação JWT

## Métodos
Requisições para a API devem seguir os padrões:
| Método   | Descrição                                             |
| -------- | ----------------------------------------------------- |
| `GET`    | Retorna informações de um ou mais registros.          |
| `POST`   | Utilizado para criar um novo registro.                |
| `PUT`    | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema.                        |


## Respostas

| Código | Descrição                                                                            |
| ------ | ------------------------------------------------------------------------------------ |
| `200`  | Requisição executada com sucesso.                                                    |
| `400`  | Erros de validação ou os campos informados não existem no sistema.                   |
| `401`  | Dados de acesso inválidos.                                                           |
| `404`  | Registro pesquisado não encontrado.                                                  |
| `405`  | Método não implementado.                                                             |
| `410`  | Registro pesquisado foi apagado do sistema e não esta mais disponível.               |
| `422`  | Dados informados estão fora do escopo definido para o campo.                         |
| `429`  | Número máximo de requisições atingido.                                               |


## Funcionalidades do desafio

- [x] Os módulos devem estar ordenados por ordem alfabética assim como as aulas ;
- [x] Os módulos devem contabilizar o total de aulas referente;
- [x] Para cadastro das aulas e módulos deverá haver um login administrativo aulas; (Django Admin "localhost:8000/admin")
- [x] Cadastro de usuários;
- [x] Todas as requisições privadas precisam de um token valido gerado no login para funcionamento da requisição;
- [x] O cadastro de aulas devera ter listagem, criação, edição e deleção de registro;
- [x] Os atributos obrigatórios para a aula são : id, nome modulo e data;
- [x] O cadastro de módulos deverá ter listagem, criação, edição e deleção de registro;
- [x] Os atributos obrigatórios para o modulo são: id e nome;
- [x] O backend deverá ser uma API Rest;
- [x] Todos os dados devem ser persistidos no banco de dados;
- [x] Frontend
- [x] Readme com passo a passo

## 🔗 Link Social

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vin%C3%ADcius-nascimento-027507159/)

[viniciusnascimento95 - Github](https://github.com/viniciusnascimento95)


