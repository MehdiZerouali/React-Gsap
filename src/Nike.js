
import React, {useEffect, useRef, useState} from 'react';
import './Nike.css';
import gsap from 'gsap';



function Nike({timeline}) {

    let jordan1 = useRef(null);
    let menu = useRef(null);
    let profile = useRef(null);
    let h1 = useRef(null);
    let p = useRef(null);
    let more = useRef(null);
    let i = useRef(null)
    let jordan2 = useRef(null)
    let back = useRef(null)
    let h2 = useRef(null)
    let summary = useRef(null)
    let summary2 = useRef(null)


    useEffect(() => {
        timeline.to(jordan1,{
            ease: "elastic.out(1, .8)",
            top: "10%",
            rotate: 0,
            duration: 1.5,
        })
        timeline.to(menu,{
            ease: "elastic.out(1, .8)",
            left: 30,
            duration: 1.5
        },0.3)
        timeline.to(profile,{
            ease: "elastic.out(1, .8)",
            right: 30,
            duration: 1.5
        },0.3)
        timeline.to(h1,{
            ease: "elastic.out(1, .8)",
            bottom: "35%",
            duration: 1.5
        },0.3)
        timeline.to(p,{
            ease: "elastic.out(1, .8)",
            bottom: "14%",
            duration: 1.5
        },0.4)
        timeline.from(more,{
            ease: "elastic.out(1, .8)",
            scale: 0,
            duration: 1.5
        },0.6)
    
        
    })

   



    return (
        <div className="container">
            <div className="nav-bar">
                <i class='bx bx-menu-alt-left menu'ref={el => menu = el} ></i>
                <i class='bx bxs-user-circle profile' ref={el => profile = el}></i>
            </div>

            <img className='jordan1' src={"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/48631df8-41fc-4057-933d-6983eb6ced3a/chaussure-jordan-flight-club-91-m0qfvK.png"} alt="" ref={el => jordan1 = el} />

            <h1 ref={el => h1 = el}>Jordan Flight Club '91</h1>
            <p ref={el => p = el}>
            La Jordan Flight Club '91 s'inspire de l’âge d’or du basketball et des sneakers légendaires qui ont dominé les parquets.
            </p>

            <div class="more"  ref={el => more = el}>
                <i class='bx bx-plus-medical'ref={el => i = el}></i>
            </div>
            
            <img className='jordan2' src={"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/194aca08-5d88-408a-bc4c-577ccd71b142/chaussure-jordan-flight-club-91-m0qfvK.png"} alt="" ref={el => jordan2 = el}/>
            <h2 ref={el => h2 = el}>INSPIRÉ PAR LES PLUS GRANDS.</h2>
            <h5 className='summary'ref={el => summary = el}>
            La 91 présente une conception structurée
            en cuir véritable et synthétique contenant un chausson intérieur,
            pour un maintien sûr et confortable.
            </h5>
            <h5 className='summary-2'ref={el => summary2 = el}>
            La Air Jordan 6 est la muse, avec un amorti Air visible, 
            des découpes au niveau du col et une languette à fenêtre 
            rappelant la chaussure de match classique de Michael Jordan.
            </h5>
            <i class='bx bx-arrow-back back-button'ref={el => back = el}></i>
        </div>
    )
}

export default Nike
