document.addEventListener('DOMContentLoaded', () => {
  new App();
});

export default class App {
  constructor() {
    this.render();
  }

  render() {
    const app = document.querySelector('#root');
    if (!app) return;
  }
}


