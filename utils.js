module.exports.parseField = (value, type) => {
  if (type === 'int') {
    return parseInt(value)
  } else if (type === 'bool') {
    if (value === 'true') {
      return true
    } else {
      return false
    }
  } else if (type === 'json') {
    return JSON.parse(value)
  } else {
    return value
  }
}

module.exports.headers = [
  {
    name: 'id',
    type: 'int'
  },
  {
    name: 'name',
    type: 'string'
  },
  {
    name: 'length',
    type: 'int'
  },
  {
    name: 'time',
    type: 'int'
  },
  {
    name: 'level',
    type: 'int'
  },
  {
    name: 'coordNorth',
    type: 'string'
  },
  {
    name: 'coordEast',
    type: 'string'
  },
  {
    name: 'winter',
    type: 'bool'
  },
  {
    name: 'options',
    type: 'string'
  },
]