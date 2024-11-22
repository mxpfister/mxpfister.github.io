<template>
    <div class="timeline">
        <div class="timeline-middle">
            <div class="timeline-fill" :style="{ height: fillHeight + '%' }"></div>
        </div>

        <div class="timeline-left">
            <div v-for="(event, index) in events" :key="index">
                <TimelineEvent
                    v-if="isEven(index)"
                    :event="event"
                />
                <div v-else class="placeholder"></div>
            </div>
        </div>

        <div class="timeline-right">
            <div v-for="(event, index) in events" :key="index">
                <TimelineEvent
                    v-if="!isEven(index)"
                    :event="event"
                />
                <div v-else class="placeholder"></div>
            </div>
        </div>
    </div>
</template>

<script>
import TimelineEvent from './TimelineEvent.vue';

export default {
    components: {
        TimelineEvent,
    },
    data() {
        return {
            events: [
                {
                    year: '09/2018-07/2020',
                    title: "Fachhochschulreife",
                    institution: "Fachoberschule Würzburg"
                },
                {
                    year: '10/2020-10/2024',
                    title: "E-Commerce (B. Sc.)",
                    institution: "Technische Hochschule Würzburg-Schweinfurt"
                },
                {
                    year: '09/2022-02/2023',
                    title: "Praktikum in der Web-Entwicklung",
                    institution: "Cutvert GmbH"
                },
                {
                    year: '02/2023-heute',
                    title: "Junior Web Developer (Werkstudent)",
                    institution: "Cutvert GmbH"
                },
                {
                    year: '10/2024-heute',
                    title: "Digital Business Systems (M. Sc.)",
                    institution: "Technische Hochschule Würzburg-Schweinfurt"
                },

            ],
            fillHeight: 0
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollTop = window.scrollY;
            const timelineTop = this.$el.offsetTop;
            const timelineHeight = this.$el.scrollHeight;

            const scrolledPercentage = Math.min(
                ((scrollTop - timelineTop + window.innerHeight - 200) / timelineHeight) * 100,
                100
            );

            this.fillHeight = Math.max(0, scrolledPercentage);
        },
        isEven(index) {
            return index % 2 === 0;
        },
    },
};
</script>
<style scoped>
.timeline {
    width: 80%;
    max-width: 850px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 10px 1fr;
    gap: 20px;
    position: relative;
}

.timeline-middle {
    grid-column: 2;
    position: relative;
    width: 10px;
    background-color: #e0e0e0;
    overflow: hidden;
    grid-row: 1 / span 3;
}

.timeline-fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: var(--sec-color);
    transition: height 0.5s ease-out;
}

.timeline::before {
    content: "\A";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--sec-color);
    position: absolute;
    left: 50%;
    top: -3%;
    transform: translateX(-50%);
    z-index: 999;
}

.timeline-left {
    grid-column: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-right: 30px;
}

.timeline-right {
    grid-column: 3;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 30px;
}

.placeholder {
    height: 132px;
}
</style>