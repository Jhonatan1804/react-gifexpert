export const getGifs = async( category )  => {

     const url = `https://api.giphy.com/v1/gifs/search?api_key=oPJUQfYy93L0bDh6cXmSUz7xV5P70J9r&q=${ category }&limit=10`;
     const resp = await fetch( url )
     const { data } = await resp.json();
 
    const gifs = data.map( img => ({
         id: img.id,
         title: img.title,
         url: img.images.downsized_medium.url
    }));
 

    return gifs;
 
 }