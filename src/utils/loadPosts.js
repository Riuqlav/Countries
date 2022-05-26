export const loadPosts = async () => {
  const postsTexts = fetch("https://jsonplaceholder.typicode.com/posts");
  const postsPhotos = fetch("https://jsonplaceholder.typicode.com/photos");

  // fetch the full object of posts.

  const [posts, photos] = await Promise.all([postsTexts, postsPhotos]);

  const postsJsonParsed = await posts.json();
  const photosJsonParsed = await photos.json();

  const postsAndPhotos = postsJsonParsed.map((post, index) => {
    return { ...post, cover: photosJsonParsed[index].url };
  });

  return postsAndPhotos;
};
