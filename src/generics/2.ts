type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare (top:Pick<AllType, 'name' | 'color'>, bottom:Pick<AllType, 'position' | 'weight'>):AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

console.log(compare({ name: 'Ann', color: 'black' }, { position: 10, weight: 60 }));