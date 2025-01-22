import { createContext, useContext, useState } from "react";

export const VideosContext = createContext();

VideosContext.displayName = "Videos";

export default function VideosProvider({ children }) {
    const [video, setVideo] = useState([])

    return <VideosContext.Provider value={{ video, setVideo }}>

        {children}
    </VideosContext.Provider>

}

export function useVideosContext() {
    const { video, setVideo } = useContext(VideosContext);

    function agregarVideo(nuevoVideo) {
        const videoRepetido = video.some(
            (item) => item.id === nuevoVideo.id
        );
        let nuevaLista = [...video]
        if (!videoRepetido) {
            nuevaLista.push(nuevoVideo)
            return setVideo(nuevaLista)
        }

        nuevaLista = video.filter(item => item.id !== nuevoVideo)
        return setVideo(nuevaLista)
    }

    return { video, agregarVideo }
}