/* This code is terrible. It will melt your brain. I'm sorry. */
window.onload = function(){

  var lh = 'http://127.0.0.1:';
  var platforms;
  var none = true;

  var img = document.createElement('img');


    platforms = [{
        domain: "8888/static/themes/clean/logo.png",
        name: "Freenet"
      },
      {
        domain: "5001/ipfs/QmU3o9bvfenhTKhxUakbYrLDnZU7HezAVxPM6Ehjw9Xjqy/8f70e85e85c6a23c75c6862292d871c0.png",
        name: "IPFS"
      },
      {
        domain: "43110/1HeLLo4uzjaLetFx6NH3PMwFP3qbRbTf3D/img/logo.png",
        name: "ZeroNet"
      },
      {
          domain: "40902/image/start.jpg",
          name: "Perfect Dark"
      },
      {
        domain: "7657/i2pbote/themes/material/images/favicon.png",
        name: "I2P-Bote"
      },
      {
        domain: "7657/themes/console/light/images/i2plogo.png",
        name: "I2P"
      }];


      platforms.forEach(function(network) {
           var img = document.createElement('img');
           img.src = lh + network.domain;
           img.onload = function() {
               console.log('they have ' + network.name);
               $('#result').append('<td>' + network.name + ': <span class="true">true</span></td>');
               none = false;
           };
           img.onerror = function() {
              $('#result').append('<td>' + network.name + ': <span class="false">false</span></td>');
               console.log('they dont have ' + network.name);
           };
       });
  }
