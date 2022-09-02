const fetchWiki = (searchWord) => {
  var url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='${searchWord}'`;

  return window.fetch(url).then(async (response) => {
    const data = await response.json();
    console.log(data);
    return data;
  });
};

export { fetchWiki };
