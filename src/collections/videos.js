var Videos = Backbone.Collection.extend({

  model: Video

});

// var commentList = [
//   new Comment('Doug!'), // default to 0 votes
//   new Comment('Doug?', 1),
//   new Comment('Doug.', 2),
//   new Comment('"Doug".', 3),
//   new Comment('Doug?!', 4)];
// Add all of these to a new collection:
// var comments = new Comments(commentList);
  
// var videoArray = [];
// exampleVideoData.forEach(function(video) {
//   videoArray.push(new Video(video));
// });

var videos = new Videos(exampleVideoData.map(function(video) {
  return new Video(video);
}));