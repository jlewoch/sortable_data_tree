const setPathInArray = (arr, curPath) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].parent = curPath.join('/')

    setPath(arr[i], [...curPath, i])
  }
}
const setPathInObject = (obj, curPath) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
      let updatedPath = [...curPath, key]
      if (!Array.isArray(obj[key])) {
        obj[key].parent = curPath
      }
      setPath(obj[key], updatedPath)
    }
  }
}

export const setPath = (listItem, curPath) => {
  if (curPath === undefined) {
    curPath = []
  }
  if (Array.isArray(listItem)) {
    setPathInArray(listItem, curPath)
  } else if (typeof listItem === 'object') {
    listItem.path = curPath.join('/')
    listItem.depth = curPath.length
    setPathInObject(listItem, curPath)
  }
}

export const searchTree = (tree, itemPath, steps) => {
  if (steps === undefined) {
    steps = 0
  } else {
    steps++
  }
  if (
    itemPath === undefined ||
    itemPath.length === steps ||
    itemPath.length === 1
  ) {
    return tree
  } else {
    return searchTree(tree[itemPath[steps]], itemPath, steps)
  }
}

export const setNewLocation = (
  tree,
  toParentPath,
  itemParentPath,
  itemLocation
) => {
  if (toParentPath.includes(itemParentPath + '/' + itemLocation)) {
    return tree
  }
  toParentPath += '/children'
  searchTree(tree, toParentPath.split('/')).unshift(
    ...searchTree(tree, itemParentPath.split('/')).splice(itemLocation, 1)
  )

  setPath(tree)

  return tree
}

export function flatarr (arr) {
  return arr.reduce((a, x) => {
    let v = {}
    Object.keys(x).map(a =>
      a !== 'children' ? (v = { ...v, [a]: x[a] }) : null
    )
    a = a.concat(v)

    return a.concat(flatarr(x.children))
  }, [])
}
