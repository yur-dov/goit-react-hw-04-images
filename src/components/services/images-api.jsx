const APIKEY = '27774085-63dd68fde82b68f2a8f1036fc'

export default async function fetchImageApi(imageRequest, page) {
  const response = await fetch(
    `https://pixabay.com/api/?q=${imageRequest}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

