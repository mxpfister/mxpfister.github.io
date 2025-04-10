<script setup>
import Timeline from '@/components/Timeline.vue';
import SkillBlock from '@/components/SkillBlock.vue';
import { ref, onMounted } from "vue"
import { SpinningText } from '../Three/SpinningText.js'

const skills = ref(
    [
        { name: 'HTML', imgUrl: 'images/skill-logos/html.svg', alt: 'HTML Logo', color: '#ffa02e', grading: 9.5 },
        { name: 'CSS', imgUrl: 'images/skill-logos/css.svg', alt: 'CSS Logo', color: '#2965F1', grading: 9 },
        { name: 'JavaScript', imgUrl: 'images/skill-logos/js.svg', alt: 'JavaScript Logo', color: '#ffd600', grading: 7.5 },
        { name: 'PHP', imgUrl: 'images/skill-logos/php.svg', alt: 'PHP Logo', color: '#927ba9', grading: 8 },
        { name: 'Python', imgUrl: 'images/skill-logos/python.svg', alt: 'Python Logo', color: '#0295ec', grading: 6.5 },
    ]
);

onMounted(() => {
    const textContainer = document.querySelector('#spinning-text')
    if (textContainer) {
        new SpinningText(textContainer, '</>', {
            size: 30,
            depth: 5,
            curveSegments: 4,
            bevelThickness: 0
        })
    }
});
</script>
<template>
    <section id="welcome">
        <div class="container">
            <div class="text-wrapper">
                <p class="catch-phrase">Hi, ich bin <br><span class="bold highlight">Max</span></p>
            </div>
            <div class="media-wrapper">
                <img src="@/assets/images/me.webp" alt="Max">
            </div>
            <div class="text-wrapper">
                <p><span class="highlight">Web-Entwickler </span>mit Verständnis
                    für Business und E-Commerce</p>
            </div>
        </div>
    </section>
    <section id="about-me">
        <div class="container">
            <div id="spinning-text" class="media-wrapper"></div>
            <div class="text-wrapper">
                <h2>Über mich</h2>
                <p>Hi, ich bin Web-Entwickler mit Fokus auf die Verbindung von Technik und Business. Mit meinem Bachelor
                    in E-Commerce und dem aktuellen Master-Studium in "Digital Business Systems", bringe ich Kenntnisse
                    mit, die über die reine Entwicklung hinausgehen. <br>Meine Erfahrung als Werkstudent umfasst die Entwicklung
                    individueller Plugins und Themes für WordPress und Shopware 6, sowie die Optimierung von internen Prozessen durch
                    die Entwicklung eines passenden
                    CRM-Systems. Aktuell unterstütze ich als Werkstudent in der IT-Abteilung des Fulfillments von Flyeralarm die Abwicklung und Optimierung logistischer Prozesse. Dabei arbeite ich an Schnittstellen, Datenflüssen und Automatisierungen, um interne Abläufe effizienter zu gestalten.<br> In meiner Freizeit beschäftige ich mit der Programmierung, Smart-Home-Technologien
                    und Automatisierungen. Als Ausgleich betreibe ich gerne Kraftsport, um mich körperlich an meine Grenzen zu bringen.</p>
            </div>
        </div>
    </section>
    <section id="skills">
        <div class="container">
            <h2>Skills</h2>
            <div class="skill-block-wrapper">
                <SkillBlock v-for="skill in skills" :key="skill.imgUrl" :skill-name="skill.name"
                    :image-url="skill.imgUrl" :image-alt="skill.alt" :color="skill.color" :grading="skill.grading" />
            </div>
        </div>
    </section>
    <section id="cv">
        <div class="container">
            <h2>Lebenslauf</h2>
            <Timeline />
        </div>
    </section>
    <section id="socials" aria-labelledby="socials-heading">
        <h2 id="socials-heading" class="visually-hidden">Soziale Netzwerke</h2>
        <div class="socials-wrapper">
            <a href="https://www.linkedin.com/in/max-pfister-a6a363201/" aria-label="LinkedIn Profil von Max Pfister">
                <img src="@/assets/images/social-logos/linkedIn.svg" alt="LinkedIn-Logo">
            </a>
            <a href="https://github.com/mxpfister" aria-label="GitHub Profil von Max Pfister">
                <img src="@/assets/images/social-logos/github-mark-white.svg" alt="GitHub-Logo">
            </a>
        </div>
    </section>
</template>