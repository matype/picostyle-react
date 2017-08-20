# Picostyle for React

[![350 gzip][gzip-badge]][bundlesize]

[gzip-badge]: https://img.shields.io/badge/minified%20&%20gzipped-350%20B-brightgreen.svg
[bundlesize]: https://github.com/siddharthkp/bundlesize

<div align="center">
  <a href="https://github.com/morishitter/picostyle">
    <img width="360px" src="http://morishitter.github.io/picostyle.svg">
  </a>
</div>
<br>

Picostyle React is the package of [Picostyle](https://github.com/picostyle/picostyle) for [React](https://github.com/facebook/react).

[Try it Online](https://codepen.io/morishitter/pen/qXaPYQ?editors=0010)

## Features

- **🚀 The smallest CSS-in-JS library**: Only 0.3 KB (minified & gzipped).
- **👏 Zero dependencies**: And under 60 LOC.
- **💅 Styled components**: Gives you a styled component like [styled-components](https://www.styled-components.com/) that y'all love.
- **❤️ For React**: The 1 KB frontend library family.

## Installation

<pre>
$ npm install <a href="https://www.npmjs.com/package/picostyle-react">picostyle-react</a>
</pre>

## Usage

Picostyle React works well with:

- Media Queries (`@media`)
- Pseudo-element (`::before`)
- Pseudo-classes (`:hover`)

### With React

[Get the Code](https://github.com/picostyle/picostyle-react/tree/master/example)

```js
import React from "react"
import ReactDOM from 'react-dom'
import picostyle from "picostyle-react"

const ps = picostyle(React.createElement)

class Hello extends React.Component {
  render() {
    const keyColor = "#f07"

    const Text = ps("h1")({
      fontSize: "64px",
      cursor: "pointer",
      color: "#fff",
      padding: "0.4em",
      transition: "all .2s ease-in-out",
      ":hover": {
        transform: "scale(1.3)",
      },
      "@media (max-width: 450px)": {
        fontSize: "32px",
      },
    })

    const Wrapper = ps("div")({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      backgroundColor: keyColor,
    })

    return (
      <Wrapper id="pico">
        <Text>Picostyle</Text>
      </Wrapper>
    )
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById("app")
)
```
