function Login() {

    let username = $('#userName').val();
    let password = $('#password').val();

  
    let dados = new FormData();
    dados.append('op', 1);
    dados.append('username', username);
    dados.append('password', password);
 
  
    $.ajax({
      url: "assets/model/modelFunctions.php",
      method: "POST",
      data: dados,
      cache: false,
      processData: false,
      contentType: false,
      dataType: "html"
    })
  
      .done(function (resposta) {
        let obj = JSON.parse(resposta)
        if(obj.flag == 0 && obj.tipo == 1 && obj.estado == 1) {
          sucesso(obj.msg);
            setTimeout(function(){ 
              window.location.assign('indexdashboard.php');
        }, 1500);
        }else if(obj.flag == 0 && obj.tipo == 2 && obj.estado == 1){
          sucesso(obj.msg);
          setTimeout(function(){ 
            window.location.assign('indexdashboard2.php');
        }, 1500);
        }else if (obj.flag == 0 && obj.tipo == 3 && obj.estado == 1){
          sucesso(obj.msg);
          setTimeout(function(){ 
            window.location.assign('indexdashboard3.php');
        }, 1500);
        }else if (obj.flag == 0 && obj.tipo == 4 && obj.estado == 1){
          sucesso(obj.msg);
          setTimeout(function(){ 
            window.location.assign('indexdashboard4.php');
        }, 1500);
        }else if (obj.flag == 7 && obj.tipo == 7){
            erro(obj.msg)
        }else if (obj.flag == 8 && obj.tipo == 8){
            erro(obj.msg)
        }else if (obj.estado == 2){
            erro("Utilizador Suspenso")
        }else if (obj.estado == 3){
            erro("Utilizador Inativo")
        }
      })
  
      .fail(function (jqXHR, textStatus) {
        erro("Request failed: " + textStatus);
      });
    }

      function logout(){
        let dados = new FormData();
        dados.append('op', 2);
      
        $.ajax({
          url: "assets/model/modelFunctions.php",
          method: "POST",
          data: dados,
          cache: false,
          processData: false,
          contentType: false,
          dataType: "html"
        })
      
          .done(function (resposta) {
            
                sucesso(resposta);
    
                setTimeout(function(){ 
                    window.location.assign('index.html');
                }, 1500);
                
              
            
          })
      
          .fail(function (jqXHR, textStatus) {
            erro("Request failed: " + textStatus);
          });
      }

     /* function sel() {
        const menuLinks = document.querySelectorAll('.menu-link');
        const activeLink = localStorage.getItem("activeLink");

        menuLinks.forEach(link => {
            if (link.getAttribute("href") === activeLink) {
                link.parentNode.classList.add('active');
            }
            link.addEventListener('click', e => {
                e.preventDefault();
                menuLinks.forEach(link => link.parentNode.classList.remove('active'));
                link.parentNode.classList.add('active');
                localStorage.setItem("activeLink", link.getAttribute("href"));
                window.location = link.getAttribute("href");
            });
        });

        const subMenuLinks = document.querySelectorAll('.menu-submenu .menu-link');

        subMenuLinks.forEach(link => {
            if (link.getAttribute("href") === activeLink) {
                link.parentNode.classList.add('active');
            }
            link.addEventListener('click', e => {
                e.preventDefault();
                subMenuLinks.forEach(link => link.parentNode.classList.remove('active'));
                link.parentNode.classList.add('active');
                localStorage.setItem("activeLink", link.getAttribute("href"));
                window.location = link.getAttribute("href");
            });
        });
    }*/

      

 function sucesso(msg){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 2000
    })
  }

  function erro(msg){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: msg,
      showConfirmButton: false,
      timer: 2000
    })

   
}