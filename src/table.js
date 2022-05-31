<div className="App">
  <div className="container">
    <div className="title-container">
      <div className="title">Name</div>
      <div className="title">Picture</div>
    </div>
    <div className="data-container">
      <div className="data">Title Data</div>
      <div className="data">Picture data</div>
    </div>
  </div>
</div>;


body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  .App {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .container {
    display: flex;
    flex-direction: column;
  }
  
  .title-container {
    display: flex;
    flex-direction: row;
  }
  .data-container {
    display: flex;
    flex-direction: row;
  }
  
  .title {
    width: 200px;
    min-height: 100px;
    background-color: bisque;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .data {
    width: 200px;
    min-height: 100px;
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
  }