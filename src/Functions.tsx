import parse from 'url-parse';

interface Imyobj {
  name: string;
  link: string;
}

const findMedia = (RP: string[]) => {
  let myObj: Imyobj[];
  let url;
  let result = '';
  myObj = RP.map(link => {
    url = parse(link, true);
    result = (url.hostname).split('.')[0];
    return {
      name: result,
      link: link
    }
  })
  return myObj;
}

export {
  findMedia
} 