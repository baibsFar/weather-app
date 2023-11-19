<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useWeatherService } from '@/services';
import { WeatherCurrentResult } from '@/types/weather.type';
import { isEmpty } from '@/utils'

const search = ref<string>('')
const results = ref<WeatherCurrentResult>({} as WeatherCurrentResult)
const message = ref<string>('')

const handleEnterKeyDown = async (e: KeyboardEvent) => {

    function handleMessage(_messageRef: Ref<string>, text: string) {
        _messageRef.value = text
        const timer = setTimeout(() => {
            _messageRef.value = ''
            clearTimeout(timer)
        }, 2500)
    }

    try {
        if (e.key === 'Enter') {
            const current = await useWeatherService().getCurrent(search.value)
            if (!isEmpty(current))
                results.value = current
            else {
                handleMessage(message, 'No result according to the search.')
            }
        }
    } catch (err) {
        handleMessage(message, 'An error has occured.')
    }
}
</script>

<template>
    <div class="home">
        <div class="banner">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 2v2m-7.07.93l1.41 1.41M20 12h2m-2.93-7.07l-1.41 1.41m-1.713 6.31a4 4 0 0 0-5.925-4.128M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
            </svg><br>
            <h1>
                Welcome to the Weather App.
            </h1>
        </div>
        <div class="search">
            <div class="container">
                <input type="text" v-model="search" @keyup="handleEnterKeyDown" name="search" id="search"
                    placeholder="Eg: France">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21l-4.3-4.3" />
                    </g>
                </svg>
            </div>
        </div>
        <div class="message" v-if="message.length > 0">
            <div class="container">{{ message }}</div>
        </div>
        <div class="results" v-if="!isEmpty(results)">
            <div class="container">
                <div class="item">
                    <h2>{{ results.location.name }}</h2>
                </div>
                <div class="item"></div>
                <div class="item">
                    <h3>Local time</h3>
                    <p>{{ results.location.localtime.split(' ')[1] }}</p>
                </div>
                <div class="item">
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2m7.6-7.4A2 2 0 1 1 11 8H2m10.6 11.4A2 2 0 1 0 14 16H2" />
                        </svg>
                        Wind
                    </h3>
                    <p>{{ results.current.wind_kph }} kph</p>
                </div>
                <div class="item">
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <path fill="currentColor"
                                d="M5 3.5a2.5 2.5 0 1 1 5 0v5.45a3.5 3.5 0 1 1-5 0V3.5ZM7.5 2A1.5 1.5 0 0 0 6 3.5v5.887l-.166.15a2.5 2.5 0 1 0 3.333 0L9 9.386V3.5A1.5 1.5 0 0 0 7.5 2ZM8 6a.5.5 0 0 0-1 0v4.085a1.5 1.5 0 1 0 1 0V6Z" />
                        </svg>
                        Temperature
                    </h3>
                    <p>{{ results.current.temp_c }} °C - {{ results.current.temp_f }} °F</p>
                </div>
                <div class="item">
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                            <path fill="currentColor"
                                d="M16 16h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm4-8a3.898 3.898 0 0 1-4-3.777a3.902 3.902 0 0 1 .653-2.064l2.517-3.745a1.038 1.038 0 0 1 1.66 0l2.485 3.696A3.97 3.97 0 0 1 24 8.223A3.898 3.898 0 0 1 20 12zm0-7.237l-1.656 2.463a1.89 1.89 0 0 0-.344.997A1.9 1.9 0 0 0 20 10a1.9 1.9 0 0 0 2-1.777a1.98 1.98 0 0 0-.375-1.047z" />
                            <path fill="currentColor"
                                d="M28 4a2.002 2.002 0 0 0-2 2v20H6V10h2v8l1 2l1-2v-8h2v4l1 2l1-2V8H6V6a2.002 2.002 0 0 0-2-2H2v2h2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6h2V4Z" />
                        </svg>
                        Precipitation
                    </h3>
                    <p>{{ results.current.precip_in }} inch</p>
                </div>
                <div class="item">
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 40 40">
                            <g fill="currentColor">
                                <path
                                    d="M28.369 20.018c-1.985-6.528-7.827-13.495-8.124-13.847a.495.495 0 0 0-.731 0c-.297.352-6.14 7.318-8.126 13.847c-.407 1.339-.665 2.662-.665 3.903c0 5.048 4.108 9.155 9.156 9.155c5.048 0 9.154-4.107 9.154-9.155c.001-1.241-.257-2.563-.664-3.903zM19.88 32.12c-4.521 0-8.199-3.678-8.199-8.198c0-1.227.273-2.553.709-3.903c1.737-5.375 6.183-11.156 7.49-12.781c1.307 1.625 5.753 7.406 7.488 12.781c.436 1.351.709 2.676.709 3.903c0 4.52-3.677 8.198-8.197 8.198z" />
                                <path
                                    d="M14.748 20.018c-.5 1.27-.834 2.542-.834 3.7a5.965 5.965 0 0 0 11.931 0c0-1.158-.334-2.43-.834-3.7H14.748z" />
                            </g>
                        </svg>
                        Humidity
                    </h3>
                    <p>{{ results.current.humidity }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.home {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    .banner {
        position: relative;
        width: 100%;
        height: 500px;
        background-color: #00000055;
        background-image: url('/img/home-banner.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-inline: 20px;

        h1 {
            font-size: 40px;
            font-weight: 500;
            text-align: center;
        }
    }

    .search {
        position: relative;
        width: 100%;
        height: max-content;
        background-color: transparent;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;

        .container {
            position: relative;
            width: 80vw;
            max-width: 800px;
            height: 100%;
            background-color: white;
            border-radius: 25px;
            box-shadow: 0px 10px 20px #00000033;
            padding: 20px;
            display: grid;
            grid-template-columns: calc(100% - 50px) 50px;
            grid-template-rows: 100%;

            input {
                border: none;
                outline: none;
                height: 100%;
                font-size: 16px;
            }

            svg {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
            }
        }
    }

    .message {
        position: relative;
        width: 100%;
        height: max-content;
        display: flex;
        justify-content: center;
        align-items: center;

        .container {
            position: relative;
            width: 80vw;
            max-width: 800px;
            padding: 20px;
            background-color: rgba(252, 59, 59, 0.28);
            color: rgb(252, 59, 59);
            border-radius: 10px;
        }
    }

    .results {
        position: relative;
        width: 100%;
        height: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        .container {
            position: relative;
            width: 80vw;
            max-width: 800px;
            padding: 20px;
            background-color: white;
            box-shadow: 0px 10px 20px #00000033;
            border-radius: 10px;
            display: grid;
            grid-template-columns: repeat(2, 50%);
            grid-template-rows: auto;
            gap: 20px 10px;

            @media screen and (max-width: 768px) {
                display: block;

                .item {
                    margin-bottom: 20px;
                }
            }

            .item {
                font-weight: 300;

                h2 {
                    color: rgb(0, 106, 255);
                }

                h3 {
                    font-weight: 500;
                }

                p {
                    font-weight: 400;
                    color: #555;
                }
            }
        }
    }
}
</style>