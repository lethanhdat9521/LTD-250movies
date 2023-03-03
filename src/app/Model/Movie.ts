interface item{
  id?:string;
  rank?:string;
  title?:string;
  fullTitle?:string;
  year?:string;
  image?:string;
  crew?:string;
  imDbRating?:string;
  ImDbRatingCount?:string;
}

interface JsonGet{
  items?:item[];
  errorMessage?:string;
}

export{
  JsonGet,
  item
}
