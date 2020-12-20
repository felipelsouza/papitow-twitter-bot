# PAPITOW SIMULATOR

[Papitow](https://twitter.com/PapitowBot) é um bot de twitter que gera frases aleatórias do cantor Supla.

![image](https://user-images.githubusercontent.com/55006796/102719814-05543400-42cf-11eb-8823-096f65133e8d.png)

![Twitter Follow](https://img.shields.io/twitter/follow/papitowbot) ![GitHub](https://img.shields.io/github/license/felipelsouza/papitow-twitter-bot) ![GitHub last commit](https://img.shields.io/github/last-commit/felipelsouza/papitow-twitter-bot) [![GitHub stars](https://img.shields.io/github/stars/felipelsouza/papitow-twitter-bot)](https://github.com/felipelsouza/papitow-twitter-bot/stargazers)

---

## 🚀 Tecnologias

- [NodeJs](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Twitter API](https://developer.twitter.com/en/docs/twitter-api)
- [Lowdb](https://github.com/typicode/lowdb)
- [Heroku](https://www.heroku.com/)

## 🌱 Contribuições

- Faça um **Fork** no repositório e crie uma nova **Branch**
- Faça o **Commit** com suas alterações e abra uma **Pull Request**

Você também pode contribuir com o projeto ao abrir uma nova **Issue**

### 💻 Execução

Após clonar o repositório em sua máquina:

- **Instalando as dependências**:

  - Execute o comando:

  ```
      yarn
  ```

- **Configurando as variáveis de desenvolvimento:**

  - Registre sua conta na [Twitter API](https://developer.twitter.com/en/docs/twitter-api)
    - Crie um novo projeto e gere as chaves e tokens de acesso
  - Na raiz do projeto, crie um novo arquivo chamado `.env`
    - Preencha esse arquivo da seguinte forma:
    ```
        CONSUMER_KEY=chave
        CONSUMER_SECRET=senha da chave
        ACCESS_TOKEN_KEY=token
        ACCESS_TOKEN_SECRET=senha do token
    ```
    - Você também pode escolher a Porta em que o projeto irá rodar ao preencher:
    ```
        PORT=porta escolhida
    ```

- **Rodando o projeto**
  - Execute o comando:
  ```
      yarn run dev
  ```

---

_Feito por Felipe Souza_
