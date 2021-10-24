import { NextApiResponse } from 'next';
import { getTopTracks } from '../../lib/spotify';

interface ISpotifyURL {
  spotify : string;
}
interface ISpotifyAlbumURL{
  url : string;
}
interface ISpotifyAlbum{
  images: ISpotifyAlbumURL[],
  name: string;
}
interface ISpotifyArtists{
  name: string;
}
interface ITrack  {
  artists : ISpotifyArtists[],
  external_urls: ISpotifyURL,
  name: string,
  album: ISpotifyAlbum
}

export default async (_: any, res : NextApiResponse) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track: ITrack) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    art: track.album.images[1].url,
    album: track.album.name
  }));
  return res.status(200).json({ tracks });
};