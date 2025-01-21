const data={
    id:"the-accursed-god",
    author:"Vivek Dutta" 
};

Object.entries(data).map(([url, count]) => ({
    URL: url,
    VisitCount: count,
}));