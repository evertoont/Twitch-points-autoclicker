<h1 align="center">
Twitch Points Autoclicker 
    <img alt="gid project" src="https://user-images.githubusercontent.com/55769021/114955335-e3109400-9e32-11eb-9a40-625ef06aff13.png" />
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
       $ yarn
     ```
2. Open the `env.js` file

- Add crediantials in `usernameTwitch` and `passwordTwitch`
- Modify the following lines, if necessary.
  - ```javascript
      const CHROME_PATH_WINDOWS = Add the path to the google chrome directory WINDOWS
      const CHROME_PATH_LINUX = Add the path to the google chrome directory LINUX.
    ```

3. Enter the src folder and run the file `twitch_collect.js`
   - ```bash
       $ node twitch_collect.js
     ```

## 📝 License

<img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361?color=blue">

For more information, see the [LICENSE](LICENSE)

---

<p align="center">Made with 💻 by <a href="https://www.linkedin.com/in/evertoont/">Everton Reis</a></p>

<p align="center">Want to help build this repository? Submit a pull request with your contribution 😉</p>
