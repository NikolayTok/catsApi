const GetCat = async () => {
    return await fetch('https://api.thecatapi.com/v1/images/search', {
       headers: {
        'x-api-key':  "3ffda90e-f6dc-4b95-b8fb-4fa4e6b4739d"
       }
    })
}



export { GetCat }