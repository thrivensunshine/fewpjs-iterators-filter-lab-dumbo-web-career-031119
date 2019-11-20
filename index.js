// Code your solution here
findMatching = (arr, name) => {
  return arr.filter(e =>{
    return e.toLowerCase() == name.toLowerCase()
  })
}

function fuzzyMatch(arr, st){
  return arr.filter(e=>{
   const a = e.toLowerCase()
    return a.startsWith(st.toLowerCase())
  })
}

matchName(arr, name){
  return arr.filter(e =>{
    return e.name == name 
  })
}