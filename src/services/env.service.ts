export default function useEnvService() {
    function get(env: string) {
        return import.meta.env[env]
    }

    return { get }
}