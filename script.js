data.forEach(element => {
  if(element.toggle){
    $section = $(`<div class="section"><h2 class="toggle">${element.title}</h2></div>`);
    $cardsContainer = $(`<div class="inner cards-container"></div>`);
  } else {
    $section = $(`<div class="section"><h2>${element.title}</h2></div>`);
    $cardsContainer = $(`<div class="cards-container"></div>`);
  }
  element.headings.forEach(heading => {
    let html
    if (element.disabled_subtitles && element.disabled_subtitles.includes(heading.subtitle)){
      html = `<div class="card disabled"><div class="heading">${heading.subtitle}</div><div class="description">${heading.description}</div><div class="link"><a href="${heading.link}">Click to Open</a></div></div>`
    }else{
      html = `<div class="card"><div class="heading">${heading.subtitle}</div><div class="description">${heading.description}</div><div class="link"><a href="${heading.link}">Click to Open</a></div></div>`
    }
    $cardsContainer.append(html);
  });
  $section.append($cardsContainer);
  $(".container").append($section);
});

$('.toggle').click(function(e) {
  e.preventDefault();
  var $this = $(this);
  
  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.next().toggleClass('show');
      $this.next().slideToggle(350, () => {
          $this.next().css('display', 'flex')
      });
  }
});
