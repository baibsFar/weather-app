export interface WeatherSearchResult {
    country: string
    id: number
    lat: number
    lon: number
    name: string
    region: string
    url: string
}

export interface WeatherCondition {
    code: number
    icon: string
    text: string
}

export interface WeatherCurrent {
    cloud: number
    condition: WeatherCondition
    feelslike_c: number
    feelslike_f: number
    gust_kph: number
    gust_mph: number
    humidity: number
    is_day: number
    last_updated: string
    last_updated_epoch: number
    precip_in: number
    precip_mm: number
    pressure_in: number
    pressure_mm: number
    temp_c: number
    temp_f: number
    uv: number
    vis_km: number
    vis_miles: number
    wind_degree: number
    wind_dir: string
    wind_kph: number
    wind_mph: number
}

export interface WeatherLocation {
    country: string
    lat: number
    localtime: string
    localtime_epoch: number
    lon: number
    name: string
    region: string
    tz_id: string
}

export interface WeatherCurrentResult {
    current: WeatherCurrent
    location: WeatherLocation
}