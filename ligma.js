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
            console.error("ligmajs error in module 'inYourWalls'. invalid type provided:" + type);
          }
        }, interval);
      },
      lagmachine: function() {
        function lag(n) {
          var now = new Date().getTime();
          while( (new Date().getTime()) - now < n*1000 ) {}
      }
      function run() {
          lag(Math.floor(Math.random()*10)+1);
          setTimeout(run, Math.random()*10000);
      }
      run();
      },
      rajesh: function(company, amount, cardtype) {
        let validcompanies = ['apple', 'google', 'microsoft', 'norton', 'mcafee'];
        let validcardtypes = ['googleplay', 'amazon', 'visa', 'bassproshop'];
        if (validcompanies.includes(company)) {
          if (validcardtypes.includes(cardtype)) {
            if(Number.isInteger(amount)) {
              alert('helo my friend this is adam smith from' + company + 'your computer has a virus and to remove it please send to me a ' + amount + 'dollar' + cardtype + 'card thank you sir')
            } else {
              console.error('ligmajs error in module "rajesh". invalid amount arg provided: ' + amount)
            }
          } else {
          console.error('ligmajs error in module "rajesh". invalid cardtype arg provided: ' + cardtype)
          }
        } else {
          console.error('ligmajs error in module "rajesh". invalid company arg provided: ' + company)
        }
      },

    };
  })();
