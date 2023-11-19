<script setup lang="ts"></script>

<template>
    <div class="main-layout">
        <div class="navbar">
            <router-link :to="{ path: '/' }" class="link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <path d="M9 22V12h6v10" />
                    </g>
                </svg>
                Home
            </router-link>
            <router-link :to="{ path: '/search' }" class="link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21l-4.3-4.3" />
                    </g>
                </svg>
                Search
            </router-link>
        </div>
        <router-view />
    </div>
</template>

<style scoped lang="scss">
.main-layout {
    position: relative;
    width: 100%;
    min-height: 100vh;
    height: max-content;
    display: grid;
    grid-column: 100%;
    grid-template-rows: 70px calc(100vh - 70px);

    .navbar {
        position: relative;
        width: 100%;
        height: 100%;
        padding-block: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        padding-inline: 20px;
        border-bottom: 1px solid black;

        .link {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            color: black;

            &.active {
                color: rgb(0, 106, 255);
                font-weight: 500;
            }
        }
    }
}
</style>