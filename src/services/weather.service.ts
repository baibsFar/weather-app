import axios from "axios"
import { useEnvService } from "@/services"
import { WeatherCurrentResult, WeatherSearchResult } from "@/types/weather.type"

export default function useWeatherService() {
    const baseURL = useEnvService().get('VITE_WEATHER_BASE_URL')
    const apiKey = useEnvService().get('VITE_WEATHER_KEY')
    const fetcher = axios.create({
        baseURL,
        params: {
            key: apiKey,
            aqi: true
        }
    })

    const getCurrent = async (query: string) => {
        try {
            const { data } = await fetcher.get('/current.json', { params: { q: query } })
            return data as WeatherCurrentResult
        } catch (err) {
            throw err
        }
    }

    const search = async (query: string) => {
        try {
            const { data } = await fetcher.get('/search.json', { params: { q: query } })
            return data as WeatherSearchResult[]
        } catch (err) {
            throw err
        }
    }

    return {
        getCurrent,
        search
    }
}