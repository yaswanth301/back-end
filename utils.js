exports.generateUrl = (file,type) => {
  if (type == "audio") {
    return `/audio/${file.originalname}`;
  } else if (type == "thumbnail") {
    return `/thumbnail/${file.originalname}`;
  }
};
