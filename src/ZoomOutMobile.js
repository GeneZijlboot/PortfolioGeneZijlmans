export default function ZoomOutMobile() {
    var viewport = document.querySelector('meta[name="viewport"]');
  
    if ( viewport ) {
      viewport.content = "initial-scale=0.1";
      viewport.content = "width=1200";
    }
  }
  