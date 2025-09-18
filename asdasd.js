const resp=await fetch("https://example.com/data")

const data=await resp.json()
//ben sana bu bocu vedigimde banka borcunu oduyeceksin
bankaBorcunuOde(resp)
