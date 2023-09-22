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
      scammer: function(company, amount, cardtype, msgtype) {
        let validcompanies = ['apple', 'google', 'microsoft', 'norton', 'mcafee'];
        let validcardtypes = ['googleplay', 'amazon', 'visa', 'bassproshop'];
        let validmsgtypes = ['alert', 'message'];
        if (validcompanies.includes(company)) {
          if (validcardtypes.includes(cardtype)) {
            if(Number.isInteger(amount)) {
              if (validmsgtypes.includes(msgtype)) {
                if (msgtype = validmsgtypes[0]) {
                  alert('helo my friend this is adam smith from ' + company + '. your computer has a virus and to remove it please send to me a ' + amount + ' dollar ' + cardtype + ' card thank you sir')
                } else if (msgtype = validmsgtypes[1]) {
                  console.log('helo my friend this is adam smith from ' + company + '. your computer has a virus and to remove it please send to me a ' + amount + ' dollar ' + cardtype + ' card thank you sir')
                }
              } else {
                console.error('ligmajs error in module "scammer". invalid msgtype provided: ' + msgtype)
              }
            } else {
              console.error('ligmajs error in module "scammer". invalid amount arg provided: ' + amount)
            }
          } else {
          console.error('ligmajs error in module "scammer". invalid cardtype arg provided: ' + cardtype)
          }
        } else {
          console.error('ligmajs error in module "scammer". invalid company arg provided: ' + company)
        }
      },

    };
  })();
