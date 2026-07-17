const teachers = {


    pervana: {

        name: "Pervana Myradova",

        title: "Artistic Director",

        img: "assets/images/pervana-pic.jpg",

        bio: `
        Belle Vinson has dedicated her career to
        inspiring students through classical ballet
        training. Her teaching philosophy focuses on
        discipline, artistry, and creating a welcoming
        environment where every dancer can grow.
        `

    },



};



const modal = document.getElementById("teacherModal");
const buttons = document.querySelectorAll(".bio-btn");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const teacher = teachers[button.dataset.teacher];

        document.getElementById("modalImg").src = teacher.img;
        document.getElementById("modalName").textContent = teacher.name;
        document.getElementById("modalTitle").textContent = teacher.title;
        document.getElementById("modalBio").textContent = teacher.bio;

        modal.style.display = "flex";

    });

});

document.querySelector(".close").addEventListener("click",()=>{

    modal.style.display="none";

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

});