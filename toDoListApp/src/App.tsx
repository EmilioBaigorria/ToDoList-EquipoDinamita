import { Administration } from "./components/screens/Administration/Administration"
import { ModalGenerico } from "./components/modals/MGenerico/modalGenerico"
import { useState } from "react"

function App() {

    const [isModalOpen] = useState(true)

    return (
        <>
            <Administration/>
            <ModalGenerico 
            isOpen={isModalOpen}
            onClose={() => {}}
            title="Modal Generico"
            fields={["titulo"]}
            />
        </>
    )

}

export default App
