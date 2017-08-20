var _id = 0
var sheet = document.head.appendChild(document.createElement("style")).sheet

function hyphenate (str) {
  return str.replace(/[A-Z]/g, "-$&").toLowerCase()
}

function insert (rule) {
  sheet.insertRule(rule, 0)
}

function createRule (className, decls, media) {
  var newDecls = []
  for (var property in decls) {
    newDecls.push(hyphenate(property) + ":" + decls[property] + ";")
  }
  var rule = "." + className + "{" + newDecls.join("") + "}"
  return media ? media + "{" + rule + "}" : rule
}

function parse (decls, child, media, className) {
  child = child || ""
  className = className || "p" + (_id++).toString(36)

  for (var property in decls) {
    var value = decls[property]
    if (typeof value === "object") {
      var nextMedia = /^@/.test(property) ? property : null
      var nextChild = nextMedia ? child : child + property
      parse(value, nextChild, nextMedia, className)
    }
  }

  insert(createRule(className + child, decls, media))
  return className
}

function merge(a, b) {
  var obj = {}

  for (var i in a) {
    obj[i] = a[i]
  }
  for (var i in b) {
    obj[i] = b[i]
  }

  return obj
}

export default function (h) {
  return function (type) {
    return function (decls) {
      return function (props) {
        return h(type, merge(props, { className: parse(decls) }))
      }
    }
  }
}
