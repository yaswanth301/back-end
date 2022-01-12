const fs = require('fs-extra')

exports.generateUrl = (file,type) => {
  if (type == "audio") {
    return `/audio/${file.originalname}`;
  } else if (type == "thumbnail") {
    return `/thumbnail/${file.originalname}`;
  }
};

exports.removeAllAudios = async () => {
  try{
    await fs.emptyDir('./public/audio')
    await fs.emptyDir('./public/thumbnail')
    return true
  }catch(e){
    console.log(e);
    return false
  }
};
