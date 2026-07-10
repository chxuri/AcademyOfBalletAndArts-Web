const faculty = {


    pervana: {

        name: "Pervana Myradova",

        role: "Artistic Director",

        image: "assets/images/pervana-pic.jpg",

        bio: `
        Belle Vinson has dedicated her career to
        inspiring students through classical ballet
        training. Her teaching philosophy focuses on
        discipline, artistry, and creating a welcoming
        environment where every dancer can grow.
        `

    },


    teacher1: {

        name:"Instructor Name",

        role:"Ballet Instructor",

        image:"assets/images/teacher1.jpg",

        bio:`
        Instructor biography goes here.
        `

    }


};



function openBio(person){


    const teacher = faculty[person];


    document.getElementById("bioImage").src = teacher.image;

    document.getElementById("bioName").innerHTML = teacher.name;

    document.getElementById("bioRole").innerHTML = teacher.role;

    document.getElementById("bioText").innerHTML = teacher.bio;


    document.getElementById("bioModal")
    .style.display="flex";


}



function closeBio(){

    document.getElementById("bioModal")
    .style.display="none";

}