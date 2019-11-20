// Code your solution here
findMatching = (arr, name) => {
  return arr.filter(e =>{
    return e.toLowerCase() == name.toLowerCase()
  })
}

function fuzzyMatch(arr, st){
  return arr.filter(e=>{
    a = e.toLowerCase()
    return e.includes(st.toLowerCase())
  })
}



matchName = () => {
  
}