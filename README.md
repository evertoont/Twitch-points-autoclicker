<h1 align="center">
Twitch Points Autoclicker 
    <img alt="Move.it Logo" src="https://user-images.githubusercontent.com/55769021/114955335-e3109400-9e32-11eb-9a40-625ef06aff13.png" />
</h1>

<p align="center">Script to collect channel points on twitch automatically. Without having to keep the browser open.</p>

<p align="center">
  <a href="https://github.com/evertoont">
    <img alt="Made by Everton Reis" src="https://img.shields.io/badge/made%20by-Everton%20Reis-blue">
  </a>
  <a href="https://github.com/evertoont/Twitch-points-autoclicker/blob/main/LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361?color=blue">
  </a>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/55769021/115093980-5decb400-9ef2-11eb-8089-b521c962c1af.gif" width="85%" />
</p>

### 📜 Requirements

- [Node.js](https://nodejs.org/en/)

### 🚀 How to run

- Clone this repository on your machine:

```bash
$ git clone https://github.com/evertoont/Twitch-points-autoclicker
```

- You can also just download directly from Github

#### Setup

1. Install project dependencies
   - ```bash
       $ yarn install
       // or
       $ npm install
     ```
2. Enter the `src` directory

   - ```bash
       $ cd src/
     ```

   - Modify the following lines in the twitch_collect.js file, if necessary.
     - ```javascript
         const CHROME_PATH = Add the path to the google chrome directory
         const PROFILE_PATH = Add the path to the google chrome user profile directory. Follow the code example.
       ```

3. Run the file `twitch_collect.js`

   - ```bash
       $ node twitch_collect.js
     ```

## 📝 License

<img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361?color=blue">

For more information, see the [LICENSE](LICENSE)

---

<p align="center">Made with 💻 by <a href="https://www.linkedin.com/in/evertoont/">Everton Reis</a></p>

<p align="center">Want to help build this repository? Submit a pull request with your contribution 😉</p>
