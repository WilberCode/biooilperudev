let  menuMobile = ($)=>{
    // Shorthand 
    const Id = document.getElementById.bind(document)   
    let mobileNav = Id('mobile-nav-wrap')   
    let navToggle = Id('nav-toggle')   
   $('#nav-toggle').on('click', () => {
        navToggle.classList.toggle('nav-toggle-active')
        mobileNav.classList.toggle('nav-active') 
    }) 
   /*  $('#mobile-menu li').on('click',()=>{ 
        navToggle.classList.toggle('nav-toggle-active')
        mobileNav.classList.toggle('nav-active')  
    }) */
    $('#mobile-menu li:not(.menu-item-has-children)').on('click',()=>{  
        navToggle.classList.toggle('nav-toggle-active')
        mobileNav.classList.toggle('nav-active')        
    })
    $('#mobile-menu li.menu-item-has-children').on('click',(e)=>{  
        $(e.currentTarget).toggleClass('open-submenu')  
        $(e.currentTarget).find('ul.sub-menu').toggleClass('sub-menu-active')
       
    })  
    $('#mobile-nav li.menu-item-has-children > a').on('click',(e)=>{ 
      
        if(e.target.className == 'dropdown' || e.target.parentNode.className == 'dropdown' ){
            e.preventDefault()  
            $('.header-menu li.menu-item-has-children .sub-menu').toggleClass('dropdown-active') 
        }  
    })   

    $('#buy-wrap ul li.menu-item-has-children').on('click',(e)=>{   
        $(e.currentTarget).toggleClass('open-submenu')  
        $(e.currentTarget).find('ul.sub-menu').toggleClass('sub-menu-active') 
       
    })  

  $('#buy-wrap ul li.menu-item-has-children > a ').on('click',(e)=>{  
        if(e.target.className == 'dropdown' || e.target.parentNode.className == 'dropdown' ){
            e.preventDefault()   
        }   
    })
}

export default menuMobile
 