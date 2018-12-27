/**
 * 설정 정보 CLASS
 *
 */
export default class Config {
  API_KEY = 'AIzaSyDlOPb34gl1P87Ly9oFlrV3K0kjQ96OpFs';

  /**
   * 검색 URL 조립
   */
  getSearchListURL = searchword => {
    const url =
      'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' +
      searchword +
      '&key=' +
      this.API_KEY;

    return url;
  };
}
