var ligmajs = (function() {
       return {
      inYourWalls: function(interval, type) {
        setInterval(function() {
          if (type === "message") {
            console.log("I'm in your walls");
          } else if (type === "warn") {
            console.warn("I'm in your walls");
          } else if (type === "error") {
            console.error("I'm in your walls");
          } else {
            console.log("Invalid type specified");
          }
        }, interval);
      }
    };
  })();
