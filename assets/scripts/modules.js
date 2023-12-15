class MainFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `
        <section class="column footer w-100 p-5 m-0" style="height:fit-content">
        <div class="row">
        <div class="col-5 flex-column ">
          <img src="assets/icons/logow.svg" width="250" height="100" alt="">
          <a href="" class="btn fw-bold w-100 mb-2 mt-5 text-light" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/maxwillie/30-mins-meeting'});return false;">Schedule time with me</a>
          <a href="./contactus" class="btn fw-bold w-100 btn-outline text-light">Contact Us</a>
          
        </div>
        <div class="col-3">
    
        </div>
        <div class="col-4">
          <h3 class="under text-center text-light mb-5 fw-bold">TALK NOW!</h3>
    
          <div class="row flex-nowrap">
            <i class="text-light h5 fa-solid fa-phone"></i>
            <a class="text-light h6 " style="text-decoration: none;" href="">949-961-1226</a>
          </div>
          <div class="row flex-nowrap">
            <i class="text-light h5 fa-solid fa-envelope"></i>
            <a class="text-light h6 " style="text-decoration: none;" href="">info@masstortguardians.com</a>
          </div>

          
        </div>
        </div>
        <!-- <div class="m-auto mt-5 mb-0 text-center" style="width:fit-content">
        <a href="" class="text-center text-btn text-light h6">© Copyrights reseved to MakeYourOwnWebsite</a>
        </div> -->
      </section>
        `
    }
}
customElements.define('main-footer', MainFooter)

class LawsuitsFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML=`
    <section class="row footer w-100 p-5 m-0">
    <div class="col-5 flex-column ">
      <img src="../assets/icons/logow.svg" width="250" height="100" alt="">
      <a href="" class="btn fw-bold w-100 mb-2 mt-5 text-light" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/maxwillie/30-mins-meeting'});return false;">Schedule time with me</a>
      <a href="../contactus" class="btn fw-bold w-100 btn-outline text-light">Contact Us</a>
      
    </div>
    <div class="col-3">

    </div>
    <div class="col-4">
      <h3 class="under text-center text-light mb-5 fw-bold">TALK NOW!</h3>

      <div class="row flex-nowrap">
        <i class="text-light h5 fa-solid fa-phone"></i>
        <a class="text-light h6 " style="text-decoration: none;" href="">949-961-1226</a>
      </div>
      <div class="row flex-nowrap">
      <i class="text-light h5 fa-solid fa-envelope"></i>
      <a class="text-light h6 " style="text-decoration: none;" href="">info@masstortguardians.com</a>
    </div>

      
    </div>
  </section>`
  }
}
customElements.define('ls-footer', LawsuitsFooter)

class MainHead extends HTMLElement{
  connectedCallback(){
    this.innerHTML=`<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <!-- LINK GOOGLE FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- LINK STYLESHEET BOOTSTRAP FILE -->
    <link rel="stylesheet" href="./assets/styles/bootstrap.css">
    <!-- LINK STYLESHEET CSS FILE -->
    <link rel="stylesheet" href="./assets/styles/style.css">
    <link rel="stylesheet" href="./assets/styles/mobile_style.css">
    <!-- LINK STYLESHEET FONTAWSOME ICONS CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- LINK STYLESHEET OF CALENDLY -->
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
    <!-- LINK SCRIPT OF CALENDLY -->
    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>

  </head>`
  }
}
customElements.define('main-head', MainHead)
class LawsuitsHead extends HTMLElement{
  connectedCallback(){
    this.innerHTML=`
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- LINK GOOGLE FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- LINK STYLESHEET BOOTSTRAP FILE -->
    <link rel="stylesheet" href="../assets/styles/bootstrap.css">
    <!-- LINK STYLESHEET CSS FILE -->
    <link rel="stylesheet" href="../assets/styles/style.css">
    <link rel="stylesheet" href="../assets/styles/mobile_style.css">
    <!-- LINK STYLESHEET FONTAWSOME ICONS CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- LINK STYLESHEET OF CALENDLY -->
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
    <!-- LINK SCRIPT OF CALENDLY -->
    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
    <title>Mass Tort Guardians</title>
    </head>
    `
  }
}
customElements.define('ls-head', LawsuitsHead)

class MainNav extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="assets/icons/logo.svg" width="70%" alt="">
      </a>
      <div class="col-4"></div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item ms-2">
            <a class="nav-link " aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link active" href="about.html">About Us</a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link" href="masstortlawsuits.html">Mass Tort Lawsuits</a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link " href="lawfirms.html">Law Firms</a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link " href="contactus">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`
  }
}
customElements.define('main-nav' , MainNav)
class Lawsuitsnav extends HTMLElement{
  connectedCallback(){
    this.innerHTML=`
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <div class="container-fluid">
      <a class="navbar-brand" href="../">
        <img src="../assets/icons/logo.svg" width="70%" alt="">
      </a>
      <div class="col-4"></div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item ms-2">
            <a class="nav-link " aria-current="page" href="../Home">Home</a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link" href="../about">About Us</a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link active" href="../masstortlawsuits">Mass Tort Lawsuits</a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link " href="../lawfirms">Law Firms</a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link " href="../contactus">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`
  }
}
customElements.define('ls-nav', Lawsuitsnav)
