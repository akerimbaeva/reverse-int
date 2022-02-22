module.exports = function reverse (n) {
    n = Math.abs(n)
      let str = n.toString()
      let num = '';  
        for(let i = str.length - 1; i>=0; i--) {
            num = num + str[i]
        }
        num = Number(num)
        return num
    }
    
