var trash = document.getElementsByClassName("fa-trash");

//delete entry
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.dataset.id // ro helped me understand this logic, instead of parent noding
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'id':id
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
