jQuery(document).ready(function($){
  jQuery(".acr_accordion").kricordion({
      animationSpeed: 900,    // animation duration in milliseconds
      autorotation: true,     // autorotation true or false?
      autorotationSpeed:5,    // duration between autorotation switch in Seconds
      event: 'mouseover',     // event to focus a slide: mouseover or click
      imageShadow:true,     // should the image get a drop shadow to the left
      imageShadowStrength:0   // how dark should that shadow be, recommended values: between 0.3 and 0.8, allowed between 0 and 1
  });
});