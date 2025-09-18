const data=fetch("https://example.com/data").then(response=>response.json()).then(data=>console.log(data))


//ben sana bu bocu vedigimde banka borcunu oduyeceksin
bankaBorcunuOde(data)