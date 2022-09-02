const fetchWiki = (searchWord) => {
    var url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&prop=pageimages|extracts&exintro&explaintext&exchars=200&pithumbsize=100&gsrnamespace=0&gsrlimit=5&gsrsearch='${searchWord}'`;
    const abortCtrl = new AbortController()
    return [window.fetch(url, {signal:abortCtrl.signal}).then(async (response) => {
        const data = response.json();
        console.log(data)
        return await data;
    }), abortCtrl]
};

export {fetchWiki};
