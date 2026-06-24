
import AboutPets from "../Component/PetsPage/AboutPets"
import WestvilleCottage from "../Component/ReusableComp/WestvilleCottage"
import Whatsprovided from "../Component/PetsPage/WhatsProvided/WhatsProvided"
import MustDos from "../Component/PetsPage/MustDos/MustDos"

function PetsPage() {
    return (
        <div>
            <WestvilleCottage />
            <AboutPets />
            <Whatsprovided />
            <div className="py-5" />
            <MustDos />

        </div>
    )
}

export default PetsPage