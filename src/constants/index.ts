export const baseUrl = 'https://dog.ceo/api'

export const FETCH_BREED = () => `${baseUrl}/breeds/list/all`

export const FETCH_BREED_IMAGE = (breed: string, subBreed?: string) => `${baseUrl}/breed/${breed}${subBreed ? `/${subBreed}`: ''}/images/random`