export const getGifs = async (category) => {
  const url =`https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=DGUEBITQ68xDAllzdEcq9Gf91THJBFPv`;
  const res = await fetch(url);
  const { data } = await res.json();
  
  const gifs = data.map( img => {
    const { id, title, images } = img;
    const { downsized_medium: { url }} = images;
    return { 
      id,
      title,
      url,
    };
  });

  return gifs
};