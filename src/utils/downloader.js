
const STATUS_ERR = -1
const STATUS_STABLE = 0
const STATUS_LOADING = 1
const STATUS_DONE = 0
export class Downloader {
  #xhr;
  #filename;
  #url;
  #blob;
  constructor(url, filename){
    this.#xhr = null;
    this.#url = url;
    this.#filename = filename
    this.status = STATUS_STABLE
  }
  setFileName(val){
    this.#filename = val
  }
  getFileName(){
    return this.#filename
  }
  setUrl(val){
    this.#url = val
  }
  getUrl(){
    return this.#url
  }
  start(){
    if(this.status === STATUS_STABLE || this.status === STATUS_ERR){
      console.log('start')
      this.#status = STATUS_LOADING
    }
  }
  stop(){
    if(this.status === STATUS_LOADING){
      console.log('stop')
      this.#blob = null
      this.status = STATUS_STABLE
    }
  }
  pause(){
    console.log('pause')
  }
  resume(){
    console.log('resume')
  }
  #getBlob = function(){
    console.log('getBlob')
  }
  #saveAs = function(){
    console.log('saveAs')
  }
}
