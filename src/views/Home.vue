<script setup>
import Timeline from '@/components/Timeline.vue';
import SkillBlock from '@/components/SkillBlock.vue';
import { ref, onMounted } from "vue"
import { SpinningText } from '../Three/SpinningText.js'

const skills = ref([
    {
        title: 'Web Development',
        color: '#d16464',
        items: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS', 'Python', 'Shopware 6', 'WordPress', 'Git', 'Docker'],
        icons: [
            { name: 'php', label: 'PHP' },
            { name: 'javascript', label: 'JavaScript' },
            { name: 'mysql', label: 'MySQL' },
            { name: 'html', label: 'HTML' },
            { name: 'css', label: 'CSS' },
            { name: 'python', label: 'Python' },
            { name: 'shopware', label: 'Shopware 6' },
            { name: 'wordpress', label: 'WordPress' },
            { name: 'git', label: 'Git' },
            { name: 'docker', label: 'Docker' },
        ],
    },
    {
        title: 'Data & AI',
        color: '#d16464',
        items: ['Daten-Scraping', 'Datenanalyse', 'KI-Modelle'],
        icons: [
            { name: 'scraping', label: 'Daten-Scraping' },
            { name: 'analysis', label: 'Datenanalyse' },
            { name: 'ai', label: 'KI-Modelle' },
        ],
    },
    {
        title: 'Accessibility',
        color: '#d16464',
        items: ['Digitale Barrierefreiheit'],
        icons: [
            { name: 'accessibility', label: 'Digitale Barrierefreiheit' },
        ],
    },
    {
        title: 'Digital Business',
        color: '#d16464',
        items: ['Anforderungsanalyse', 'Prozessmodellierung', 'Agiles Projektmanagement'],
        icons: [
            { name: 'requirements', label: 'Anforderungsanalyse' },
            { name: 'process', label: 'Prozessmodellierung' },
            { name: 'agile', label: 'Agiles Projektmanagement' },
        ],
    },
]);

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
                <SkillBlock
                    v-for="skill in skills"
                    :key="skill.title"
                    :title="skill.title"
                    :items="skill.items"
                    :icons="skill.icons"
                    :color="skill.color"
                />
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