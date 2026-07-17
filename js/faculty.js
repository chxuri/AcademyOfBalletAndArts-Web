const teachers = {


    pervana: {

        name: "Pervana Myradova",

        title: "Artistic Director",

        img: "assets/images/pervana-backbend-pic.jpg",

        bio: `Professional ballerina Pervana Myradova, former soloist of the National Academic Grand Opera and Ballet Theatre, Artistic Director of the Academy of Ballet & Arts, warmly invites children ages 3-18 to join our ballet program.
        `

    },

    alyssa: {

        name: "Alyssa Alber",

        title: "Contemporary Dance Teacher, Choreographer",

        img: "assets/images/alyssa-pic.jpg",

        bio: `Graduated from the University of Iowa with a BFA in dance as well as a second major of Pre-Physical Therapy. At Iowa she trained with phenomenal faculty in the dance department such as Jennifer Kayle, Melinda Jean Meyers, Eloy Barragan, George de la Peña, and Danielle Russo. She primarily studied ballet, contemporary, and modern techniques. She has also had the opportunity and pleasure of participating in the Hubbard Street Dance Chicago intensives for multiple years, the Giordano Dance Chicago intensive, and the Visceral Dance Chicago trainee program. She has worked with choreographers in her career such as Alice Klock, Florian Lochner, Nick Pupillo, Braeden Barnes, and Shannon Alvis. Alyssa started training at Chicago Movement Collective in the Claire Bataille Legacy Program under the direction of Ethan Kirschbaum while in college. She is currently dancing with Cerqua Rivera Dance Theatre and Bodies of Water. 
        \nThis year's achievements: \n- 1st place at the Ballet Championship of America\n- Best Choreography Award\n- Top 5 in Youth America Grand Prix (the most prestige ballet competition in the world)
        \nShe is happy to invite children 3-18 to join contemporary classes at Academy of Ballet and Arts.
        `

    },

    amara: {

        name: "Amara Barnes",

        title: "Classical and Contemporary Teacher",

        img: "assets/images/amara-pic.jpg",

        bio: `Join Amara Barnes, a dedicated and experienced contemporary teacher, for an inspiring dance journey where children build confidence, grace, discipline, and lifelong friendships. Amara Barnes, from Chicago, IL, is an accomplished and very experienced artist with an extended background in training and molding students into accomplished and versatile dancers. Trained by Watmora Casey and Sherry Moray, she gained attention at various summer programs such as Orlando Ballet, Lines Ballet, Giordano Dance, Lou Conte Dance Studio and Ballet Austin with her classical and contemporary versatility on a full scholarship. She then started teaching at age 16 as a guest assistant teacher at the prestigious Julliard School in New York City with Carmen Rostratzen from Lines Ballet and then to be a company dancer for the Walt Disney Company and Orlando Ballet. She has danced worldwide performing for Symbiosis Arts since its beginning in 2016, in works performed at Detroit Dance Festival, Reverb Dance Festival, CDC Fest, Dance Canvas, Dance For Life, RADFest, Bodies of Water Festival. She’s worked with choreographers such as Randy Duncan, Alonzo King, Bruce Marks, Braeden Barnes, Francisco Avina, Nick Pupillo, Anna Long, Shannon Alvis & Noelle Kayser, and Hanna Brictson to name a few. Driven by her classical training and continuous performance work, she takes pride in providing the best teaching possible for Chicagoland and nationally talented dance studios such as A&A Ballet, Grainger Academy of Joﬀrey Ballet, and Symbiosis Arts, and starting the Creative Movement program at Symbiosis since 2020 for special need kids and adults in the Chicagoland area. In addition to her current professional dance and teaching job functions, she graduated with a doctorate degree of psychology in 2021 from Rush Medical.

        `

    },

    bella: {

        name: "Bella Levinson",

        title: "Director",

        img: "assets/images/bella-pic.jpg",

        bio: `A highly accomplished classical ballet instructor with more than 35 years of teaching experience, dedicated to developing dancers with exceptional technique, artistry, and discipline. Received professional ballet training under Eleanora Vlasova, former prima ballerina of the Bolshoi Theatre, whose renowned Russian classical ballet tradition has influenced generations of dancers worldwide. Throughout a distinguished career, has trained and mentored numerous National and Regional Ballet Champions, with students consistently earning top honors at prestigious ballet competitions. Recognized for producing technically strong, expressive, and competition-ready dancers while fostering confidence, artistry, and a lifelong love of dance. 
            `

    }



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