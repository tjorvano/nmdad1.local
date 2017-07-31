function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 90)
    : cb();
};

ready(function(){
    
    var App={
        
        "init":function(){
            this._unitTesting=false;//unit Testing the features in ApplDbContext or not
            this._widthHandlebarsAndLoDash=true;//use handle ars template engine and lodash or not
            
            this.URLRANDOMUSERME='http://api.randomuser.me/?results=500&callback=json_callback';// Cache the url with random users in variable URLRANDOMUSERME
            
            this._applicationDbContext=ApplicationDbContext;//reference to the appdbcontext object
            this._applicationDbContext.init('ahs.gdm.mmp.gopodog');//initialize the apdbcont object via the methode init, soort van libary om users te beheren
            
            this.userManager=UserManager;//reference to the UserMangar object
            this.userManager.init(this._applicationDbContext);//init the usermanger obj,Do not forget the reference to the this._applicationDbContext variable as a parametervalue of this function
            
            /*html */this._frmLogin=document.querySelector('#form-login');//cache from login
            this.registerEventListeners();//register the event listener for all present elements
            
                this._hbsCache={};//handlebars cache for templates
                this._hbsPartialsCache={};
            this._activeUser=null;//Active User
            
            if(this._unitTesting||this._applicationDbContext.getUsers()==null){
                this._unitTests();
            }
            
        },
        "registerEventListeners":function(){
            //event listeners for form login
            if(this.frmLogin!=null){
                var self=this;//hack for this keyword within an event listener of another oject
                
                this._frmLogin.addEventListener('submit',function(ev){
                    ev.preventDefault();
                    
                    var userName=Utils.trim(this.querySelectorAll('[name="txtUserName"]')[0].value);
                    var passWord=Utils.trim(this.querySelectorAll('[name="txtPassWord"]')[0].value);
                    var result = self._userManager.login(userName, passWord);
                    if(result==null){
                        
                    }else if(result==false){
                        
                    }else{
                        self._activeUser=result.//user is logged in
                        self.upadateUI(); //NOT SURE THOOOO
                    }
    
                    return false;
                    
                    
                });
            }
            
        },
        "updateUI":function(){
            if(this._widthHandlebarAndLoDash){
                this.updateUIDog('list-lecturers','#template-list-lecturers');
            }else{
                this.updateUIOldSchoolLecturers();
            }
        },
         "updateUIOldSchoolLecturers": function() {
            if(this._applicationDbContext.getTinderizeLecturersByUserId(this._activeUser.Id) != null) {
                var tempStr = '';
                var ch = window.innerHeight - 110;
                
                var lecturers = this._applicationDbContext.getTinderizeLecturersByUserId(this._activeUser.Id), lecturer = null;
                for(var i=0;i<lecturers.length;i++) {
                    var lecturer = lecturers[i];
                    tempStr += '<div class="lecturer" data-id="' + lecturer.Id + '">';
                    tempStr += '<div class="lecturer__meta">' + '<span class="lecturer__gender">' + Genders.properties[lecturer.Gender].name + '</span>' + '<span class="lecturer__age">' + Utils.getAge(new Date(lecturer.DayOfBirth)) + '</span>' + '</div>';
                    tempStr += '<picture class="lecturer__picture">';
                    tempStr += '<img src="' + lecturer.Picture + '" />';
                    tempStr += '</picture>';
                    tempStr += '<h3 class="lecturer__name">' + lecturer.FirstName + ' ' + lecturer.SurName + '</h3>';
                    tempStr += '<div class="lecturer__actions">';
                    tempStr += '<span class="material-icons like" data-id="' + lecturer.Id + '" data-tinderize="1">&#xE87D;</span>';
                    tempStr += '<span class="material-icons dislike" data-id="' + lecturer.Id + '" data-tinderize="2">&#xE043;</span>';
                    tempStr += '</div>';
                    tempStr += '</div>';
                };
                
                
        
    }
    
    
    
    
};