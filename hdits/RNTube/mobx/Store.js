import { observable, action } from 'mobx';

export default class Store {
  @observable
  nextPageToken;

  @observable
  searchItems = [];

  @observable
  searchword = '';

  @observable
  isNewSearch = true;

  @observable
  videoID;

  @action
  setVideoList = (videoList, nextPageToken, searchword) => {
    this.searchItems = videoList;
    this.nextPageToken = nextPageToken;
    this.searchword = searchword;
    this.isNewSearch = true;
    this.videoID = undefined;
  };

  @action
  setSearchword = searchword => {
    this.searchword = searchword;
  };

  @action
  addVideoList = (videoList, nextPageToken) => {
    this.searchItems = [...this.searchItems, ...videoList];
    this.nextPageToken = nextPageToken;
    this.isNewSearch = false;
    this.videoID = undefined;
  };

  @action
  setVideoID = videoID => {
    this.videoID = videoID;
  };

  @action
  clearVideoID = () => {
    this.videoID = undefined;
  };

  @action
  searchEnd = () => {
    this.isNewSearch = false;
  };

  isDetailOpen = () => {
    return this.videoID === undefined ? false : true;
  };
}
