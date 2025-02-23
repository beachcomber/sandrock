import 'lite-youtube-embed';


export default defineNuxtPlugin(async () => {
    return {
        provide: {
            'lite-youtube-embed': 'lite-youtube-embed'
        }
    }
});