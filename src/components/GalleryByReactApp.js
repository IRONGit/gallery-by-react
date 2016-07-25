'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.scss');

var imageDatas = require('../data/imageDatas.json');
//自执行函数获取图片路径
imageDatas = (function(imageDataArr) {
    for (var i = 0, j = imageDataArr.length; i < j; i++) {
        var singleImageData = imageDataArr[i];
        singleImageData.imageURL = require('../images/' + singleImageData.fileName);
        imageDataArr[i] = singleImageData;
    }
    return imageDataArr;
})(imageDatas);

var GalleryByReactApp = React.createClass({
    render: function() {
        return (
          <section className="stage">
            <section className="img-sec"></section>
            <nav className="controller-nav"></nav>
          </section>
        );
    }
});
React.render( < GalleryByReactApp / >, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryByReactApp;
