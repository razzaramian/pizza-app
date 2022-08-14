const SumReduce = (data) => {
  let sum = []

  for (let key in data) {
    sum.push(+data[key].price);
  }

  const total = sum.reduce((sum, arg) => {
    return sum + arg
  }, 0);

  return total
}

export default SumReduce