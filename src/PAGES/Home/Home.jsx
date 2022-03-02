import { Container, Section } from '../../UI/UI';
import './Home.css';
import {gsap} from "gsap";
import { useEffect, useRef } from 'react';

export const Home = () => {
    const h1Ref = useRef(null);
    const txtRef = useRef(null);
    function opacityAnimation() {
        return {
            opacity: 0,
            transform: "translateY(-200px)",
        }, {
            opacity: 1,
            transform: "translateY(0px)",
            duration: 1.5
        }
    }
    useEffect(() => {
        const gsapTL = new gsap.timeline();
    
        gsapTL.fromTo(h1Ref.current, {
            opacity: 0,
            transform: "translateY(-200px)",
        }, {
            opacity: 1,
            transform: "translateY(0px)",
            duration: 1.5
        }).fromTo(txtRef.current, {
            opacity: 0,
            transform: "translateY(-200px)",
        }, {
            opacity: 1,
            transform: "translateY(0px)",
            duration: 3
        }, "-=2");
    }, [])
    return (

        <Section className="home">
            <Container className="home__container">
                <h1 className='home__h1' ref={h1Ref}>
                    SAVE YOU
                </h1>
                <p className="home__text" ref={txtRef}>Мы всегда готовые помочь вашему питомцу</p>
            </Container>
        </Section>

    )
}