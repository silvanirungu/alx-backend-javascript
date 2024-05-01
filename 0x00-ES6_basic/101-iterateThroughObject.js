export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  reportWithIterator.forEach((name) => {
    if (name === reportWithIterator[reportWithIterator.length - 1]) {
      str += name;
    } else {
      str = `${str + name} | `;
    }
  });

  return str;
}
