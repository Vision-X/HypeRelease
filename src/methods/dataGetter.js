export const dataGetter = shoe => {
    let arr = [];
    for (let key in shoe) {
      arr.push(shoe[key]);
    }
    return arr;
  };
