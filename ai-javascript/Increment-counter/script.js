const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    
    const updateCount = () => {

        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText; // firstly in html set to 0
        
        const speed = 200;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target.toLocaleString();
    }
  };

  updateCount();
});