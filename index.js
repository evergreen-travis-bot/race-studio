'use strict'

const csv = require('fast-csv')

const QUOTE_REGEX = /['"]+/g

function sanetizeLine (line) {
  return line
    .replace(QUOTE_REGEX, '')
    .trim()
}

function appenData (metadata, data) {
  data.forEach(function (rawLine) {
    if (isEmpty(rawLine)) return
    const line = sanetizeLine(rawLine)
    if (!metadata.includes(line)) metadata.push(line)
  })
}

const isEmpty = (str) => str.length === 0
const isMetadata = (breakLineCount) => breakLineCount === 0
const isHeader = (breakLineCount) => breakLineCount === 1

function getDataFromCsv (path, cb) {
  let metadata = []
  let headers = []
  let values = []
  let breakLineCount = 0

  function determineCollection (data) {
    if (isMetadata(breakLineCount)) return metadata
    else if (isHeader(breakLineCount)) return headers
    return values
  }

  function onData (data) {
    if (isEmpty(data)) {
      ++breakLineCount
      return
    }

    const distCollection = determineCollection(data)
    appenData(distCollection, data)
  }

  function onEnd () {
    return cb(null, {metadata, headers, values})
  }

  return csv
    .fromPath(path)
    .on('data', onData)
    .on('end', onEnd)
}

module.exports = getDataFromCsv
