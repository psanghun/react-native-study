/**
 * 설정 정보 CLASS
 *
 */
export default class Config {
  API_KEY = process.env.API_KEY;

  /**
   * 검색 URL 조립
   */
  getSearchListURL = searchword => {
    const url =
      'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&q=' +
      searchword +
      '&key=' +
      this.API_KEY;

    return url;
  };
}
