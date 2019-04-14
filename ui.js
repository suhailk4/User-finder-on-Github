class UI{

   constructor(){

    this.profile=document.querySelector('#profile');

   }

   showProfile(user){

      this.profile.innerHTML=`
        <div class="card card-body mb-3">
        
                <div class="row">

                   <div class="col-md-3">

                            <img  class="img-fluid mb-2"  src="${user.avatar_url}">
                            <a href="${user.html_url}" target="_blank" class="mb-2 btn btn-primary btn-block">
                            View Profile </a>

                   </div>

                   <div class="col-md-9">

                   <span class="badge badge-primary">Public Repos: ${user.public_repos} </span>
                   <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
                   <span class="badge badge-success">Followers : ${user.followers}</span>
                   <span class="badge badge-info">Following : ${user.following} </span>

                            <br /> <br />

                   <ul class="list-group">
                   
                        <li class="list-group-item"><b>Name:</b> ${user.name} </li>

                         <li class="list-group-item"><b>Company:</b> ${user.company} </li>
              
                         <li class="list-group-item"><b>Blog :</b> ${user.blog} </li>

                         <li class="list-group-item"><b>Location:</b> ${user.location}  </li>

                         <li class="list-group-item"><b> Created At:</b> ${user.created_at}  </li>

                   </ul>


                   </div>


                </div>




        </div>


        <h3 class="page-heading mb-3">Latest Repositories </h3>
        <div  id="repos"> </div>


      `;



   }

   showRepos(repos){

       let output="";
       repos.forEach((repo)=>{

           output+=`
            <div class="card card-body mb-2">

                    <div class="row">

                        <div class="col-md-6">
    
                       <a href="${repo.html_url}" target="_blank">

                                    ${repo.name}

                       </a>


                    </div>


                    <div class="col-md-6">


                    <span class="badge badge-primary">Stars : ${repo.stargazers_count} </span>
                    <span class="badge badge-secondary">Watchers : ${repo.watchers_count}</span>
                    <span class="badge badge-success">Forks : ${repo.forms_count}</span>
                  



                    </div>









                    </div>






            </div>
           



           `;





       })



       document.getElementById('repos').innerHTML=output;



    
   }

//show error user not found


showAlert(message,className){

    this.profile.innerHTML=`
                <div class="container">
                   <div class="row">
                   
                   <div class="col-md-12"> 
                    
                       <div class="${className}">

                            <p class="text-center text-white"> User with this username doesn't exist</p>


                        </div>
                    </div>

                    </div>
                </div>
              `;


}
 


   clearProfile(){
       this.profile.innerHTML="";
   }

}